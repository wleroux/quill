import {Character} from "@/model/character/Character";
import {LevelChoice} from "@/model/character/level/LevelChoice";
import {LevelDecision} from "@/model/character/level/LevelDecision";
import {ClassField} from "@/model/character/level/class/ClassField";
import {FieldSet} from "@/lib/components/FieldSet";
import {Field} from "@/lib/components/Field";
import {FieldLabel} from "@/lib/components/FieldLabel";
import {ItemField} from "@/model/character/level/item/ItemField";
import React from "react";
import {classProcessor} from "./class/ClassProcessor";
import {itemProcessor} from "@/model/character/level/item/ItemProcessor";

export function LevelChoiceField({value, choice, decision, onChange}: {
  value: Character,
  choice: LevelChoice["data"]["choices"][number],
  decision: LevelDecision["data"]["decisions"][string] | undefined,
  onChange: (fn: (prev: LevelDecision["data"]["decisions"][string] | undefined) => LevelDecision["data"]["decisions"][string] | undefined) => void
}) {
  if (choice.data.enabled && !choice.data.enabled(undefined, value)) return <></>
  if (choice.type === "class" && (decision?.type === undefined || decision.type === "class")) {
    return <ClassField value={value} choice={choice} decision={decision} onChange={fn => onChange(prev => {
      if (prev === undefined || prev.type === "class") return fn(prev);
      return prev;
    })} />
  } else if (choice.type === "item" && (decision?.type === undefined || decision.type === "item")) {
    return <ItemField value={value} choice={choice} decision={decision} onChange={fn => onChange(prev => {
      if (prev === undefined || prev.type === "item") return fn(prev);
      return prev;
    })} />
  }
  return <Field>
    <FieldLabel>Unknown Choice: {choice.type}</FieldLabel>
  </Field>
}

export function LevelField({value, choice, decision, onChange}: {
  value: Character,
  choice: LevelChoice,
  decision?: LevelDecision,
  onChange: (fn: (prev: LevelDecision | undefined) => LevelDecision | undefined) => void
}) {
  const enabledChoices = choice.data.choices.filter(choice => choice.data.enabled === undefined || choice.data.enabled(undefined, value));
  if (enabledChoices.length === 0) {
    return <></>
  }

  let group: React.ReactNode[] = [];
  const jsx: React.ReactNode[] = [];
  if (decision !== undefined) value = {...value, progress: [...value.progress, decision]}
  for (let index = 0; index < choice.data.choices.length; index ++) {
    const subchoice = choice.data.choices[index];
    if (subchoice.data.enabled !== undefined && !subchoice.data.enabled(undefined, value)) continue;

    let prevCharacter = value;
    const subdecision = decision?.data.decisions[subchoice.data.choiceID];
    if (subchoice.type === "class" && (subdecision === undefined || subdecision.type === "class")) {
      if (classProcessor(prevCharacter, subchoice, subdecision).valid) {
        value = classProcessor(prevCharacter, subchoice, subdecision).orThrow();
      }
    } else if (subchoice.type === "item" && (subdecision === undefined || subdecision.type === "item")) {
      if (itemProcessor(prevCharacter, subchoice, subdecision).valid) {
        value = itemProcessor(prevCharacter, subchoice, subdecision).orThrow();
      }
    }

    group.push(<LevelChoiceField key={subchoice.data.choiceID} value={prevCharacter} choice={subchoice} decision={subdecision} onChange={fn => {
      return onChange(prev => {
        if (prev === undefined) return {
          type: "level",
          data: {
            decisions: {
              [subchoice.data.choiceID]: fn(undefined)!
            }
          }
        };

        return ({
          ...prev,
          data: {
            ...prev.data,
            decisions: {
              ...prev.data.decisions,
              [subchoice.data.choiceID]: fn(prev.data.decisions[subchoice.data.choiceID])!
            }
          }
        })
      })
    }} />);

    let isLastOfType = (choice.data.choices.length === index + 1) || (choice.data.choices[index].data.label ?? choice.data.choices[index].type) !== (choice.data.choices[index + 1].data.label ?? choice.data.choices[index + 1].type);
    if (isLastOfType && group.length > 0) {
      jsx.push(<FieldSet key={index} inline>{group}</FieldSet>);
      group = [];
    }
  }

  return <FieldSet>
    {jsx}
  </FieldSet>
}
