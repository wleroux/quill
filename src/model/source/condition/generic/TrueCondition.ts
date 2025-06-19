import {Condition} from "@/model/source/condition/Condition";

export function alwaysTrue<T>(): Condition<T> {
  return () => true;
}
