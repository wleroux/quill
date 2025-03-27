import {PageTitle} from "@/lib/components/PageTitle";
import {Dialog, DialogPassThroughOptions} from "primereact/dialog";
import {Stepper, StepperPassThroughOptions} from "primereact/stepper";
import {StepperPanel, StepperPanelPassThroughOptions} from "primereact/stepperpanel";
import React, {useState} from "react";
import {twMerge} from "tailwind-merge";
import {NumberField} from "@/lib/components/NumberField";
import {DropdownField} from "@/lib/components/DropdownField";
import {Button} from "@/lib/components/Button";
import {SpecieField} from "@/lib/components/SpecieField";
import {DefaultHuman, Specie} from "@/model/specie";

const stepperPt: StepperPassThroughOptions = {
  nav: {
    className: "gap-4 border-b border-[color:var(--foreground)]/20 font-[family-name:var(--font-audiowide)]"
  },
  panelContainer: {
    className: "p-4"
  },
};
const panelPt: StepperPanelPassThroughOptions = {
  header: {
    className: "h-10 flex items-center text-lg flex flex-row",
  },
  number: {
    className: "w-8 h-8 items-center flex justify-center rounded-full border border-[color:var(--foreground)] drop-shadow-md",
  },
  content: {
    className: "p-2"
  },
  action: (props) => ({
    className: twMerge(
      "flex flex-row gap-2 flex-1 cursor-pointer",
      props.context.active && "font-bold"
    )
  })
};
const modalPt: DialogPassThroughOptions = {
  root: {
    className: "bg-[color:var(--background)] container border border-[color:var(--foreground)] drop-shadow-lg rounded-md p-4"
  },
  mask: {
    className: "bg-black/50"
  }
};

type NewCharacter = {
  startingLevel: 2 | 3;
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  specie: Specie;
  background: string;
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

export function CreateCharacterDialog({visible, onClose}: {visible: boolean, onClose?: () => void}) {
  const [character, setCharacter] = useState<NewCharacter>({
    startingLevel: 2,
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10,
    specie: {type: "human", data: DefaultHuman},
    background: "farmer"
  });

  return <Dialog
    modal
    visible={visible} onHide={onClose ? onClose : () => {}}
    pt={modalPt}
    content={<>
      <PageTitle className="pb-4">New Character</PageTitle>
      {/** @ts-ignore */}
      <Stepper orientation="vertical" pt={stepperPt}>
        <StepperPanel pt={panelPt} header="Base Stats">
          <div className="flex flex-row gap-4 justify-around pb-2">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-bold">STR {getStatMod(character.str)}</span>
              <NumberField value={character.str} onValueChange={ev => setCharacter(prev => ({
                ...prev,
                str: Math.min(Math.max(8, ev.value ?? 8), 15)
              }))} maxFractionDigits={0} min={8} max={15} showButtons/>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-bold">DEX {getStatMod(character.dex)}</span>
              <NumberField value={character.dex} onValueChange={ev => setCharacter(prev => ({
                ...prev,
                dex: Math.min(Math.max(8, ev.value ?? 8), 15)
              }))} maxFractionDigits={0} min={8} max={15} showButtons/>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-bold">CON {getStatMod(character.con)}</span>
              <NumberField value={character.con} onValueChange={ev => setCharacter(prev => ({
                ...prev,
                con: Math.min(Math.max(8, ev.value ?? 8), 15)
              }))} maxFractionDigits={0} min={8} max={15} showButtons/>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-bold">INT {getStatMod(character.int)}</span>
              <NumberField value={character.int} onValueChange={ev => setCharacter(prev => ({
                ...prev,
                int: Math.min(Math.max(8, ev.value ?? 8), 15)
              }))} maxFractionDigits={0} min={8} max={15} showButtons/>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-bold">WIS {getStatMod(character.wis)}</span>
              <NumberField value={character.wis} onValueChange={ev => setCharacter(prev => ({
                ...prev,
                wis: Math.min(Math.max(8, ev.value ?? 8), 15)
              }))} maxFractionDigits={0} min={8} max={15} showButtons/>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-bold">CHA {getStatMod(character.cha)}</span>
              <NumberField value={character.cha} onValueChange={ev => setCharacter(prev => ({
                ...prev,
                cha: Math.min(Math.max(8, ev.value ?? 8), 15)
              }))} maxFractionDigits={0} min={8} max={15} showButtons/>
            </div>
          </div>
          <div className="flex flex-row justify-end text-xs opacity-75 flex flex-row gap-2">
            <span>Points Remaining</span>
            <span className={twMerge(
              getRemainingPoints(character) < 0 && "text-red-400"
            )}>{getRemainingPoints(character)} / 27</span>
          </div>
        </StepperPanel>
        <StepperPanel pt={panelPt} header="Specie">
          <SpecieField value={character.specie} onChange={value => setCharacter(prev => ({...prev, specie: value}))} />
        </StepperPanel>
        <StepperPanel pt={panelPt} header="Background">
          <DropdownField value={character.background} onChange={ev => setCharacter(prev => ({...prev, background: ev.value}))} options={[
            {value: "acolyte", label: "Acolyte"},
            {value: "artisan", label: "Artisan"},
            {value: "charlatan", label: "Charlatan"},
            {value: "criminal", label: "Criminal"},
            {value: "entertainer", label: "Entertainer"},
            {value: "farmer", label: "Farmer"},
            {value: "guard", label: "Guard"},
            {value: "guide", label: "Guide"},
            {value: "hermit", label: "Hermit"},
            {value: "merchant", label: "Merchant"},
            {value: "noble", label: "Noble"},
            {value: "sage", label: "Sage"},
            {value: "sailor", label: "Sailor"},
            {value: "scribe", label: "Scribe"},
            {value: "soldier", label: "Soldier"},
            {value: "wayfarer", label: "Wayfarer"}
          ]}/>
        </StepperPanel>
        <StepperPanel pt={panelPt} header="Classes">
          Select Main Class
        </StepperPanel>
      </Stepper>
      <div className="flex flex-row justify-end">
        <Button disabled={getRemainingPoints(character) !== 0} label="Create Character" />
      </div>
    </>}
  />;
}