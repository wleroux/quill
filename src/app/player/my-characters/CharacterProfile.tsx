"use client";
import {SkillID} from "@/model/source/model/Skill";
import {ProficiencyIcon} from "@/app/player/my-characters/proficiency/ProficiencyIcon";
import {SKILL_IDS, SKILLS} from "@/model/source/Skill";
import {Character} from "@/model/character/Character";
import React, {useRef, useState} from "react";
import {REPOSITORY} from "@/model/source/index";
import {ATTRIBUTE_IDS} from "@/model/source/model/Attribute";
import {ProficientIcon} from "@/app/player/my-characters/proficiency/ProficientIcon";
import {Button} from "@/lib/components/Button";
import {useRouter} from "next/navigation";
import {useMutation} from "@tanstack/react-query";
import {twMerge} from "tailwind-merge";
import {ConfirmPopup} from "primereact/confirmpopup";
import {SPELL_LEVELS} from "@/model/source/model/Spell";
import {CharacterID} from "@/model/character/CharacterID";
import {MENU_PASSTHROUGH} from "@/lib/components/Menu";
import {RenameDialog} from "@/lib/character/train/RenameDialog";
import {Menu} from "primereact/menu";
import {LevelDialog} from "@/lib/character/train/LevelDialog";
import {getCurrentLevel} from "@/model/character/level/LevelChoice";

function PlayerActionButton({value}: {value: Character}) {
  const router = useRouter();
  const retire = useMutation({
    mutationFn: ({characterID}: {characterID: CharacterID}) => {
      return fetch(`/api/characters/${characterID}/retire`, {
        method: "POST"
      });
    },
    onSuccess: () => {
      router.refresh();
    }
  });
  const menu = useRef<Menu>(null);

  const [isConfirmRetireVisible, setIsConfirmRetireVisible] = useState(false);
  const retireButtonRef = useRef(null);

  const [isRenameOpen, setIsRenameOpen] = React.useState(false);
  const [isLevelUpOpen, setIsLevelUpOpen] = React.useState(false);

  return <>
    <Button ref={retireButtonRef} size="small" label="Actions" onClick={(ev) => {
      menu.current?.toggle(ev);
    }} />
    <Menu pt={MENU_PASSTHROUGH} ref={menu} popup popupAlignment="right" model={[
      {label: `Level Up`, visible: getCurrentLevel(value) < 3,  disabled: isLevelUpOpen, command() {
        setIsLevelUpOpen(true);
      }},
      {label: `Rename`, disabled: isRenameOpen, command() {
        setIsRenameOpen(true);
      }},
      {label: `Retire`, disabled: retire.isPending || isConfirmRetireVisible, command() {
        setIsConfirmRetireVisible(true);
      }}
    ]} />
    <RenameDialog value={value} visible={isRenameOpen} onClose={() => setIsRenameOpen(false)} />
    <LevelDialog value={value} visible={isLevelUpOpen} onClose={() => setIsLevelUpOpen(false)} />

    <ConfirmPopup pt={{
      root: {className: "bg-red-800 border-red-400/50 text-red-50 dark:bg-red-950 border dark:border-red-400/50 p-4 mt-4 gap-4 flex flex-col"},
      message: {className: "pl-4 text-red-100"},
      icon: {className: "text-red-100"}
    }} target={retireButtonRef.current ?? undefined} visible={isConfirmRetireVisible} onHide={() => setIsConfirmRetireVisible(false)}
                  message={`Are you sure you want to retire ${value.name}? Once retired, they cannot be unretired.`} icon="pi pi-exclamation-triangle" accept={() => {
      retire.mutate({characterID: value.id});
    }} reject={() => setIsConfirmRetireVisible(false)}  />
  </>
}

function Stat({label, value, proficient}: {label: string, value: number, proficient: "untrained" | "proficient"}) {
  return <div className="flex flex-row gap-2 items-center border-b border-b-2">
    <ProficiencyIcon value={proficient} />
    <span className="font-bold">{label}</span>
    <span>{value}</span>
  </div>
}

function Skill({id, proficient, expertise}: { id: SkillID, proficient: boolean, expertise: boolean }) {
  return <div className="flex flex-row gap-2 items-center">
    <ProficiencyIcon value={expertise ? "expertise" : (proficient ? "proficient" : "untrained")} />
    <span>{SKILLS[id].label}</span>
  </div>
}

