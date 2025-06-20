import {Choice} from "@/model/source/choice/Choice";
import {choiceProcessor} from "@/model/source/choice/ChoiceProcessor";
import {ChoiceField} from "@/model/source/choice/ChoiceField";
import {FieldSet} from "@/lib/components/FieldSet";
import {Character} from "@/model/character/Character";
import {Decision} from "@/model/source/choice/Decision";
import {ChoiceID} from "./ChoiceID";

export function ChoicesField({value, choices, decisions, onChange}: {
  value: Character,
  choices: Choice[],
  decisions: {[choiceID: ChoiceID]: Decision},
  onChange: (fn: (prev: {[choiceID: ChoiceID]: Decision}) => {[choiceID: ChoiceID]: Decision}) => void
}) {
  const enabledChoices = choices.filter(choice => choice.data.enabled === undefined || choice.data.enabled(undefined, value));
  if (enabledChoices.length === 0) {
    return <></>
  }


  let group: React.ReactNode[] = [];
  const jsx: React.ReactNode[] = [];
  for (let index = 0; index < choices.length; index ++) {
    const choice = choices[index];
    if (choice.data.enabled !== undefined && !choice.data.enabled(undefined, value)) continue;

    let prevCharacter = value;
    const decision = decisions[choice.data.choiceID];
    if (choiceProcessor(prevCharacter, choice, decision).valid) {
      value = choiceProcessor(prevCharacter, choice, decision).orThrow();
    }
    group.push(<ChoiceField key={choice.data.choiceID} character={prevCharacter} choice={choice} decision={decisions[choice.data.choiceID]} onChange={choiceValue => onChange(prev => ({
      ...prev,
      [choice.data.choiceID]: choiceValue!
    }))} />);

    let isLastOfType = (choices.length === index + 1) || (choices[index].data.label ?? choices[index].type) !== (choices[index + 1].data.label ?? choices[index + 1].type);
    if (isLastOfType && group.length > 0) {
      jsx.push(<FieldSet key={index} inline>{group}</FieldSet>);
      group = [];
    }
  }

  return <FieldSet>
    {jsx}
  </FieldSet>
}
