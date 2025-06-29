import {DynamoDBClient} from '@aws-sdk/client-dynamodb';
import {DynamoDBDocumentClient, TransactWriteCommand, TransactWriteCommandInput} from "@aws-sdk/lib-dynamodb";
import {AsyncLocalStorage} from "node:async_hooks";

type TransactionItem = Exclude<TransactWriteCommandInput["TransactItems"], undefined>;

const db = new DynamoDBClient({});
export const dynamoDBClient = DynamoDBDocumentClient.from(db, {
  marshallOptions: {
    removeUndefinedValues: true
  }
});

class UnitOfWork {
  private loaders: {[key: string]: any} = {};
  private TransactItems: TransactionItem = [];
  private postCommits: (() => void)[] = [];
  send(...items: TransactionItem) {
    this.TransactItems.push(...items);
  }
  async commit() {
    const TransactItems = this.TransactItems;
    this.TransactItems = [];
    if (TransactItems.length > 0) {
      try {
        await dynamoDBClient.send(new TransactWriteCommand({
          TransactItems: TransactItems
        }));
      } catch (e) {
        console.error(JSON.stringify(TransactItems), e);
        throw e;
      }
    }
    const postCommits = this.postCommits;
    this.postCommits = [];
    postCommits.forEach((fn) => {
      try {
        fn();
      } catch (error) {
        console.error(error)
      }
    });
  }
  getLoader<T>(key: string, fn: () => T): T {
    const loader = this.loaders[key];
    if (loader === undefined) this.loaders[key] = fn();
    return this.loaders[key];
  }

  postCommit(fn: () => void): void {
    this.postCommits.push(fn);
  }
}
const uowContext = new AsyncLocalStorage<UnitOfWork>();
export function tx<T extends any[], V>(fn: (...args: T) => Promise<V>): (...args: T) => Promise<V> {
  return async (...args: T): Promise<V> => {
    const uow = uowContext.getStore();
    if (uow === undefined) {
      const uow = new UnitOfWork();
      const result = await uowContext.run(uow, () => fn(...args));
      await uow.commit();
      return result;
    } else {
      return fn(...args);
    }
  }
}

export function send(...items: TransactionItem) {
  const uow = uowContext.getStore();
  if (uow === undefined) throw new Error("Not in TX");
  uow.send(...items);
}

export function postCommit(fn: () => void) {
  const uow = uowContext.getStore();
  if (uow === undefined) throw new Error("Not in TX");
  uow.postCommit(fn);
}

export function getLoader<T>(key: string, fn: () => T) {
  const uow = uowContext.getStore();
  if (uow === undefined) {
    return fn();
  }
  return uow.getLoader(key, fn);
}
