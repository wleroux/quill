import {PageTitle} from "@/lib/components/PageTitle";
import {Dialog, DialogPassThroughOptions} from "primereact/dialog";
import {Stepper, StepperPassThroughOptions} from "primereact/stepper";
import {StepperPanel, StepperPanelPassThroughOptions} from "primereact/stepperpanel";
import React, {useRef, useState} from "react";
import {twMerge} from "tailwind-merge";
import {Button} from "@/lib/components/Button";
import {SpecieField} from "@/model/source/choice/specie/SpecieField";
import {startingStatProcessor} from "@/model/source/choice/starting-stat/StartingStatProcessor";
import {CharacterDecision} from "@/model/player/character/CharacterDecision";
import {NameField} from "@/model/source/choice/name/NameField";
import {NameDecision} from "@/model/source/choice/name/NameDecision";
import {CharacterChoice} from "@/model/player/character/CharacterChoice";
import {DEFAULT_CHARACTER} from "@/model/player/character/Character";
import {StartingStatDecision} from "@/model/source/choice/starting-stat/StartingStatDecision";
import {StartingStatField} from "@/model/source/choice/starting-stat/StartingStatField";
import {SpecieDecision} from "@/model/source/choice/specie/SpecieDecision";
import {specieProcessor} from "@/model/source/choice/specie/SpecieProcessor";
import {BackgroundField} from "@/model/source/choice/background/BackgroundField";
import {BackgroundDecision} from "@/model/source/choice/background/BackgroundDecision";
import {backgroundProcessor} from "@/model/source/choice/background/BackgroundProcessor";
import {Spacer} from "@/lib/components/Spacer";
import {characterProcessor} from "@/model/player/character/CharacterProcessor";
import {nameProcessor} from "@/model/source/choice/name/NameProcessor";
import {LevelField} from "@/model/source/choice/level/LevelField";
import {LevelDecision} from "@/model/source/choice/level/LevelDecision";
import {levelProcessor} from "@/model/source/choice/level/LevelProcessor";

