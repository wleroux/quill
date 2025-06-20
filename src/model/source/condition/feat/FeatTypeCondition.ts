import {FeatCategory, FeatID} from "@/model/source/model/Feat";
import {REPOSITORY} from "@/model/source/index";
import {Character} from "@/model/character/Character";
import {Condition} from "@/model/source/condition/Condition";

export function featType(...types: FeatCategory[]): Condition<FeatID> {
  return (value: FeatID, context: Character) => {
    const feat = REPOSITORY.FEATS[value];
    if (feat === undefined) return false;
    return types.includes(feat.category);
  }
}