export function CharacterProfile({value, full}: { value: Character, full?: boolean }) {
  return <div className={twMerge(
    "relative w-full box-content rounded-md bg-white dark:bg-black/40 border border-[color:var(--foreground)]/20 flex flex-col gap-4"
  )}>
    <div className={twMerge(
      "flex-1 flex flex-row p-4 rounded-t-md h-24 box-content gap-4",
      full && "bg-black/20 dark:bg-black/50"
    )}>
      <span className={twMerge("pi pi-user w-24 h-24 text-[96px]", !full && "opacity-50")}/>
      <div className={twMerge("w-full", !full && "opacity-50")}>
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
    {full && <div className="px-4 flex flex-col gap-4 pb-4">
      <div className="flex flex-row gap-4">
        {ATTRIBUTE_IDS.map(attributeID => <div key={attributeID} className="flex-1 flex flex-col">
          <Stat label={attributeID.toUpperCase()} value={value.stats[attributeID]} proficient={value.savingThrows[attributeID]}/>
          {SKILL_IDS.filter(skillID => SKILLS[skillID].attribute === attributeID).map(skillID => <div key={skillID}>
            <Skill id={skillID} proficient={value.skills[skillID] === "proficient"} expertise={value.skills[skillID] === "expertise"}/>
          </div>)}
        </div>)}
        {value.tools.length > 0 && <div className="flex-1 gap-2">
          <strong>Tools</strong>
          <div>
            {value.tools.map(toolID => <div key={toolID} className="flex flex-row gap-2 items-center">
              <ProficientIcon/>
              <span>{REPOSITORY.TOOLS[toolID].label}</span>
            </div>)}
          </div>
        </div>}
      </div>
      <hr/>
      <div className="flex flex-row">
        {value.items.length > 0 && <div className="flex-1">
          <strong>Items</strong>
          <div className="flex flex-col">
            {value.items.map((item, index) => <div key={`${item.itemID}-${index}`}>
              - {REPOSITORY.ITEMS[item.itemID].label}
            </div>)}
          </div>
        </div>}
        {(Object.values(value.spells).length > 0 || Object.values(value.metamagics).length > 0) && <div className="flex-1">
          {Object.values(value.spells).length > 0 && <>
            <div className="flex flex-col">
              {SPELL_LEVELS.map(spellLevel => {
                const spells = Object.values(value.spells).filter(spellID => REPOSITORY.SPELLS[spellID].level === spellLevel);
                if (spells.length === 0) return <React.Fragment key={spellLevel}></React.Fragment>
                return <React.Fragment key={spellLevel}>
                  <strong>{spellLevel !== "cantrip" ? `Level ${spellLevel} Spells` : "Cantrip Spells"}</strong>
                  <div>
                    {spells.sort().map(spellID => <div key={spellID}>
                      - {REPOSITORY.SPELLS[spellID].label}
                    </div>)}
                  </div>
                </React.Fragment>
              })}
            </div>
          </>}
          {Object.values(value.metamagics).length > 0 && <>
            <strong>Metamagics</strong>
            <div className="flex flex-col">
              {Object.values(value.metamagics).sort().map(metamagicID => <div>
                - {REPOSITORY.METAMAGICS[metamagicID].label}
              </div>)}
            </div>
          </>}
        </div>}

        {(Object.values(value.feats).length > 0 || Object.values(value.maneuvers).length > 0) && <div className="flex-1">
          {Object.values(value.feats).length > 0 && <>
            <strong>Feats</strong>
            <div className="flex flex-col">
              {Object.keys(value.feats).map((choiceID) => <div key={choiceID}>
                - {REPOSITORY.FEATS[value.feats[choiceID].featID].label}
              </div>)}
            </div>
          </>}
          {Object.values(value.maneuvers).length > 0 && <>
            <strong>Feats</strong>
            <div className="flex flex-col">
              {Object.keys(value.maneuvers).map((choiceID) => <div key={choiceID}>
                - {REPOSITORY.MANEUVERS[value.maneuvers[choiceID]].label}
              </div>)}
            </div>
          </>}
        </div>}
        </div>
          </div>}
        {!value.retired && <div className="absolute right-4 top-4">
          <PlayerActionButton value={value}/>
        </div>}
      </div>
      }