"use client";
import {PageTitle} from "@/lib/components/PageTitle";
import {Stepper, StepperPassThroughOptions} from "primereact/stepper";
import {StepperPanel, StepperPanelPassThroughOptions} from "primereact/stepperpanel";
import React, {useRef, useState} from "react";
import {twMerge} from "tailwind-merge";
import {Button} from "@/lib/components/Button";
import {SpeciesField} from "@/model/character/create/species/SpeciesField";
import {startingStatProcessor} from "@/model/character/create/starting-stat/StartingStatProcessor";
import {CharacterCreationDecision} from "@/model/character/create/CharacterCreationDecision";
import {NameField} from "@/model/character/name/NameField";
import {NameDecision} from "@/model/character/name/NameDecision";
import {CharacterCreationChoice} from "@/model/character/create/CharacterCreationChoice";
import {INITIAL_CHARACTER} from "@/model/character/Character";
import {StartingStatDecision} from "@/model/character/create/starting-stat/StartingStatDecision";
import {StartingStatField} from "@/model/character/create/starting-stat/StartingStatField";
import {SpeciesDecision} from "@/model/character/create/species/SpeciesDecision";
import {speciesProcessor} from "@/model/character/create/species/SpeciesProcessor";
import {BackgroundField} from "@/model/character/create/background/BackgroundField";
import {BackgroundDecision} from "@/model/character/create/background/BackgroundDecision";
import {backgroundProcessor} from "@/model/character/create/background/BackgroundProcessor";
import {Spacer} from "@/lib/components/Spacer";
import {characterCreationProcessor} from "@/model/character/create/CharacterCreationProcessor";
import {nameProcessor} from "@/model/character/name/NameProcessor";
import {LevelField} from "@/model/character/level/LevelField";
import {LevelDecision} from "@/model/character/level/LevelDecision";
import {levelProcessor} from "@/model/character/level/LevelProcessor";
import {useRouter} from "next/navigation";
import {FieldSet} from "@/lib/components/FieldSet";
import {Modal} from "@/lib/components/Modal";
import {useMutation} from "@tanstack/react-query";
import {DefaultNameChoice} from "@/model/character/name/NameChoice";
import {DefaultStartingStatChoice} from "@/model/character/create/starting-stat/StartingStatChoice";
import {DefaultSpeciesChoice} from "@/model/character/create/species/SpeciesChoice";
import {DefaultBackgroundChoice} from "@/model/character/create/background/BackgroundChoice";
import {DefaultLevelChoice} from "@/model/character/level/LevelChoice";

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



function validateCharacterCreation(character: CharacterCreationDecision) {
  return characterCreationProcessor(INITIAL_CHARACTER("", ""), CharacterCreationChoice, character);
}

