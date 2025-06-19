import {AttributeID} from "@/model/source/model/Attribute";
import {Condition} from "@/model/source/condition/Condition";
import {Character} from "@/model/player/character/Character";

export function minStat(attributeID: AttributeID, value: number): Condition<any> {
  return (_, context: Character) => context.stats[attributeID] >= value;
}
