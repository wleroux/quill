"use client";
import {PageTitle} from "@/lib/components/PageTitle";
import {Stepper} from "primereact/stepper";
import {StepperPanel} from "primereact/stepperpanel";
import React, {useEffect, useRef, useState} from "react";
import {Button} from "@/lib/components/Button";
import {SpeciesField} from "@/model/character/create/species/SpeciesField";
import {startingStatProcessor} from "@/model/character/create/starting-stat/StartingStatProcessor";
import {NameField} from "@/model/character/name/NameField";
import {Character, INITIAL_CHARACTER} from "@/model/character/Character";
import {StartingStatField} from "@/model/character/create/starting-stat/StartingStatField";
import {speciesProcessor} from "@/model/character/create/species/SpeciesProcessor";
import {BackgroundField} from "@/model/character/create/background/BackgroundField";
import {Spacer} from "@/lib/components/Spacer";
import {useRouter} from "next/navigation";
import {FieldSet} from "@/lib/components/FieldSet";
import {Modal} from "@/lib/components/Modal";
import {DefaultNameChoice} from "@/model/character/name/NameChoice";
import {DefaultStartingStatChoice} from "@/model/character/create/starting-stat/StartingStatChoice";
import {DefaultSpeciesChoice} from "@/model/character/create/species/SpeciesChoice";
import {DefaultBackgroundChoice} from "@/model/character/create/background/BackgroundChoice";
import {RetrainDecision} from "@/model/character/retrain/RetrainDecision";
import {retrainProcessor} from "@/model/character/retrain/retrainProcessor";
import {DefaultRetrainChoice} from "@/model/character/retrain/RetrainChoice";
import {STEPPER_PANEL_PT, STEPPER_PT} from "@/lib/components/Stepper";
import {StartingStatDecision} from "@/model/character/create/starting-stat/StartingStatDecision";
import {NameDecision} from "@/model/character/name/NameDecision";
import {SpeciesDecision} from "@/model/character/create/species/SpeciesDecision";
import {BackgroundDecision} from "@/model/character/create/background/BackgroundDecision";
import {Result, ValidResult} from "@/model/processor/Result";
import {nameProcessor} from "@/model/character/name/NameProcessor";
import {backgroundProcessor} from "@/model/character/create/background/BackgroundProcessor";
import {LevelField} from "@/model/character/level/LevelField";
import {levelProcessor} from "@/model/character/level/LevelProcessor";
import {DefaultLevelChoice, getCurrentLevel} from "@/model/character/level/LevelChoice";
import {DropdownField} from "@/lib/components/DropdownField";
import {ProcessorError} from "@/model/processor/Processor";
import {useRetrainMutation} from "@/lib/character/retrain/useRetrainMutation";

type RetrainStep =
  | {type: "name"}
  | {type: "starting-stat"}
  | {type: "background"}
  | {type: "species"}
  | {type: "level", level: number}
  ;