const stepperPt: StepperPassThroughOptions = {
  nav: {
    className: "gap-8 border-b border-[color:var(--foreground)]/20 font-[family-name:var(--font-audiowide)] flex flex-row p-4 overflow-hidden overflow-x-auto bg-black/10 justify-around"
  },
  stepperpanel: {
    className: "flex flex-row"
  },
  panelContainer: {
    className: "p-4 flex flex-col gap-4"
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


function isValidCharacter(character: CharacterDecision) {
  return characterProcessor(DEFAULT_CHARACTER, CharacterChoice, character).valid;
}

export function CreateCharacterDialog({visible, onClose}: {visible: boolean, onClose?: () => void}) {
  const [name, setName] = useState<NameDecision | undefined>(undefined);
  const [startingStat, setStartingStat] = useState<StartingStatDecision>({
    type: "starting-stat",
    data: {str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10}
  });
  const [specie, setSpecie] = useState<SpecieDecision | undefined>(undefined);
  const [background, setBackground] = useState<BackgroundDecision | undefined>(undefined);
  const [level1, setLevel1] = useState<LevelDecision | undefined>(undefined);
  const [level2, setLevel2] = useState<LevelDecision | undefined>(undefined);
  const [level3, setLevel3] = useState<LevelDecision | undefined>(undefined);

  const [activeStep, setActiveStep] = useState(0);
  const [currentLevel, setCurrentLevel] = useState<number>(0);
  const stepper = useRef<Stepper>(null);

  let character = DEFAULT_CHARACTER;
  if (name && nameProcessor(character, CharacterChoice.data.choices[0], name).valid) character = nameProcessor(character, CharacterChoice.data.choices[0], name).orThrow();
  if (activeStep > 0) character = startingStatProcessor(character, CharacterChoice.data.choices[1], startingStat).orThrow();
  if (activeStep > 1 && specie) character = specieProcessor(character, CharacterChoice.data.choices[2], specie).orThrow();
  if (activeStep > 2 && background) character = backgroundProcessor(character, CharacterChoice.data.choices[3], background).orThrow();
  if (activeStep > 2 && currentLevel > 0) character = levelProcessor(character, CharacterChoice.data.choices[4], level1!).orThrow();
  if (activeStep > 2 && currentLevel > 1) character = levelProcessor(character, CharacterChoice.data.choices[5], level2!).orThrow();
  if (activeStep > 2 && currentLevel > 2) character = levelProcessor(character, CharacterChoice.data.choices[6], level3!).orThrow();

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
          <NameField choice={CharacterChoice.data.choices[0]} value={name} onChange={setName} />
        </div>
      </div>

      {/** @ts-ignore */}
      <Stepper ref={stepper} orientation="horizontal" pt={stepperPt} linear activeStep={activeStep} onChangeStep={ev => setActiveStep(ev.index)}>
        <StepperPanel pt={stepperPanelPt} header="Base Stats">
          <StartingStatField choice={CharacterChoice.data.choices[1]} value={startingStat} onChange={setStartingStat} />
        </StepperPanel>
        <StepperPanel pt={stepperPanelPt} header="Specie">
          <SpecieField value={character} choice={CharacterChoice.data.choices[2]} decision={specie} onChange={setSpecie} />
        </StepperPanel>
        <StepperPanel pt={stepperPanelPt} header="Background">
          <BackgroundField value={character} choice={CharacterChoice.data.choices[3]} decision={background} onChange={setBackground} />
        </StepperPanel>
        <StepperPanel pt={stepperPanelPt} header="Classes">
          <PageTitle>Level {currentLevel + 1}</PageTitle>
          {currentLevel === 0 && <LevelField value={character} choice={CharacterChoice.data.choices[4]} decision={level1} onChange={setLevel1} />}
          {currentLevel === 1 && <LevelField value={character} choice={CharacterChoice.data.choices[5]} decision={level2} onChange={setLevel2} />}
          {currentLevel === 2 && <LevelField value={character} choice={CharacterChoice.data.choices[6]} decision={level3} onChange={setLevel3} />}
        </StepperPanel>
      </Stepper>
    </div>}
    footer={<div className="flex flex-row w-full gap-4">
      {activeStep !== 0 && currentLevel === 0 && <Button icon="pi pi-chevron-left" label="Prev" disabled={activeStep === 0} onClick={(ev) => {
        if (currentLevel === 0) setLevel1(undefined);
        stepper.current?.prevCallback(ev);
      }} />}
      {activeStep !== 0 && currentLevel !== 0 && <Button icon="pi pi-chevron-left" label="Prev" disabled={activeStep === 0} onClick={(ev) => {
        if (currentLevel === 2) setLevel3(undefined);
        if (currentLevel === 1) setLevel2(undefined);
        setCurrentLevel(level => level - 1);
      }} />}
      <Spacer />

      {activeStep !== 3 && <Button icon="pi pi-chevron-right" iconPos="right" label="Next" className={"flex-row-reverse"} disabled={
        (activeStep === 0 && !startingStatProcessor(character, CharacterChoice.data.choices[1], startingStat).valid) ||
        (activeStep === 1 && (specie === undefined || !specieProcessor(character, CharacterChoice.data.choices[2], specie).valid)) ||
        (activeStep === 2 && (background === undefined || !backgroundProcessor(character, CharacterChoice.data.choices[3], background).valid))
      } onClick={(ev) => {
        stepper.current?.nextCallback(ev);
      }} />}

      {activeStep === 3 && currentLevel === 0 && <Button disabled={!levelProcessor(character, CharacterChoice.data.choices[4], level1).valid} label="Level Up" onClick={() => setCurrentLevel(1)}/>}
      {activeStep === 3 && currentLevel === 1 && <Button disabled={!levelProcessor(character, CharacterChoice.data.choices[5], level2).valid} label="Level Up" onClick={() => setCurrentLevel(2)}/>}

      {activeStep === 3 && currentLevel >= 1 && <Button disabled={!isValidCharacter({
        type: "character",
        data: {
          decisions: {
            "name": name,
            "starting-stat": startingStat,
            "specie": specie,
            "background": background,
            "level::1": level1,
            "level::2": level2,
            "level::3": level3
          }
        }
      })} label="Create Character"/>}
    </div>}
  />;
}