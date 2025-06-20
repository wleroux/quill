import {DropdownField} from "@/lib/components/DropdownField";
import {FieldSet} from "@/lib/components/FieldSet";
import {BackgroundChoice} from "@/model/character/create/background/BackgroundChoice";
import {BackgroundDecision} from "@/model/character/create/background/BackgroundDecision";
import {REPOSITORY} from "@/model/source/index";
import {Character} from "@/model/character/Character";
import {ChoicesField} from "@/model/source/choice/ChoicesField";

export function BackgroundField({value, choice, decision, onChange}: {
  value: Character,
  choice: BackgroundChoice,
  decision?: BackgroundDecision | undefined,
  onChange: (fn: (prev: BackgroundDecision | undefined) => BackgroundDecision | undefined) => void
}) {
  const VALID_BACKGROUND = Object.keys(REPOSITORY.BACKGROUNDS)
    .filter(backgroundID => {
      if (choice.data.condition && !choice.data.condition(backgroundID, value)) return false;
      const background = REPOSITORY.BACKGROUNDS[backgroundID]
      if (background.prerequisite && !background.prerequisite(undefined, value)) return false;
      return true;
    });
  const background = decision?.data.backgroundID ? REPOSITORY.BACKGROUNDS[decision.data.backgroundID] : undefined;
  return <FieldSet inline>
    <DropdownField label="Background" value={decision?.data.backgroundID} onChange={ev => {
      const backgroundID = ev.target.value;
      onChange(_ => ({
        type: "background",
        data: {backgroundID, decisions: {}}
      }));
    }} options={VALID_BACKGROUND.map(backgroundID => ({value: backgroundID, label: REPOSITORY.BACKGROUNDS[backgroundID].label}))} />
    {background && decision && <ChoicesField value={
      {...value, backgroundID: decision.data.backgroundID}
    } choices={background.choices} decisions={decision.data.decisions} onChange={(fn) => {
      onChange(prev => {
        if (prev === undefined) return undefined;
        return ({
          ...prev,
          data: {
            ...prev.data,
            decisions: fn(prev.data.decisions)
          }
        })
      })
    }} />}
  </FieldSet>
}