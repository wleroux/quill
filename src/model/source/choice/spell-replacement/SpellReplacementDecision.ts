import {SpellID} from "@/model/source/model/Spell";

export type SpellReplacementDecision = {
  type: "spell-replacement";
  data: {
    sourceID: string;
    spellID: SpellID;
  }
};
