import {DropdownField} from "@/lib/components/DropdownField";
import {ExpertiseDecision} from "@/model/source/choice/expertise/ExpertiseDecision";
import {ExpertiseChoice} from "@/model/source/choice/expertise/ExpertiseChoice";
import {Character} from "@/model/character/Character";
import {useEffect} from "react";
import {SKILL_IDS, SKILLS} from "@/model/source/Skill";

export function ExpertiseField({value, choice, decision, onChange}: {value: Character, choice: ExpertiseChoice, decision: ExpertiseDecision | undefined, onChange: (value: ExpertiseDecision | undefined) => void}) {
  const VALID_SKILLS = SKILL_IDS
    .filter(skillID => value.skills[skillID] === "proficient")
    .filter(skillID => choice.data.condition === undefined || choice.data.condition(skillID, value));
  useEffect(() => {
    if (decision === undefined && VALID_SKILLS.length === 1) {
      onChange({type: "expertise", data: {skillID: VALID_SKILLS[0]}})
    }
  }, [decision === undefined])
  return <DropdownField
    disabled={VALID_SKILLS.length === 0 || VALID_SKILLS.length === 1 && VALID_SKILLS[0] === decision?.data.skillID}
    label={choice.data.label ?? "Expertise"}
    value={decision?.data.skillID}
    options={VALID_SKILLS
    .map((skillID) => ({
      value: skillID,
      label: SKILLS[skillID].label ?? skillID
    }))}
    onChange={ev => onChange({type: "expertise", data: {skillID: ev.target.value}})} />
}
