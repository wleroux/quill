import {Condition} from "@/model/source/condition/Condition";
import {Character} from "@/model/character/Character";

export function all<T>(...conditions: Condition<T>[]): Condition<T> {
  return (value: T, context: Character) => conditions.every(condition => condition(value, context))
}
