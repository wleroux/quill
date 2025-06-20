import {Condition} from "@/model/source/condition/Condition";
import {Character} from "@/model/character/Character";

export function any<T>(...conditions: Condition<T>[]): Condition<T> {
  return (value: T, context: Character) => conditions.some(condition => condition(value, context));
}