export function CreateCharacterDialog({visible, onClose}: {visible: boolean, onClose?: () => void}) {
  const router = useRouter();
  const createCharacterMutation = useMutation({
    mutationFn: async (decisions: CharacterCreationDecision) => {
      const response = await fetch("/api/characters", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(decisions)
      });
      if (response.ok) return response.json();
      else throw new Error(await response.text());
    },
    onSuccess: () => {
      onClose?.();
      router.refresh();
    }
  })

  const [name, setName] = useState<NameDecision | undefined>(undefined);
  const [startingStat, setStartingStat] = useState<StartingStatDecision>({
    type: "starting-stat",
    data: {str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10}
  });
  const [species, setSpecies] = useState<SpeciesDecision | undefined>(undefined);
  const [background, setBackground] = useState<BackgroundDecision | undefined>(undefined);
  const [level1, setLevel1] = useState<LevelDecision | undefined>(undefined);
  const [level2, setLevel2] = useState<LevelDecision | undefined>(undefined);

  const [activeStep, setActiveStep] = useState(0);
  const [currentLevel, setCurrentLevel] = useState<number>(0);
  const stepper = useRef<Stepper>(null);

  let character = INITIAL_CHARACTER("", "");
  if (name && nameProcessor(character, DefaultNameChoice, name).valid) character = nameProcessor(character, DefaultNameChoice, name).orThrow();
  if (activeStep > 0) character = startingStatProcessor(character, DefaultStartingStatChoice, startingStat).orThrow();
  if (activeStep > 1 && species) character = speciesProcessor(character, DefaultSpeciesChoice, species).orThrow();
  if (activeStep > 2 && background) character = backgroundProcessor(character, DefaultBackgroundChoice, background).orThrow();
  if (activeStep > 2 && currentLevel > 0) character = levelProcessor(character, DefaultLevelChoice[0], level1!).orThrow();
  if (activeStep > 2 && currentLevel > 1) character = levelProcessor(character, DefaultLevelChoice[1], level2!).orThrow();

  const characterDecision: CharacterCreationDecision = {
    type: "character",
    data: {
      decisions: {
        "name": name!,
        "starting-stat": startingStat!,
        "species": species!,
        "background": background!,
        "level::1": level1!,
        "level::2": level2!
      }
    }
  };
  const result = validateCharacterCreation(characterDecision);


  return <Modal
    visible={visible} onClose={onClose}
    header={<PageTitle>New Character</PageTitle>}
    children={<div className="flex flex-col gap-0">
      <div className="px-4 py-4 border-b border-[color:var(--foreground)]/20 flex flex-row gap-4 items-end">
        <FieldSet inline className="flex-1">
          <NameField choice={DefaultNameChoice} value={name} onChange={setName} />
        </FieldSet>
      </div>

      {/** @ts-ignore */}
      <Stepper ref={stepper} orientation="horizontal" pt={stepperPt} linear activeStep={activeStep} onChangeStep={ev => setActiveStep(ev.index)}>
        <StepperPanel pt={stepperPanelPt} header="Base Stats">
          <StartingStatField choice={DefaultStartingStatChoice} value={startingStat} onChange={setStartingStat} />
        </StepperPanel>
        <StepperPanel pt={stepperPanelPt} header="Specie">
          <SpeciesField value={character} choice={DefaultSpeciesChoice} decision={species} onChange={setSpecies} />
        </StepperPanel>
        <StepperPanel pt={stepperPanelPt} header="Background">
          <BackgroundField value={character} choice={DefaultBackgroundChoice} decision={background} onChange={setBackground} />
        </StepperPanel>
        <StepperPanel pt={stepperPanelPt} header="Classes">
          <PageTitle>Level {currentLevel + 1}</PageTitle>
          {currentLevel === 0 && <LevelField value={character} choice={DefaultLevelChoice[0]} decision={level1} onChange={setLevel1} />}
          {currentLevel === 1 && <LevelField value={character} choice={DefaultLevelChoice[1]} decision={level2} onChange={setLevel2} />}
        </StepperPanel>
      </Stepper>
    </div>}
    footer={<div className="flex flex-row w-full gap-4 items-center">
      {activeStep !== 0 && currentLevel === 0 && <Button icon="pi pi-chevron-left" label="Prev" disabled={activeStep === 0} onClick={(ev) => {
        if (currentLevel === 0) setLevel1(undefined);
        stepper.current?.prevCallback(ev);
      }} />}
      {activeStep !== 0 && currentLevel !== 0 && <Button icon="pi pi-chevron-left" label="Prev" disabled={activeStep === 0} onClick={(ev) => {
        if (currentLevel === 1) setLevel2(undefined);
        setCurrentLevel(level => level - 1);
      }} />}
      <Spacer />

      {!result.valid &&
        <span className="pi pi-info-circle text-red-400/20" title={result.error.map(error => error.path.slice(1).join("/")).join(", ")}></span>
      }
      {activeStep !== 3 && <Button icon="pi pi-chevron-right" iconPos="right" label="Next" className={"flex-row-reverse"} disabled={
        (activeStep === 0 && !startingStatProcessor(character, DefaultStartingStatChoice, startingStat).valid) ||
        (activeStep === 1 && (species === undefined || !speciesProcessor(character, DefaultSpeciesChoice, species).valid)) ||
        (activeStep === 2 && (background === undefined || !backgroundProcessor(character, DefaultBackgroundChoice, background).valid))
      } onClick={(ev) => {
        stepper.current?.nextCallback(ev);
      }} />}

      {activeStep === 3 && currentLevel === 0 && <Button disabled={!levelProcessor(character, DefaultLevelChoice[0], level1).valid} label="Level Up" onClick={() => setCurrentLevel(1)}/>}
      {activeStep === 3 && currentLevel >= 1 && <Button disabled={!result.valid || createCharacterMutation.isPending} label="Create Character" onClick={() => {
        createCharacterMutation.mutate(characterDecision)
      }}/>}
    </div>}
  />;
}