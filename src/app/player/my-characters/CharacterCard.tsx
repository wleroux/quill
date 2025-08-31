"use client";
import {Character} from "@/model/character/Character";
import React from "react";
import {REPOSITORY} from "@/model/source/index";
import {useRouter} from "next/navigation";
import {twMerge} from "tailwind-merge";

export function CharacterCard({value}: { value: Character }) {
  const navigate = useRouter();
  return <div className={twMerge(
    "relative w-full box-content rounded-md bg-white dark:bg-black/40 border border-[color:var(--foreground)]/20 flex flex-col gap-4"
  )} onClick={() => {
    navigate.push(`/player/my-characters/${value.id}`)
  }}>
    <div className={twMerge(
      "flex-1 flex flex-row p-4 rounded-t-md h-24 box-content gap-4"
    )}>
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
    </div>
  </div>
}