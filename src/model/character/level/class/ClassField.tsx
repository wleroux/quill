import {REPOSITORY} from "@/model/source/index";
import {neverTaken} from "@/model/source/condition/level/NeverTaken";
import {FieldSet} from "@/lib/components/FieldSet";
import {DropdownField} from "@/lib/components/DropdownField";
import {ChoicesField} from "@/model/source/choice/ChoicesField";
import {Character} from "@/model/character/Character";
import {ClassChoice} from "@/model/character/level/class/ClassChoice";
import {ClassDecision} from "@/model/character/level/class/ClassDecision";
import {ClassID} from "@/model/source/model/Level";
import {canMulticlass} from "./ClassProcessor";

export function ClassField({value, choice, decision, onChange}: {
  value: Character,
  choice: ClassChoice,
  decision: ClassDecision | undefined,
  onChange: (fn: (prev: ClassDecision | undefined) => ClassDecision | undefined) => void
}) {
  const VALID_CLASSES = Object.keys(REPOSITORY.CLASSES)
    .filter(levelID => {
      const _class = REPOSITORY.CLASSES[levelID];
      if (_class.replace) {
        if (!value.classIDs.some(classID => classID === _class.replace))
          return false;
        if (value.classIDs.some(classID => REPOSITORY.CLASSES[classID].replace === _class.replace))
          return false;
      }
      return true;
    })
    .filter(canMulticlass(value.classIDs, value)
      ? (_) => true
      : (levelID) => (REPOSITORY.CLASSES[levelID].replace !== undefined)
    )
    .filter(levelID => choice.data.condition === undefined || choice.data.condition(levelID, value))
    .filter(levelID => {
      const level = REPOSITORY.CLASSES[levelID];
      return level.prerequisite === undefined || level.prerequisite(undefined, value)
    })
    .filter(levelID => neverTaken(levelID, value));

  const _class = decision?.data.classID ? REPOSITORY.CLASSES[decision.data.classID] : undefined;
  return <FieldSet inline>
    <DropdownField label="Class" value={decision?.data.classID} options={[
      ...VALID_CLASSES.map(levelID => ({value: levelID, label: REPOSITORY.CLASSES[levelID].label})),
    ]} onChange={ev => {
      onChange(() => ({type: "class", data: {classID: ev.target.value as ClassID, decisions: {}}} satisfies ClassDecision));
    }} />

    {_class && decision && decision && <ChoicesField
      value={{...value, classIDs: [...value.classIDs, decision.data.classID]}}
      choices={_class.choices}
      decisions={decision.data.decisions}
      onChange={fn => onChange((prev?: ClassDecision): ClassDecision | undefined => {
        if (prev === undefined) return undefined;
        return ({
          ...prev,
          data: {
            ...prev.data,
            decisions: fn(prev.data.decisions)
          }
        });
      })}
    />}
  </FieldSet>
}