import {SpellID, SpellSchool} from "@/model/source/model/Spell";
import {REPOSITORY} from "@/model/source/index";

export function spellSchool(...school: SpellSchool[]) {
  return (spellID: SpellID) => {
    return school.some(school => REPOSITORY.SPELLS[spellID].school === school);
  }
}