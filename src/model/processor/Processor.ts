import {Character} from "@/model/character/Character";
import {Result} from "@/model/processor/Result";

export class ProcessorError {
  constructor(readonly code: string, readonly path: string[], readonly choice: any, readonly decision?: any) {}
  extend(path: string): ProcessorError {
    return new ProcessorError(this.code, [path, ...this.path], this.choice, this.decision)
  }

  toString() {
    return `${this.code} at ${this.path.join(" / ")}:\nCHOICE: ${JSON.stringify(this.choice)}\nDECISION: ${JSON.stringify(this.decision)}`
  }
}

export type Processor<C, D> = (value: Character, choice: C, decision: D) => Result<Character, ProcessorError[]>;
