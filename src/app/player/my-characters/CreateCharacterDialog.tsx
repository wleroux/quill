"use client";
import {PageTitle} from "@/lib/components/PageTitle";
import {Stepper, StepperPassThroughOptions} from "primereact/stepper";
import {StepperPanel, StepperPanelPassThroughOptions} from "primereact/stepperpanel";
import React, {useRef, useState} from "react";
import {twMerge} from "tailwind-merge";
import {Button} from "@/lib/components/Button";
import {SpecieField} from "@/model/character/create/specie/SpecieField";
import {startingStatProcessor} from "@/model/character/create/starting-stat/StartingStatProcessor";
import {CharacterCreationDecision} from "@/model/character/create/CharacterCreationDecision";
import {NameField} from "@/model/character/name/NameField";
import {NameDecision} from "@/model/character/name/NameDecision";
import {CharacterCreationChoice} from "@/model/character/create/CharacterCreationChoice";
import {INITIAL_CHARACTER} from "@/model/character/Character";
import {StartingStatDecision} from "@/model/character/create/starting-stat/StartingStatDecision";
import {StartingStatField} from "@/model/character/create/starting-stat/StartingStatField";
import {SpecieDecision} from "@/model/character/create/specie/SpecieDecision";
import {specieProcessor} from "@/model/character/create/specie/SpecieProcessor";
import {BackgroundField} from "@/model/character/create/background/BackgroundField";
import {BackgroundDecision} from "@/model/character/create/background/BackgroundDecision";
import {backgroundProcessor} from "@/model/character/create/background/BackgroundProcessor";
import {Spacer} from "@/lib/components/Spacer";
import {characterCreationProcessor} from "@/model/character/create/CharacterCreationProcessor";
import {nameProcessor} from "@/model/character/name/NameProcessor";
import {LevelField} from "@/model/character/level/LevelField";
import {LevelDecision} from "@/model/character/level/LevelDecision";
import {levelProcessor} from "@/model/character/level/LevelProcessor";
import {createCharacterAction} from "@/actions/CharactersActions";
import {useRouter} from "next/navigation";
import {FieldSet} from "@/lib/components/FieldSet";
import {Modal} from "@/lib/components/Modal";

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



function isValidCharacter(character: CharacterCreationDecision) {
  return characterCreationProcessor(INITIAL_CHARACTER("", ""), CharacterCreationChoice, character).valid;
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

  const [activeStep, setActiveStep] = useState(0);
  const [currentLevel, setCurrentLevel] = useState<number>(0);
  const stepper = useRef<Stepper>(null);
  const router = useRouter();

  let character = INITIAL_CHARACTER("", "");
  if (name && nameProcessor(character, CharacterCreationChoice.data.choices[0], name).valid) character = nameProcessor(character, CharacterCreationChoice.data.choices[0], name).orThrow();
  if (activeStep > 0) character = startingStatProcessor(character, CharacterCreationChoice.data.choices[1], startingStat).orThrow();
  if (activeStep > 1 && specie) character = specieProcessor(character, CharacterCreationChoice.data.choices[2], specie).orThrow();
  if (activeStep > 2 && background) character = backgroundProcessor(character, CharacterCreationChoice.data.choices[3], background).orThrow();
  if (activeStep > 2 && currentLevel > 0) character = levelProcessor(character, CharacterCreationChoice.data.choices[4], level1!).orThrow();
  if (activeStep > 2 && currentLevel > 1) character = levelProcessor(character, CharacterCreationChoice.data.choices[5], level2!).orThrow();

  const characterDecision: CharacterCreationDecision = {
    type: "character",
    data: {
      decisions: {
        "name": name!,
        "starting-stat": startingStat!,
        "specie": specie!,
        "background": background!,
        "level::1": level1!,
        "level::2": level2!
      }
    }
  };

  return <Modal
    visible={visible} onClose={onClose}
    header={<PageTitle>New Character</PageTitle>}
    children={<div className="flex flex-col gap-0">
      <div className="px-4 py-4 border-b border-[color:var(--foreground)]/20 flex flex-row gap-4 items-end">
        <FieldSet inline className="flex-1">
          <NameField choice={CharacterCreationChoice.data.choices[0]} value={name} onChange={setName} />
        </FieldSet>
      </div>

      {/** @ts-ignore */}
      <Stepper ref={stepper} orientation="horizontal" pt={stepperPt} linear activeStep={activeStep} onChangeStep={ev => setActiveStep(ev.index)}>
        <StepperPanel pt={stepperPanelPt} header="Base Stats">
          <StartingStatField choice={CharacterCreationChoice.data.choices[1]} value={startingStat} onChange={setStartingStat} />
        </StepperPanel>
        <StepperPanel pt={stepperPanelPt} header="Specie">
          <SpecieField value={character} choice={CharacterCreationChoice.data.choices[2]} decision={specie} onChange={setSpecie} />
        </StepperPanel>
        <StepperPanel pt={stepperPanelPt} header="Background">
          <BackgroundField value={character} choice={CharacterCreationChoice.data.choices[3]} decision={background} onChange={setBackground} />
        </StepperPanel>
        <StepperPanel pt={stepperPanelPt} header="Classes">
          <PageTitle>Level {currentLevel + 1}</PageTitle>
          {currentLevel === 0 && <LevelField value={character} choice={CharacterCreationChoice.data.choices[4]} decision={level1} onChange={setLevel1} />}
          {currentLevel === 1 && <LevelField value={character} choice={CharacterCreationChoice.data.choices[5]} decision={level2} onChange={setLevel2} />}
        </StepperPanel>
      </Stepper>
    </div>}
    footer={<div className="flex flex-row w-full gap-4">
      {activeStep !== 0 && currentLevel === 0 && <Button icon="pi pi-chevron-left" label="Prev" disabled={activeStep === 0} onClick={(ev) => {
        if (currentLevel === 0) setLevel1(undefined);
        stepper.current?.prevCallback(ev);
      }} />}
      {activeStep !== 0 && currentLevel !== 0 && <Button icon="pi pi-chevron-left" label="Prev" disabled={activeStep === 0} onClick={(ev) => {
        if (currentLevel === 1) setLevel2(undefined);
        setCurrentLevel(level => level - 1);
      }} />}
      <Spacer />

      {activeStep !== 3 && <Button icon="pi pi-chevron-right" iconPos="right" label="Next" className={"flex-row-reverse"} disabled={
        (activeStep === 0 && !startingStatProcessor(character, CharacterCreationChoice.data.choices[1], startingStat).valid) ||
        (activeStep === 1 && (specie === undefined || !specieProcessor(character, CharacterCreationChoice.data.choices[2], specie).valid)) ||
        (activeStep === 2 && (background === undefined || !backgroundProcessor(character, CharacterCreationChoice.data.choices[3], background).valid))
      } onClick={(ev) => {
        stepper.current?.nextCallback(ev);
      }} />}

      {activeStep === 3 && currentLevel === 0 && <Button disabled={!levelProcessor(character, CharacterCreationChoice.data.choices[4], level1).valid} label="Level Up" onClick={() => setCurrentLevel(1)}/>}
      {activeStep === 3 && currentLevel >= 1 && <Button disabled={!isValidCharacter(characterDecision)} label="Create Character" onClick={() => {
        createCharacterAction(characterDecision).then(id => {
          onClose?.();
          router.refresh();
        }).catch(error => console.error(error));
      }}/>}
    </div>}
  />;
}