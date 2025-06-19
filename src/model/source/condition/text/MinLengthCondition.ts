import {Condition} from "@/model/source/condition/Condition";

export function minTextLength(length: number): Condition<string> {
  return (value: string): boolean => {
    return value.length >= length;
  }
}
