import {PageTitle} from "@/lib/components/PageTitle";
import {Dialog, DialogPassThroughOptions} from "primereact/dialog";
import {Stepper, StepperPassThroughOptions} from "primereact/stepper";
import {StepperPanel, StepperPanelPassThroughOptions} from "primereact/stepperpanel";
import React, {useState} from "react";
import {twMerge} from "tailwind-merge";
import {AbilityScoreField} from "@/lib/components/AbilityScoreField";
import {Button} from "@/lib/components/Button";
import {SpecieField} from "@/lib/components/SpecieField";
import {Specie} from "@/model/specie";
import {Background} from "@/model/background";
import {BackgroundField} from "@/lib/components/BackgroundField";
import {TextField} from "@/lib/components/TextField";
import {Attribute, ATTRIBUTES} from "@/model/attribute";
import {ClassLevelerField} from "@/lib/components/leveler/ClassLevelerField";
import {Class, getClassLabel} from "@/model/class/Class";
import {FieldSet} from "@/lib/components/FieldSet";
import {Field} from "@/lib/components/Field";
import {FieldRow} from "@/lib/components/FieldRow";
import {SectionLabel} from "@/lib/components/SectionLabel";
import {NumberField} from "@/lib/components/NumberField";
import {DropdownField} from "@/lib/components/DropdownField";

const stepperPt: StepperPassThroughOptions = {
  nav: {
    className: "gap-8 border-b border-[color:var(--foreground)]/20 font-[family-name:var(--font-audiowide)] flex flex-row p-4 overflow-hidden overflow-x-auto bg-black/10"
  },
  stepperpanel: {
    className: "flex flex-row"
  },
  panelContainer: {
    className: "p-4"
  },
};
const stepperPanelPt: StepperPanelPassThroughOptions = {
  header: {
    className: "h-10 flex items-center text-lg flex-row text-nowrap",
  },
  number: {
    className: "w-8 h-8 items-center flex justify-center rounded-full border border-[color:var(--foreground)] drop-shadow-md hover:outline",
  },
  action: (props) => ({
    className: twMerge(
      "flex flex-row gap-2 flex-1 cursor-pointer",
      props.context.active ? "font-bold" : "opacity-65"
    )
  })
};
const modalPt: DialogPassThroughOptions = {
  root: {
    className: "bg-[color:var(--background)] container border border-[color:var(--foreground)]/20 drop-shadow-lg rounded-md mt-32 mb-40"
  },
  header: {
    className: "p-4 bg-black/40 rounded-t-md border-b border-[color:var(--foreground)]/20"
  },
  headerTitle: {
    className: "flex-1"
  },
  closeButton: {
    className: "cursor-pointer border rounded-md border border-[color:var(--foreground)]/50 hover:outline"
  },
  footer: {
    className: "p-4 bg-black/40 rounded-b-md border-t border-[color:var(--foreground)]/20"
  },
  content: {
    className: "bg-transparent p-0"
  },
  mask: {
    className: "bg-black/50 items-start overflow-y-auto",
    style: {alignItems:"start"}
  }
};

type NewCharacter = {
  name: string;
  token: string;
  startingLevel: 2 | 3;
  str: number; dex: number; con: number; int: number; wis: number; cha: number;
  specie?: Specie;
  background?: Background;
  main?: Class<any>;
  secondary?: Class<any>;
};

function getStatMod(value: number) {
  const v = Math.floor((value - 10) / 2);
  if (v < 0) return `${v}`;
  return `+${v}`;
}

function getPointCost(value: number) {
  if (value === 8) return 0;
  if (value === 9) return 1;
  if (value === 10) return 2;
  if (value === 11) return 3;
  if (value === 12) return 4;
  if (value === 13) return 5;
  if (value === 14) return 7;
  if (value === 15) return 9;
  return Number.POSITIVE_INFINITY;
}

function getRemainingPoints(character: NewCharacter) {
  return 27
    - getPointCost(character.str)
    - getPointCost(character.dex)
    - getPointCost(character.con)
    - getPointCost(character.int)
    - getPointCost(character.wis)
    - getPointCost(character.cha)
    ;
}
function getLevel(character: NewCharacter) {
  return (character.main?.level ?? 0) + (character.secondary?.level ?? 0);
}

function getHighestBaseScore(character: NewCharacter, attribute: Attribute) {
  const currentValue = character[attribute];
  for (let i = currentValue; i <= 15; i ++) {
    if (getRemainingPoints({
      ...character,
      [attribute]: i
    }) < 0) return i - 1;
  }
  return 15;
}

function isValidCharacter(character: NewCharacter) {
  if (character.name.length < 3) return false;
  if (getRemainingPoints(character) !== 0) return false;
  if (character.specie === undefined) return false;
  if (character.background === undefined) return false;
  if (getLevel(character) !== character.startingLevel) return false;
  return true;
}

