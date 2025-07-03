"use client";
import {PageTitle} from "@/lib/components/PageTitle";
import React, {useState} from "react";
import {Button} from "@/lib/components/Button";
import {Character} from "@/model/character/Character";
import {Modal} from "@/lib/components/Modal";
import {ValidResult} from "@/model/processor/Result";
import {useTrainMutation} from "@/lib/character/train/useTrainMutation";
import {Spacer} from "@/lib/components/Spacer";
import {useRouter} from "next/navigation";
import {LevelDecision} from "@/model/character/level/LevelDecision";
import {DefaultLevelChoice, getCurrentLevel} from "@/model/character/level/LevelChoice";
import {levelProcessor} from "@/model/character/level/LevelProcessor";
import {LevelField} from "@/model/character/level/LevelField";

export function LevelDialog({value, visible, onClose}: {value: Character, visible: boolean, onClose?: () => void}) {
  const router = useRouter();
  const train = useTrainMutation({
    onSuccess: () => {
      onClose?.();
      router.refresh();
    }
  });

  const levelChoice = DefaultLevelChoice[getCurrentLevel(value)];
  const [level, setLevel] = useState<LevelDecision>({
    type: "level",
    data: {
      decisions: {}
    }
  });

  const result = ValidResult.of(value)
    .flatMap(value => levelProcessor(value, levelChoice, level));

  return <Modal
    visible={visible} onClose={onClose}
    header={<PageTitle>Level Up</PageTitle>}
    children={<div className="flex flex-col gap-0">
      <div className="px-4 py-4 flex flex-col gap-4 items-stretch">
        <LevelField inline value={value} choice={levelChoice} decision={level} onChange={fn => {
          setLevel(prev => fn(prev)!);
        }} />
      </div>
    </div>}
    footer={<div className="flex flex-row w-full gap-4">
      <Spacer/>
      <Button disabled={!result.valid || train.isPending} label="Level Up" onClick={() => {
        train.mutate({characterID: value.id, decision: level});
      }}/>
    </div>}
  />;
}