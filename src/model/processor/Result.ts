export type Result<Value, Error> = ValidResult<Value> | ErrorResult<Error>;
export class ValidResult<Value> {
  readonly valid = true;
  private constructor(public readonly value: Value) {}
  static of<Value>(value: Value): Result<Value, any> {
    return new ValidResult<Value>(value);
  }
  flatMap<V2, E2>(fn: (value: Value) => Result<V2, E2>): Result<V2, E2> {
    return fn(this.value)
  }
  mapError<E2>(_: (error: never) => E2): Result<Value, E2> {
    return this;
  }
  orElse(value: Value): Value {
    return this.value
  }
  orThrow(): Value {
    return this.value;
  }
}
export class ErrorResult<Error> {
  readonly valid = false;
  private constructor(public readonly error: Error) {}
  static of<Error>(error: Error): Result<any, Error> {
    return new ErrorResult<Error>(error);
  }

  flatMap<V2, E2>(_: (value: never) => Result<V2, E2>): Result<any, Error> {
    return this;
  }
  mapError<E2>(fn: (error: Error) => E2): Result<any, E2> {
    return ErrorResult.of(fn(this.error));
  }
  orElse<Value>(value: Value): Value {
    return value;
  }
  orThrow(): never {
    // @ts-ignore
    throw new Error(this.error);
  }
}
