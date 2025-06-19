import {Character} from "@/model/player/character/Character";

export type Condition<T> = (value: T, context: Character) => boolean;
