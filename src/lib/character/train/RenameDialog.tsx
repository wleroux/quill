"use client";
import {PageTitle} from "@/lib/components/PageTitle";
import React, {useState} from "react";
import {Button} from "@/lib/components/Button";
import {NameField} from "@/model/character/name/NameField";
import {NameDecision} from "@/model/character/name/NameDecision";
import {Character} from "@/model/character/Character";
import {nameProcessor} from "@/model/character/name/NameProcessor";
import {FieldSet} from "@/lib/components/FieldSet";
import {Modal} from "@/lib/components/Modal";
import {DefaultNameChoice} from "@/model/character/name/NameChoice";
import {ValidResult} from "@/model/processor/Result";
import {useTrainMutation} from "@/lib/character/train/useTrainMutation";
import { Spacer } from "@/lib/components/Spacer";
import { useRouter } from "next/navigation";

export function RenameDialog({value, visible, onClose}: {value: Character, visible: boolean, onClose?: () => void}) {
  const router = useRouter();
  const train = useTrainMutation({
    onSuccess: () => {
      onClose?.();
      router.refresh();
    }
  });

  const [name, setName] = useState<NameDecision>({
    type: "name",
    data: {name: value.name}
  });

  const result = ValidResult.of(value).flatMap(value => nameProcessor(value, DefaultNameChoice, name));

  return <Modal
    visible={visible} onClose={onClose}
    header={<PageTitle>Rename Character</PageTitle>}
    children={<div className="flex flex-col gap-0">
      <div className="px-4 py-4 border-b border-[color:var(--foreground)]/20 flex flex-row gap-4 items-end">
        <FieldSet inline className="flex-1">
          <NameField autoFocus choice={DefaultNameChoice} value={name} onChange={value => {
            if (value) setName(value);
          }} />
        </FieldSet>
      </div>
    </div>}
    footer={<div className="flex flex-row w-full gap-4">
      <Spacer/>
      <Button disabled={!result.valid || train.isPending} label="Rename" onClick={() => {
        train.mutate({characterID: value.id, decision: name});
      }}/>
    </div>}
  />;
}