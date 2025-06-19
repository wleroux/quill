import {Condition} from "@/model/source/condition/Condition";

export function alwaysFalse<T>(): Condition<T> {
  return () => false
}

