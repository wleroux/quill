"use client";
import {Character} from "@/model/character/Character";
import React, {useRef} from "react";
import {PageTitle} from "@/lib/components/PageTitle";
import {Spacer} from "@/lib/components/Spacer";
import {Button} from "@/lib/components/Button";
import {CreateCharacterDialog} from "@/app/player/my-characters/CreateCharacterDialog";
import {REPOSITORY} from "@/model/source/index";
import {twMerge} from "tailwind-merge";
import {useMutation} from "@tanstack/react-query";
import {useRouter} from "next/navigation";
import {retireCharacterAction} from "@/actions/CharactersActions";
import {ConfirmPopup} from "primereact/confirmpopup";
import {SKILL_IDS, SKILLS} from "@/model/source/Skill";
import {SkillID} from "@/model/source/model/Skill";
import {ProficiencyIcon} from "@/app/player/my-characters/proficiency/ProficiencyIcon";
import {ATTRIBUTE_IDS} from "@/model/source/model/Attribute";
import {ProficientIcon} from "@/app/player/my-characters/proficiency/ProficientIcon";

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

function CharacterSlot({value, active}: { value: Character, active?: boolean }) {
  const router = useRouter();
  const retireMutation = useMutation({
    mutationFn: async () => {
      return retireCharacterAction(value.id);
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
      active && "bg-black/50"
    )}>
      <span className={twMerge("pi pi-user w-24 h-24 text-[96px]", !active && "opacity-50")}/>
      <div className={twMerge("w-full", !active && "opacity-50")}>
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
    {active && <div className="px-4 flex flex-col gap-4 pb-4">
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
            <strong>Prepared Spells</strong>
            <div className="flex flex-col">
              {Object.values(value.spells).map(spellID => <div>
                - {REPOSITORY.SPELLS[spellID].label}
              </div>)}
            </div>
          </>}
          {Object.values(value.metamagics).length > 0 && <>
            <strong>Metamagics</strong>
            <div className="flex flex-col">
              {Object.values(value.metamagics).map(metamagicID => <div>
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
        root: {className: "bg-red-950 border border-red-400/50 p-4 mt-4 gap-4 flex flex-col"},
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

export function MyCharacters({characters}: {characters: Character[]}) {
  const [createNewCharacterDialog, setCreateNewCharacterDialog] = React.useState<boolean>(false);

  const ACTIVE_CHARACTERS = characters.filter(character => !character.retired);
  const RETIRED_CHARACTERS = characters.filter(character => character.retired);

  return <>
    <div className="flex flex-row items-center">
      <PageTitle>
        My Characters
      </PageTitle>
      <Spacer/>
      <Button  icon="pi pi-user" disabled={Object.values(characters).some(character => !character.retired)} label="New Character" onClick={() => setCreateNewCharacterDialog(true)}/>
    </div>

    <CreateCharacterDialog visible={createNewCharacterDialog} onClose={() => setCreateNewCharacterDialog(false)} />

    {Object.keys(characters).length === 0 && <div className={"flex flex-col justify-center gap-10 items-center py-10"}>
      <span>You have no characters yet.</span>
      <div>
        <Button className="py-2 px-4" size="large" label="Create New Character" icon="pi pi-user" onClick={() => setCreateNewCharacterDialog(true)} />
      </div>
    </div>}

    {ACTIVE_CHARACTERS.length > 0 && <>
      <PageTitle>Active Character</PageTitle>
      <div className="flex flex-row gap-4 justify-around justify-items-center flex-wrap">
        {ACTIVE_CHARACTERS.map(character => <CharacterSlot key={character.id} value={character} active />)}
      </div>
    </>}
    {RETIRED_CHARACTERS.length > 0 && <>
      <PageTitle>Retired Characters</PageTitle>
      <div className="flex flex-row gap-4 justify-around justify-items-center flex-wrap">
        {RETIRED_CHARACTERS.map(character => <CharacterSlot key={character.id} value={character} />)}
      </div>
    </>}
  </>
}