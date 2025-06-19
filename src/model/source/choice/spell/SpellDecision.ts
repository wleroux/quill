import {SpellID} from "@/model/source/model/Spell";

export type SpellDecision = {
  type: "spell";
  data: {
    spellID: SpellID;
  }
};
