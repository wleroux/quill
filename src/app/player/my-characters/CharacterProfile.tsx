"use client";
import {SkillID} from "@/model/source/model/Skill";
import {ProficiencyIcon} from "@/app/player/my-characters/proficiency/ProficiencyIcon";
import {SKILL_IDS, SKILLS} from "@/model/source/Skill";
import {Character} from "@/model/character/Character";
import React, {useRef} from "react";
import {REPOSITORY} from "@/model/source/index";
import {ATTRIBUTE_IDS} from "@/model/source/model/Attribute";
import {ProficientIcon} from "@/app/player/my-characters/proficiency/ProficientIcon";
import {Button} from "@/lib/components/Button";
import {useRouter} from "next/navigation";
import {useMutation} from "@tanstack/react-query";
import {twMerge} from "tailwind-merge";
import {ConfirmPopup} from "primereact/confirmpopup";
import {SPELL_LEVELS} from "@/model/source/model/Spell";

function Stat({label, value}: {label: string, value: number}) {
  return <div className="flex flex-row gap-4 items-center">
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
  const router = useRouter();
  const retireMutation = useMutation({
    mutationFn: async () => {
      return fetch(`/api/characters/${value.id}/retire`, {
        method: "POST"
      });
    },
    onSuccess: () => {
      router.refresh();
    }
  });

  const [visible, setVisible] = React.useState(false);
  const retireButtonRef = useRef(null);

  return <div className={twMerge(
    "relative w-full box-content rounded-md bg-[color:var(--background)] border border-[color:var(--foreground)]/20 flex flex-col gap-4"
  )}>
    <div className={twMerge(
      "flex-1 flex flex-row p-4 rounded-t-md h-24 box-content gap-4",
      full && "bg-black/20 dark:bg-black/50"
    )}>
      <span className={twMerge("pi pi-user w-24 h-24 text-[96px]", !full && "opacity-50")}/>
      <div className={twMerge("w-full", !full && "opacity-50")}>
        <h2 className="font-bold text-xl">{value.name}</h2>
        <div>
          <strong>Specie:</strong> {REPOSITORY.SPECIES[value.specie.specieID]?.label}
        </div>
        <div>
          <strong>Background:</strong> {REPOSITORY.BACKGROUNDS[value.background.backgroundID]?.label}
        </div>
        <div>
          <strong>Class:</strong> {value.levels
          .filter(level => !value.levels.some(o => REPOSITORY.CLASSES[o.classID].replace === level.classID))
          .map(level => REPOSITORY.CLASSES[level.classID].label).join(" / ")}
        </div>
      </div>
    </div>
    {full && <div className="px-4 flex flex-col gap-4 pb-4">
      <div className="flex flex-row gap-4">
        {ATTRIBUTE_IDS.map(attributeID => <div key={attributeID} className="flex-1 flex flex-col">
          <Stat label={attributeID.toUpperCase()} value={value.stats[attributeID]}/>
          {SKILL_IDS.filter(skillID => SKILLS[skillID].attribute === attributeID).map(skillID => <div key={skillID}>
            <Skill id={skillID} proficient={value.skills.includes(skillID)} expertise={value.expertise.includes(skillID)}/>
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

        {value.feats.length > 0 && <div className="flex-1">
          <strong>Feats</strong>
          <div className="flex flex-col">
            {value.feats.map((feat, index) => <div key={`${feat.featID}-${index}`}>
              - {REPOSITORY.FEATS[feat.featID].label}
            </div>)}
          </div>
        </div>}
      </div>
    </div>}
    {!value.retired && <div className="absolute right-4 top-4">
      <ConfirmPopup pt={{
        root: {className: "bg-red-800 border-red-400/50 text-red-50 dark:bg-red-950 border dark:border-red-400/50 p-4 mt-4 gap-4 flex flex-col"},
        message: {className: "pl-4 text-red-100"},
        icon: {className: "text-red-100"}
      }} target={retireButtonRef.current ?? undefined} visible={visible} onHide={() => setVisible(false)}
                    message={`Are you sure you want to retire ${value.name}? Once retired, they cannot be unretired.`} icon="pi pi-exclamation-triangle" accept={() => {
        retireMutation.mutate();
      }} reject={() => setVisible(false)}  />

      <Button ref={retireButtonRef} icon="pi pi-trash" severity="danger" label="Retire" disabled={retireMutation.isPending} onClick={() => {
        setVisible(true);
      }} />
    </div>}
  </div>
}