import {PageTitle} from "@/lib/components/PageTitle";
import {Dialog, DialogPassThroughOptions} from "primereact/dialog";
import {Stepper, StepperPassThroughOptions} from "primereact/stepper";
import {StepperPanel, StepperPanelPassThroughOptions} from "primereact/stepperpanel";
import React, {useState} from "react";
import {twMerge} from "tailwind-merge";
import {NumberField} from "@/lib/components/NumberField";
import {Button} from "@/lib/components/Button";
import {SpecieField} from "@/lib/components/SpecieField";
import {DefaultHuman, Specie} from "@/model/specie";
import {Background} from "@/model/background";
import {BackgroundField} from "@/lib/components/BackgroundField";
import {TextField} from "@/lib/components/TextField";

const stepperPt: StepperPassThroughOptions = {
  nav: {
    className: "gap-8 border-b border-[color:var(--foreground)]/20 font-[family-name:var(--font-audiowide)] flex flex-row p-4 overflow-hidden overflow-x-auto"
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
      props.context.active ? "font-bold" : "opacity-50"
    )
  })
};
const modalPt: DialogPassThroughOptions = {
  root: {
    className: "bg-[color:var(--background)] container border border-[color:var(--foreground)]/20 drop-shadow-lg rounded-md mt-32"
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
    className: "bg-black/50 items-start",
    style: {alignItems:"start"}
  }
};

type NewCharacter = {
  name: string;
  token: string;
  startingLevel: 2 | 3;
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  specie: Specie;
  background: Background;
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
    name: "",
    token: "",
    startingLevel: 2,
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10,
    specie: {type: "human", data: DefaultHuman},
    background: {type: "farmer", data: undefined}
  });

  return <Dialog
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
          <TextField label="Name" value={character.name} onChange={(ev) => setCharacter(prev => ({...prev, name: ev.target.value}))}/>
        </div>
      </div>

      {/** @ts-ignore */}
      <Stepper orientation="horizontal" pt={stepperPt}>
        <StepperPanel pt={stepperPanelPt} header="Base Stats">
          <div className="flex flex-row gap-4 justify-around pb-2">
            <div className="flex flex-col items-center gap-2">
              <label htmlFor="str" className="text-lg font-bold">STR {getStatMod(character.str)}</label>
              <NumberField inputId="str" value={character.str} onValueChange={ev => setCharacter(prev => ({
                ...prev,
                str: Math.min(Math.max(8, ev.value ?? 8), 15)
              }))} maxFractionDigits={0} min={8} max={15} showButtons/>
            </div>
            <div className="flex flex-col items-center gap-2">
              <label htmlFor="dex" className="text-lg font-bold">DEX {getStatMod(character.dex)}</label>
              <NumberField inputId="dex" value={character.dex} onValueChange={ev => setCharacter(prev => ({
                ...prev,
                dex: Math.min(Math.max(8, ev.value ?? 8), 15)
              }))} maxFractionDigits={0} min={8} max={15} showButtons/>
            </div>
            <div className="flex flex-col items-center gap-2">
              <label htmlFor="con" className="text-lg font-bold">CON {getStatMod(character.con)}</label>
              <NumberField inputId="con" value={character.con} onValueChange={ev => setCharacter(prev => ({
                ...prev,
                con: Math.min(Math.max(8, ev.value ?? 8), 15)
              }))} maxFractionDigits={0} min={8} max={15} showButtons/>
            </div>
            <div className="flex flex-col items-center gap-2">
              <label htmlFor="int" className="text-lg font-bold">INT {getStatMod(character.int)}</label>
              <NumberField inputId="int" value={character.int} onValueChange={ev => setCharacter(prev => ({
                ...prev,
                int: Math.min(Math.max(8, ev.value ?? 8), 15)
              }))} maxFractionDigits={0} min={8} max={15} showButtons/>
            </div>
            <div className="flex flex-col items-center gap-2">
              <label htmlFor="wis" className="text-lg font-bold">WIS {getStatMod(character.wis)}</label>
              <NumberField inputId="wis" value={character.wis} onValueChange={ev => setCharacter(prev => ({
                ...prev,
                wis: Math.min(Math.max(8, ev.value ?? 8), 15)
              }))} maxFractionDigits={0} min={8} max={15} showButtons/>
            </div>
            <div className="flex flex-col items-center gap-2">
              <label htmlFor="cha" className="text-lg font-bold">CHA {getStatMod(character.cha)}</label>
              <NumberField inputId="cha" value={character.cha} onValueChange={ev => setCharacter(prev => ({
                ...prev,
                cha: Math.min(Math.max(8, ev.value ?? 8), 15)
              }))} maxFractionDigits={0} min={8} max={15} showButtons/>
            </div>
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
          Select Main Class
        </StepperPanel>
      </Stepper>
    </div>}
    footer={<div className="flex flex-row justify-end">
      <Button disabled={getRemainingPoints(character) !== 0} label="Create Character"/>
    </div>}
  />;
}