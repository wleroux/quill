"use client";
import {SkillID} from "@/model/source/model/Skill";
import {ProficiencyIcon} from "@/app/player/my-characters/proficiency/ProficiencyIcon";
import {SKILL_IDS, SKILLS} from "@/model/source/Skill";
import {Character} from "@/model/character/Character";
import React, {useState} from "react";
import {REPOSITORY} from "@/model/source/index";
import {ATTRIBUTE_IDS} from "@/model/source/model/Attribute";
import {ProficientIcon} from "@/app/player/my-characters/proficiency/ProficientIcon";
import {twMerge} from "tailwind-merge";
import {SPELL_LEVELS} from "@/model/source/model/Spell";
import {CharacterActionButton} from "@/app/player/my-characters/CharacterActionButton";
import {TabPanel, TabView} from "primereact/tabview";
import {TAB_PANEL_PT, TAB_VIEW_PT} from "@/app/theme/TabPanelTheme";
import {Game} from "@/model/game/Game";
import {TABLE_PT} from "@/app/theme/TableTheme";
import {useRouter} from "next/navigation";
import {GameStatusTag} from "@/app/game-master/my-games/MyGamesPage";


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

export function CharacterProfile({value, games}: { value: Character, games: Game[] }) {
  const [isMundaneExpanded, setIsMundaneExpanded] = useState(false);
  const [isMagicalExpanded, setIsMagicalExpanded] = useState(true);
  const router = useRouter();
  return <div className={twMerge(
    "relative w-full box-content rounded-md bg-white dark:bg-black/40 border border-[color:var(--foreground)]/20 flex flex-col"
  )}>
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
    <TabView pt={TAB_VIEW_PT}>
      <TabPanel header="Skills" pt={TAB_PANEL_PT}>
        <div className="px-4 flex flex-col gap-4 p-4">
          <div className="flex flex-row gap-4 flex-wrap">
            {ATTRIBUTE_IDS.map(attributeID => <div key={attributeID} className="flex-1 flex flex-col">
              <Stat label={attributeID.toUpperCase()} value={value.stats[attributeID]} proficient={value.savingThrows[attributeID]}/>
              {SKILL_IDS.filter(skillID => SKILLS[skillID].attribute === attributeID).map(skillID => <div key={skillID}>
                <Skill id={skillID} proficient={value.skills[skillID] === "proficient"} expertise={value.skills[skillID] === "expertise"}/>
              </div>)}
            </div>)}
            {value.tools.length > 0 && <div className="flex-1 gap-2">
              <div className="flex flex-row gap-2 items-center border-b border-b-2">
                <strong>Tools</strong>
              </div>
              <div>
                {value.tools.map(toolID => <div key={toolID} className="flex flex-row gap-2 items-center">
                  <ProficientIcon/>
                  <span>{REPOSITORY.TOOLS[toolID].label}</span>
                </div>)}
              </div>
            </div>}
          </div>
        </div>
      </TabPanel>
      <TabPanel header="Items" pt={TAB_PANEL_PT}>
        <div className="p-4">
          <div className="flex flex-col gap-2">
            <div>
              <strong className="inline-flex items-center gap-2 cursor-pointer" onClick={() => setIsMundaneExpanded(prev => !prev)}>
                {isMundaneExpanded && <span className="pi pi-chevron-down"/>}
                {!isMundaneExpanded && <span className="pi pi-chevron-right"/>}
                <span>Mundane</span>
              </strong>
              {isMundaneExpanded && value.items.filter(item => REPOSITORY.ITEMS[item.itemID].rarity === "Mundane")
                .sort((a, b) => REPOSITORY.ITEMS[a.itemID].label.localeCompare(REPOSITORY.ITEMS[b.itemID].label))
                .map((item, index) => <div key={`${item.itemID}-${index}`}>
                  - {REPOSITORY.ITEMS[item.itemID]?.label}
                </div>)}
            </div>
            <div>
              <strong className="inline-flex items-center gap-2 cursor-pointer" onClick={() => setIsMagicalExpanded(prev => !prev)}>
                {isMagicalExpanded && <span className="pi pi-chevron-down"/>}
                {!isMagicalExpanded && <span className="pi pi-chevron-right"/>}
                Magical
              </strong>
              {isMagicalExpanded && value.items.filter(item => REPOSITORY.ITEMS[item.itemID].rarity !== "Mundane")
                .sort((a, b) => REPOSITORY.ITEMS[a.itemID].label.localeCompare(REPOSITORY.ITEMS[b.itemID].label))
                .map((item, index) => <div key={`${item.itemID}-${index}`}>
                  - {REPOSITORY.ITEMS[item.itemID]?.label}
                </div>)}
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel header="Feats" pt={TAB_PANEL_PT}>
        <div className="p-4">
          <div className="flex flex-col">
            {Object.values(value.feats).length > 0 && <>
              {Object.keys(value.feats).map((choiceID) => <div key={choiceID}>
                - {REPOSITORY.FEATS[value.feats[choiceID].featID].label}
              </div>)}
            </>}
            {Object.values(value.maneuvers).length > 0 && <>
              {Object.keys(value.maneuvers).map((choiceID) => <div key={choiceID}>
                - {REPOSITORY.MANEUVERS[value.maneuvers[choiceID]].label}
              </div>)}
            </>}
          </div>
        </div>
      </TabPanel>
      {(Object.values(value.spells).length > 0 || Object.values(value.metamagics).length > 0) && <TabPanel header="Spells" pt={TAB_PANEL_PT}>
        <div className="p-4">
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
              {Object.values(value.metamagics).sort().map(metamagicID => <div key={metamagicID}>
                - {REPOSITORY.METAMAGICS[metamagicID].label}
              </div>)}
            </div>
          </>}
        </div>
      </TabPanel>}
      <TabPanel header="Languages" pt={TAB_PANEL_PT}>
        <div className="p-4">
          <div className="flex flex-col">
            {(value.languages ?? []).map((languageID) => <div key={languageID}>
              - {REPOSITORY.LANGUAGES[languageID].label}
            </div>)}
          </div>
        </div>
      </TabPanel>
      <TabPanel header="Games" pt={TAB_PANEL_PT}>
        <table className={TABLE_PT.root.className}>
          <thead className={TABLE_PT.thead.className}>
          <tr className={TABLE_PT.theadRow.className}>
            <th>Name</th>
            <th>Tier</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody>
          {games.map(game => <tr key={game.id} className={twMerge(TABLE_PT.tbodyRow.className, "cursor-pointer")} onClick={() => router.push(`/games/${game.id}`)}>
            <td className="text-center w-[50%]">{game.name}</td>
            <td className="text-center w-[25%] [font-variant:small-caps]">{game.tier}</td>
            <td className="text-center w-[25%]"><GameStatusTag status={game.status} /></td>
          </tr>)}
          </tbody>
        </table>
      </TabPanel>
    </TabView>

    {!value.retired && <div className="absolute right-4 top-4">
      <CharacterActionButton value={value} games={games}/>
    </div>}
  </div>
}