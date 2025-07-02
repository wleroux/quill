import {DropdownField} from "@/lib/components/DropdownField";
import {SkillDecision} from "@/model/source/choice/skill/SkillDecision";
import {SkillChoice} from "@/model/source/choice/skill/SkillChoice";
import {SKILL_IDS, SKILLS} from "@/model/source/Skill";
import {Character} from "@/model/character/Character";
import {useEffect} from "react";

export function SkillField({character, choice, value, onChange}: {character: Character, choice: SkillChoice, value: SkillDecision | undefined, onChange: (value: SkillDecision | undefined) => void}) {
  const VALID_SKILLS = SKILL_IDS
    .filter(skillID => !character.skills.includes(skillID))
    .filter(skillID => choice.data.condition === undefined || choice.data.condition(skillID, character));
  useEffect(() => {
    if (value === undefined && VALID_SKILLS.length === 1) {
      onChange({type: "skill", data: {skillID: VALID_SKILLS[0]}})
    }
  }, [value === undefined])
  return <DropdownField
    disabled={VALID_SKILLS.length === 0 || VALID_SKILLS.length === 1 && VALID_SKILLS[0] === value?.data.skillID}
    label={choice.data.label ?? "Skill"}
    value={value?.data.skillID}
    options={VALID_SKILLS
    .map((skillID) => ({
      value: skillID,
      label: `${SKILLS[skillID].label} (${SKILLS[skillID].attribute.toUpperCase()})`
    }))}
    onChange={ev => onChange({type: "skill", data: {skillID: ev.target.value}})} />
}