export function CreateCharacterDialog({visible, onClose}: {visible: boolean, onClose?: () => void}) {
  const [character, setCharacter] = useState<NewCharacter>({
    name: "",
    token: "",
    startingLevel: 3,
    str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10,
    specie: undefined,
    background: undefined,
    main: undefined,
    secondary: undefined
  });

  return <Dialog
    focusOnShow={false}
    draggable={false}
    modal
    visible={visible} onHide={onClose ? onClose : () => {}}
    pt={modalPt}
    header={<PageTitle>New Character</PageTitle>}
    children={<div className="flex flex-col gap-0">
      <div className="px-4 py-4 border-b border-[color:var(--foreground)]/20 flex flex-row gap-4 items-end">
        <div className="flex-0 shrink-0">
          <div
            className="w-18 h-18 rounded-md bg-black/20 flex items-center justify-center aspect-square border border-[color:var(--foreground)]/50 hover:outline overflow-hidden cursor-pointer">
            <span className="pi pi-image text-xl"/>
          </div>
        </div>
        <div className="flex-1">
          <TextField label="Name" value={character.name} onChange={(ev) => setCharacter(prev => ({...prev, name: ev.target.value}))} autoFocus />
        </div>
      </div>

      {/** @ts-ignore */}
      <Stepper orientation="horizontal" pt={stepperPt}>
        <StepperPanel pt={stepperPanelPt} header="Base Stats">
          <div className="flex flex-row gap-4 justify-around pb-2">
            {ATTRIBUTES.map(attribute => <div key={attribute} className="flex flex-col items-center gap-2">
                <label htmlFor={attribute} className="text-lg font-[family-name:var(--font-audiowide)]">{attribute.toUpperCase()} {getStatMod(character[attribute])}</label>
                <AbilityScoreField inputId={attribute} value={character[attribute]} onValueChange={ev => {
                  const value = Math.min(Math.max(8, ev.value ?? 8), 15);
                  setCharacter(prev => {
                    if (getRemainingPoints({...prev, [attribute]: value}) < 0) return prev;
                    return ({
                      ...prev,
                      [attribute]: Math.min(Math.max(8, ev.value ?? 8), 15)
                    })
                  })
                }} maxFractionDigits={0} min={8} max={getHighestBaseScore(character, attribute)} showButtons />
              </div>
            )}
          </div>
          <div className="flex flex-row justify-end text-sm opacity-75 flex flex-row gap-2 pt-4 italic">
            <span>Points Remaining</span>
            <span className={twMerge(
              getRemainingPoints(character) < 0 && "text-red-400"
            )}>{getRemainingPoints(character)} / 27</span>
          </div>
        </StepperPanel>
        <StepperPanel pt={stepperPanelPt} header="Specie">
          <SpecieField value={character.specie} onChange={value => setCharacter(prev => ({...prev, specie: value}))}/>
        </StepperPanel>
        <StepperPanel pt={stepperPanelPt} header="Background">
          <BackgroundField value={character.background} onChange={value => setCharacter(prev => ({...prev, background: value}))}/>
        </StepperPanel>
        <StepperPanel pt={stepperPanelPt} header="Classes">
          <FieldSet inline>
            <FieldRow>
              <DropdownField label="Starting Level" value={character.startingLevel} onChange={ev => setCharacter(prev => ({...prev, startingLevel: ev.value}))} options={[
                {value: 2, label: "Level 2"},
                {value: 3, label: "Level 3"},
                {value: 5, label: "Level 5"},
                {value: 9, label: "Level 9"},
                {value: 13, label: "Level 13"},
                {value: 17, label: "Level 17"},
                {value: 20, label: "Level 20"}
              ].filter(option => option.value >= getLevel(character))} />
            </FieldRow>
            {(character.main || character.secondary) && <Field>
              <SectionLabel>Current Level</SectionLabel>
              <FieldSet>
                <FieldRow>
                  {character.main && <NumberField label={`${getClassLabel(character.main)} ${character.main.level}`} min={character.secondary ? 1 : 0} max={character.main.level} value={character.main.level} onChange={(ev) => {
                    setCharacter(prev => {
                      if (!prev.main) return prev;
                      if (ev.value === 0) {
                        if (prev.secondary) return prev;
                        return ({...prev, main: undefined});
                      }
                      return ({...prev, main: {...prev.main, level: ev.value} as Class<any>});
                    });
                  }} />}
                  {character.secondary && <NumberField label={`${getClassLabel(character.secondary)} ${character.secondary.level}`} min={0} max={character.secondary.level} value={character.secondary.level} onChange={(ev) => {
                    setCharacter(prev => {
                      if (!prev.secondary) return prev;
                      if (ev.value === 0) return ({...prev, secondary: undefined});
                      return ({...prev, secondary: {...prev.secondary, level: ev.value} as Class<any>});
                    });
                  }} />}
                </FieldRow>
              </FieldSet>
            </Field>}
            {character.startingLevel > getLevel(character) && <ClassLevelerField
              main={character.main}
              secondary={character.secondary}
              onChange={(main, secondary) => setCharacter(prev => ({...prev, main, secondary}))}
            />}
          </FieldSet>
        </StepperPanel>
      </Stepper>
    </div>}
    footer={<div className="flex flex-row justify-end">
      <Button disabled={!isValidCharacter(character)} label="Create Character"/>
    </div>}
  />;
}