export function RetrainDialog({value, visible, onClose}: {value: Character, visible: boolean, onClose?: () => void}) {
  const router = useRouter();
  const retrainMutation = useRetrainMutation({
    onSuccess() {
      onClose?.();
      router.refresh();
    }
  });

  const stepper = useRef<Stepper>(null);
  const [decision, setDecision] = useState<RetrainDecision>({
    type: "retrain",
    data: {
      name: {type: "name", data: {name: value.name}},
      startingStat: {type: "starting-stat", data: value.startingStat},
      background: {type: "background", data: value.background},
      species: {type: "species", data: value.species},
      levels: value.progress.filter(progress => progress.type === "level"),
      retire: value.progress.find(progress => progress.type === "retire")
    }
  });

  const [step, setStep] = useState<RetrainStep>({type: "name"});

  const setName = (value: NameDecision | undefined) => {
    if (!value) return;
    setDecision(prev => ({...prev, data: {...prev.data, name: value}}));
  }
  const setStartingStat = (value: StartingStatDecision | undefined) => {
    if (!value) return;
    setDecision(prev => ({...prev, data: {...prev.data, startingStat: value}}));
  }
  const setSpecies = (fn: (value: SpeciesDecision | undefined) => SpeciesDecision | undefined) => setDecision(prev => {
    const value = fn(prev.data.species);
    if (!value) return prev;
    return ({...prev, data: {...prev.data, species: value}});
  })
  const setBackground = (fn: (value: BackgroundDecision | undefined) => BackgroundDecision | undefined) => setDecision(prev => {
    const value = fn(prev.data.background);
    if (!value) return prev;
    return ({...prev, data: {...prev.data, background: value}});
  });

  const initial: ValidResult<Character> = ValidResult.of(INITIAL_CHARACTER(value.id, value.ownerID)) as ValidResult<Character>;
  const startingStatResult =
    initial
      .flatMap(value => nameProcessor(value, DefaultNameChoice, decision.data.name))
  const speciesResult =
    startingStatResult
      .flatMap(value => startingStatProcessor(value, DefaultStartingStatChoice, decision.data.startingStat));
  const backgroundResult =
    speciesResult
      .flatMap(value => speciesProcessor(value, DefaultSpeciesChoice, decision.data.species));
  const postBackgroundResult =
    backgroundResult
      .flatMap(value => backgroundProcessor(value, DefaultBackgroundChoice, decision.data.background))
  const currentLevelResult =
    postBackgroundResult
      .flatMap(value => {
        const level = step.type === "level" ? step.level : 0;
        let result = ValidResult.of(value);
        for (let i = 0; i < level; i ++) {
          result = result.flatMap(value => levelProcessor(value, DefaultLevelChoice[i], decision.data.levels[i]));
        }
        return result;
     });
  const result = retrainProcessor(INITIAL_CHARACTER(value.id, value.ownerID), DefaultRetrainChoice, decision);

  const maxValidStep = () => {
    if (!startingStatResult.valid) return 0;
    if (!speciesResult.valid) return 0;
    if (!backgroundResult.valid) return 1;
    if (!postBackgroundResult.valid) return 2;
    return 3;
  };

  const getActiveStep = (step: RetrainStep): number => {
    const max = maxValidStep();
    if (step.type === "name") return Math.min(0, max);
    if (step.type === "starting-stat") return Math.min(0, max);
    if (step.type === "species") return Math.min(1, max);
    if (step.type === "background") return Math.min(2, max);
    if (step.type === "level") return Math.min(3, max);
    return 0;
  };
  const setActiveStep = (index: number) => {
    index = Math.min(index, maxValidStep());
    if (index === 0) setStep({type: "starting-stat"});
    if (index === 1) setStep({type: "species"});
    if (index === 2) setStep({type: "background"});
    if (index === 3) setStep({type: "level", level: 0});
  };

  let maxLevel = 0;
  if (postBackgroundResult.valid) {
    let result: Result<Character, ProcessorError[]> = postBackgroundResult;
    for (let i = 0; i < 20 && DefaultLevelChoice[i] !== undefined; i ++) {
      result = result.flatMap(value => levelProcessor(value, DefaultLevelChoice[i], decision.data.levels[i]));
      maxLevel = i;
      if (!result.valid) {
        break;
      }
    }
  }

  useEffect(() => {
    stepper.current?.setActiveStep(getActiveStep(step));
  }, [step]);

  return <Modal
    visible={visible} onClose={onClose}
    header={<PageTitle>Retrain Character</PageTitle>}
    children={<div className="flex flex-col gap-0">
      <div className="px-4 py-4 border-b border-[color:var(--foreground)]/20 flex flex-row gap-4 items-end">
        <FieldSet inline className="flex-1">
          <NameField choice={DefaultNameChoice} value={decision.data.name} onChange={setName} />
        </FieldSet>
      </div>

      {/** @ts-ignore */}
      <Stepper
        ref={stepper}
        orientation="horizontal"
        pt={STEPPER_PT}
        activeStep={getActiveStep(step)}
        onChangeStep={ev => setActiveStep(ev.index)}>
        <StepperPanel pt={STEPPER_PANEL_PT} header="Base Stats">
          <StartingStatField
            choice={DefaultStartingStatChoice}
            decision={decision.data.startingStat}
            onChange={setStartingStat} />
        </StepperPanel>
        <StepperPanel pt={STEPPER_PANEL_PT} header="Specie">
          <SpeciesField
            value={speciesResult.orElse(initial)}
            choice={DefaultSpeciesChoice}
            decision={decision.data.species}
            onChange={setSpecies} />
        </StepperPanel>
        <StepperPanel pt={STEPPER_PANEL_PT} header="Background">
          <BackgroundField
            value={backgroundResult.orElse(initial)}
            choice={DefaultBackgroundChoice}
            decision={decision.data.background}
            onChange={setBackground} />
        </StepperPanel>
        <StepperPanel pt={STEPPER_PANEL_PT} header="Classes">
          <FieldSet inline>
            <FieldSet inline>
              <DropdownField label="Level" value={step.type === "level" ? step.level : 0} options={decision.data.levels.map((level, index) => ({
                value: index,
                disabled: (index > maxLevel),
                label: `Level ${index + 1}`
              }))} onChange={(ev) => {
                let targetLevel = ev.target.value;
                if (backgroundResult.valid) {
                  let result: Result<Character, ProcessorError[]> = backgroundResult;
                  for (let i = 0; i < targetLevel; i ++) {
                    result = result.flatMap(value => levelProcessor(value, DefaultLevelChoice[i], decision.data.levels[i]));
                    if (!result.valid) {
                      setStep({type: "level", level: i});
                      return;
                    }
                  }
                  setStep({type: "level", level: targetLevel})
                }
              }} />
            </FieldSet>
            {step.type === "level" && <>
            <LevelField
              value={currentLevelResult.orThrow()}
              choice={DefaultLevelChoice[step.level]}
              decision={decision.data.levels[step.level]}
              onChange={fn => setDecision(prev => {
                const value = fn(prev.data.levels[step.level]);
                if (!value) return prev;
                return {...prev, data: {...prev.data, levels: [
                  ...prev.data.levels.slice(0, step.level),
                  value,
                  ...prev.data.levels.slice(step.level + 1),
                ]}}
              })} />
            </>}
          </FieldSet>
        </StepperPanel>
      </Stepper>
    </div>}
    footer={<div className="flex flex-row w-full gap-4 items-center">
      {step.type === "level" && step.level > 0 && <>
        <Button label="Previous Level" onClick={() => setStep({type: "level", level: step.level - 1})} />
      </>}

      <Spacer />

      {step.type === "level" && step.level < (getCurrentLevel(value) - 1) && <>
        <Button label="Next Level" disabled={step.level >= maxLevel} onClick={() => setStep({type: "level", level: step.level + 1})} />
      </>}

      <Button disabled={!result.valid || retrainMutation.isPending} label="Retrain" onClick={() => {
        retrainMutation.mutate({characterID: value.id, decision})
      }}/>
      {!result.valid &&
        <span className="pi pi-info-circle text-red-400/20" title={result.error.map(error => `${error.code} ${error.path.slice(1).join("/")}`).join(", ")}></span>
      }
    </div>}
  />;
}