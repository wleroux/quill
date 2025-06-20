import {Character} from "@/model/character/Character";
import {Condition} from "@/model/source/condition/Condition";

export function not<T>(condition: Condition<T>): Condition<T> {
  return (value: T, context: Character) => !condition(value, context)
}
