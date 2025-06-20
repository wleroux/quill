import {Character} from "@/model/character/Character";

export type Condition<T> = (value: T, context: Character) => boolean;
