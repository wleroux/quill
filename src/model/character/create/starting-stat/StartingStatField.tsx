import {ATTRIBUTE_IDS, AttributeID} from "@/model/source/model/Attribute";
import {AbilityScoreField} from "@/lib/components/AbilityScoreField";
import React, {useState} from "react";
import {StartingStatChoice} from "@/model/character/create/starting-stat/StartingStatChoice";
import {StartingStatDecision} from "@/model/character/create/starting-stat/StartingStatDecision";
import {twMerge} from "tailwind-merge";
import {getPointCost} from "@/model/character/create/starting-stat/StartingStatProcessor";

function getStatMod(value: number) {
  const v = Math.floor((value - 10) / 2);
  if (v < 0) return `${v}`;
  return `+${v}`;
}

function getHighestBaseScore(choice: StartingStatChoice, value: StartingStatDecision, attribute: AttributeID) {
  const currentValue = value.data[attribute];
  for (let i = currentValue; i <= 15; i ++) {
    const temp = {
      ...value.data,
      [attribute]: i
    };
    const points = ATTRIBUTE_IDS.map(attr => getPointCost(temp[attr])).reduce((sum, a) => sum + a, 0)
    if (choice.data.points < points) return i - 1;
  }
  return 15;
}

export function StartingStatField({choice, value, onChange}: {
  choice: StartingStatChoice,
  value: StartingStatDecision,
  onChange: (value: StartingStatDecision) => void
}) {
  const points = ATTRIBUTE_IDS.map(attr => getPointCost(value.data[attr])).reduce((sum, a) => sum + a, 0);

  return <>
    <div className="flex flex-row gap-4 justify-around pb-2">
      {ATTRIBUTE_IDS.map(attributeID => <div key={attributeID} className="flex flex-col items-center gap-2">
          <label htmlFor={attributeID} className="text-lg font-[family-name:var(--font-audiowide)]">{attributeID.toUpperCase()} {getStatMod(value.data[attributeID])}</label>
          <AbilityScoreField inputId={attributeID} value={value.data[attributeID]} onValueChange={ev => {
            const field = Math.min(Math.max(8, ev.target.value ?? 8), 15);
            onChange({
              type: "starting-stat",
              data: {
                ...value.data,
                [attributeID]: field
              }
            })
          }} maxFractionDigits={0} min={8} max={getHighestBaseScore(choice, value, attributeID)} showButtons/>
        </div>
      )}
    </div>
    <div className="flex flex-row justify-end text-sm opacity-75 flex flex-row gap-2 pt-4 italic">
      <span>Points Remaining</span>
      <span className={twMerge(
        points < choice.data.points && "text-red-400"
      )}>{choice.data.points - points} / {choice.data.points}</span>
    </div>
  </>
}