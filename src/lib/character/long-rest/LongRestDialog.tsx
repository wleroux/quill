"use client";
import {PageTitle} from "@/lib/components/PageTitle";
import React, {useState} from "react";
import {Button} from "@/lib/components/Button";
import {startingStatProcessor} from "@/model/character/create/starting-stat/StartingStatProcessor";
import {Character, INITIAL_CHARACTER} from "@/model/character/Character";
import {speciesProcessor} from "@/model/character/create/species/SpeciesProcessor";
import {Spacer} from "@/lib/components/Spacer";
import {useRouter} from "next/navigation";
import {Modal} from "@/lib/components/Modal";
import {DefaultNameChoice} from "@/model/character/name/NameChoice";
import {DefaultStartingStatChoice} from "@/model/character/create/starting-stat/StartingStatChoice";
import {DefaultSpeciesChoice} from "@/model/character/create/species/SpeciesChoice";
import {DefaultBackgroundChoice} from "@/model/character/create/background/BackgroundChoice";
import {Result, ValidResult} from "@/model/processor/Result";
import {nameProcessor} from "@/model/character/name/NameProcessor";
import {backgroundProcessor} from "@/model/character/create/background/BackgroundProcessor";
import {levelProcessor} from "@/model/character/level/LevelProcessor";
import {DefaultLevelChoice} from "@/model/character/level/LevelChoice";
import {useLongRestMutation} from "@/lib/character/long-rest/useLongRestMutation";
import {LongRestDecision} from "@/model/character/long-rest/LongRestDecision";
import {retireProcessor} from "@/model/character/retire/RetireProcessor";
import {DefaultRetireChoice} from "@/model/character/retire/RetireChoice";
import {ChoicesField} from "@/model/source/choice/ChoicesField";
import {getLongRestChoice, longRestProcessor} from "@/model/character/long-rest/longRestProcessor";
import {ProcessorError} from "@/model/processor/Processor";
import {FieldSet} from "@/lib/components/FieldSet";

export function LongRestDialog({value, visible, onClose}: {value: Character, visible: boolean, onClose?: () => void}) {
  const router = useRouter();
  const longRestMutation = useLongRestMutation({
    onSuccess() {
      onClose?.();
      router.refresh();
    }
  });

  const choice = getLongRestChoice(value);
  const [decision, setDecision] = useState<LongRestDecision>({
    type: "long-rest",
    data: {
      decisions: value.longRest ?? {}
    }
  });

  let prev: Result<Character, ProcessorError[]> = ValidResult.of(INITIAL_CHARACTER(value.id, value.ownerID));
  prev = prev.flatMap(v => nameProcessor(v, DefaultNameChoice, {type: "name", data: {name: value.name}}));
  prev = prev.flatMap(v => startingStatProcessor(v, DefaultStartingStatChoice, {type: "starting-stat", data: value.startingStat}));
  prev = prev.flatMap(v => speciesProcessor(v, DefaultSpeciesChoice, {type: "species", data: value.species}));
  prev = prev.flatMap(v => backgroundProcessor(v, DefaultBackgroundChoice, {type: "background", data: value.background}));
  prev =
    value.progress.filter(progress => progress.type === "level")
      .reduce((result, progress, index) => result.flatMap(v => levelProcessor(v, DefaultLevelChoice[index], progress)), prev);
  prev =
    value.progress.filter(progress => progress.type === "retire")
      .reduce((result, progress) => result.flatMap(v => retireProcessor(v, DefaultRetireChoice, progress)), prev);

  let result = prev.flatMap(value => longRestProcessor(value, choice, decision));

  if (!prev.valid) return <></>;
  return <Modal
    visible={visible} onClose={onClose}
    header={<PageTitle>Long Rest</PageTitle>}
    children={<div className="flex flex-col gap-0">
      <div className="px-4 py-4 border-b border-[color:var(--foreground)]/20 flex flex-row gap-4 items-end">
        <FieldSet inline className="flex-1">
          <ChoicesField
            value={prev.value}
            choices={choice.data.choices}
            decisions={decision.data.decisions}
            onChange={(fn) => {
              setDecision(prev => {
                return ({
                  ...prev,
                  data: {
                    ...prev.data,
                    decisions: fn(prev.data.decisions)
                  }
                })
              })
            }}
          />
        </FieldSet>
      </div>
    </div>}
    footer={<div className="flex flex-row w-full gap-4 items-center">
      <Spacer/>

      {!result.valid &&
        <span className="pi pi-info-circle text-red-400/20" title={result.error.map(error => `${error.code} ${error.path.slice(1).join("/")}`).join(", ")}></span>
      }
      <Button disabled={!prev.valid || longRestMutation.isPending} label="Long Rest" onClick={() => {
        longRestMutation.mutate({characterID: value.id, decision: decision.data.decisions})
      }}/>
    </div>}
  />;
}