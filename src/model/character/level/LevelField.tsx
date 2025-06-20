import {Character} from "@/model/character/Character";
import {LevelChoice} from "@/model/character/level/LevelChoice";
import {LevelDecision} from "@/model/character/level/LevelDecision";
import {REPOSITORY} from "@/model/source/index";
import {DropdownField} from "@/lib/components/DropdownField";
import {FieldSet} from "@/lib/components/FieldSet";
import {neverTaken} from "@/model/source/condition/level/NeverTaken";
import {ChoicesField} from "@/model/source/choice/ChoicesField";
import {addLevel} from "@/model/character/level/LevelProcessor";

export function LevelField({value, choice, decision, onChange}: {
  value: Character,
  choice: LevelChoice,
  decision?: LevelDecision,
  onChange: (fn: (prev: LevelDecision | undefined) => LevelDecision | undefined) => void
}) {
  const VALID_LEVELS = Object.keys(REPOSITORY.LEVELS)
    .filter(levelID => {
      const level = REPOSITORY.LEVELS[levelID];
      return (level.replace === undefined || value.levels.includes(level.replace));
    })
    .filter(levelID => choice.data.condition === undefined || choice.data.condition(levelID, value))
    .filter(levelID => {
      const level = REPOSITORY.LEVELS[levelID];
      return level.prerequisite === undefined || level.prerequisite(undefined, value)
    })
    .filter(levelID => neverTaken(levelID, value));

  const level = decision?.data.levelID ? REPOSITORY.LEVELS[decision.data.levelID] : undefined;
  const required = choice.data.required === undefined || choice.data.required(undefined, value);
  return <FieldSet inline>
    <DropdownField label="Class" value={decision?.data.levelID} options={[
      ...VALID_LEVELS.map(levelID => ({value: levelID, label: REPOSITORY.LEVELS[levelID].label})),
      ...(required ? [] : [{value: "NONE", label: "None"}])
    ]} onChange={ev => {
      if (ev.target.value === "NONE") onChange(() => undefined);
      else onChange(() => ({type: "level", data: {levelID: ev.target.value, decisions: {}}} satisfies LevelDecision));
    }} />

    {level && value && decision && <ChoicesField value={
      {...value, level: value.level + 1, levels: addLevel(value.levels, decision.data.levelID)}
    } choices={level.choices} decisions={decision.data.decisions} onChange={fn => onChange((prev?: LevelDecision): LevelDecision | undefined => {
      if (prev === undefined) return undefined;
      return ({
        ...prev,
        data: {
          ...prev.data,
          decisions: fn(prev.data.decisions)
        }
      });
    })} />}
  </FieldSet>
}
