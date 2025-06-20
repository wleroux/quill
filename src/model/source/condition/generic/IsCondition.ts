import {Character} from "@/model/character/Character";
import {Condition} from "@/model/source/condition/Condition";

export function is<T>(...targets: T[]): Condition<T> {
  return (value: T, context: Character) => targets.includes(value);
}
