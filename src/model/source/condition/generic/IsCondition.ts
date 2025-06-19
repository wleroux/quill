import {Character} from "@/model/player/character/Character";
import {Condition} from "@/model/source/condition/Condition";

export function is<T>(...targets: T[]): Condition<T> {
  return (value: T, context: Character) => targets.includes(value);
}
