"use client";
import {Character} from "@/model/character/Character";
import React from "react";
import {REPOSITORY} from "@/model/source/index";
import {twMerge} from "tailwind-merge";
import {Card, CardHeader, CardProps} from "@/lib/components/Card";

export function CharacterCard({value, ...props}: { value: Character } & CardProps) {
  return <Card {...props}>
    <CardHeader className="font-light">
      <span className={twMerge("pi pi-user w-24 h-24 text-[96px]")}/>
      <div className={twMerge("w-full")}>
        <h2 className="font-bold text-xl">{value.name}</h2>
        <div>
          <strong>Specie:</strong> {REPOSITORY.SPECIES[value.species.speciesID]?.label}
        </div>
        <div>
          <strong>Background:</strong> {REPOSITORY.BACKGROUNDS[value.background.backgroundID]?.label}
        </div>
        <div>
          <strong>Class:</strong> {value.classIDs
          .filter(classID => !value.classIDs.some(o => REPOSITORY.CLASSES[o].replace === classID))
          .map(classID => REPOSITORY.CLASSES[classID].label).join(" / ")}
        </div>
      </div>
    </CardHeader>
  </Card>
}