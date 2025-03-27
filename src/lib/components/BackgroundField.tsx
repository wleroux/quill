import {
  Background,
  BACKGROUND_LABELS,
  BackgroundAcolyte,
  BackgroundArtisan,
  BackgroundCharlatan,
  BackgroundCriminal,
  BackgroundCustom,
  BackgroundEntertainer,
  BackgroundFarmer,
  BackgroundGuard,
  BackgroundGuide,
  BackgroundHermit,
  BackgroundMerchant,
  BackgroundNoble,
  Backgrounds,
  BACKGROUNDS,
  BackgroundSage,
  BackgroundSailor,
  BackgroundScribe,
  BackgroundSoldier,
  BackgroundWayfarer,
  DEFAULT_BACKGROUNDS,
  isBackgroundArtisanAttribute,
  isBackgroundCharlatanAttribute,
  isBackgroundCriminalAttribute,
  isBackgroundEntertainerAttribute,
  isBackgroundFarmerAttribute,
  isBackgroundGuardAttribute,
  isBackgroundGuideAttribute,
  isBackgroundHermitAttribute,
  isBackgroundMerchantAttribute,
  isBackgroundNobleAttribute,
  isBackgroundSageAttribute,
  isBackgroundSailorAttribute,
  isBackgroundScribeAttribute,
  isBackgroundSoldierAttribute,
  isBackgroundWayfarerAttribute
} from "@/model/background";
import {DropdownField} from "@/lib/components/DropdownField";
import React from "react";
import {FieldSet} from "@/lib/components/FieldSet";
import {FeatCrafterField, FeatField, FeatMusicianField, FeatSkilledField} from "@/lib/components/FeatField";
import {SkillField} from "@/lib/components/SkillField";
import {AttributeField} from "@/lib/components/AttributeField";
import {ToolField} from "@/lib/components/ToolField";
import {FieldRow} from "@/lib/components/FieldRow";
import {SpellField} from "@/lib/components/SpellField";
import {isMentalAttribute, MentalAttribute} from "@/model/attribute";
import {isOriginFeat} from "@/model/feat";
import {isArtisanTool, isGamingSetTool} from "@/model/tool";

function BackgroundAcolyteField({value, onChange}: {value: BackgroundAcolyte, onChange: (data: BackgroundAcolyte) => void}) {
  return <FieldSet>
    <FieldRow>
      <AttributeField label="Attribute" value={value.attribute1} filter={isMentalAttribute} onChange={(attribute1) => onChange({...value, attribute1})}/>
      <AttributeField label="Attribute" value={value.attribute2} filter={isMentalAttribute} onChange={(attribute2) => onChange({...value, attribute2})}/>
      <AttributeField label="Attribute" value={value.attribute3} filter={isMentalAttribute} onChange={(attribute3) => onChange({...value, attribute3})}/>
    </FieldRow>
    <FieldRow>
      <AttributeField
        label="Spellcasting Ability"
        value={value.feat.spellcastingAbility}
        filter={isMentalAttribute}
        onChange={(attribute) => onChange({...value, feat: {...value.feat, spellcastingAbility: attribute as MentalAttribute}})} />
    </FieldRow>
    <FieldRow>
      <SpellField label="Cantrip" value={value.feat.cantrip1} onChange={(spell) => onChange({...value, feat: {...value.feat, cantrip1: spell}})}/>
      <SpellField label="Cantrip" value={value.feat.cantrip2} onChange={(spell) => onChange({...value, feat: {...value.feat, cantrip2: spell}})}/>
    </FieldRow>
  </FieldSet>
}

function BackgroundArtisanField({value, onChange}: {value: BackgroundArtisan, onChange: (data: BackgroundArtisan) => void}) {
  return <FieldSet>
    <FieldRow>
      <AttributeField label="Attribute" value={value.attribute1} filter={isBackgroundArtisanAttribute} onChange={(attribute1) => onChange({...value, attribute1})}/>
      <AttributeField label="Attribute" value={value.attribute2} filter={isBackgroundArtisanAttribute} onChange={(attribute2) => onChange({...value, attribute2})}/>
      <AttributeField label="Attribute" value={value.attribute3} filter={isBackgroundArtisanAttribute} onChange={(attribute3) => onChange({...value, attribute3})}/>
    </FieldRow>
    <FeatCrafterField inline value={value.feat} onChange={(feat) => onChange({...value, feat})}/>
    <FieldRow>
      <ToolField label="Artisan Tool" filter={isArtisanTool} value={value.tool} onChange={tool => onChange({...value, tool})} />
    </FieldRow>
  </FieldSet>
}

function BackgroundCharlatanField({value, onChange}: {value: BackgroundCharlatan, onChange: (data: BackgroundCharlatan) => void}) {
  return <FieldSet>
    <FieldRow>
      <AttributeField label="Attribute" value={value.attribute1} filter={isBackgroundCharlatanAttribute} onChange={(attribute1) => onChange({...value, attribute1})}/>
      <AttributeField label="Attribute" value={value.attribute2} filter={isBackgroundCharlatanAttribute} onChange={(attribute2) => onChange({...value, attribute2})}/>
      <AttributeField label="Attribute" value={value.attribute3} filter={isBackgroundCharlatanAttribute} onChange={(attribute3) => onChange({...value, attribute3})}/>
    </FieldRow>
    <FeatSkilledField inline value={value.feat} onChange={(feat) => onChange({...value, feat})}/>
  </FieldSet>
}

function BackgroundCriminalField({value, onChange}: {value: BackgroundCriminal, onChange: (data: BackgroundCriminal) => void}) {
  return <FieldSet>
    <FieldRow>
      <AttributeField label="Attribute" value={value.attribute1} filter={isBackgroundCriminalAttribute} onChange={(attribute1) => onChange({...value, attribute1})}/>
      <AttributeField label="Attribute" value={value.attribute2} filter={isBackgroundCriminalAttribute} onChange={(attribute2) => onChange({...value, attribute2})}/>
      <AttributeField label="Attribute" value={value.attribute3} filter={isBackgroundCriminalAttribute} onChange={(attribute3) => onChange({...value, attribute3})}/>
    </FieldRow>
  </FieldSet>
}

function BackgroundCustomField({value, onChange}: {value: BackgroundCustom, onChange: (data: BackgroundCustom) => void}) {
  return <FieldSet>
    <FieldRow>
      <AttributeField label="Attribute" value={value.attribute1} onChange={(attribute) => onChange({...value, attribute1: attribute})}/>
      <AttributeField label="Attribute" value={value.attribute2} onChange={(attribute) => onChange({...value, attribute2: attribute})}/>
      <AttributeField label="Attribute" value={value.attribute3} onChange={(attribute) => onChange({...value, attribute3: attribute})}/>
    </FieldRow>
    <FeatField label="Origin Feat" filter={isOriginFeat} value={value.feat} onChange={feat => onChange({...value, feat: feat})}/>
    <FieldRow>
      <SkillField label="Skill" value={value.skill1} onChange={(skill) => onChange({...value, skill1: skill})}/>
      <SkillField label="Skill" value={value.skill2} onChange={(skill) => onChange({...value, skill2: skill})}/>
    </FieldRow>
    <FieldRow>
      <ToolField label="Tool" value={value.tool} onChange={tool => onChange({...value, tool: tool})}/>
    </FieldRow>
  </FieldSet>
}

function BackgroundEntertainerField({value, onChange}: {value: BackgroundEntertainer, onChange: (data: BackgroundEntertainer) => void}) {
  return <FieldSet>
    <FieldRow>
      <AttributeField label="Attribute" filter={isBackgroundEntertainerAttribute} value={value.attribute1} onChange={(attribute) => onChange({...value, attribute1: attribute})}/>
      <AttributeField label="Attribute" filter={isBackgroundEntertainerAttribute} value={value.attribute2} onChange={(attribute) => onChange({...value, attribute2: attribute})}/>
      <AttributeField label="Attribute" filter={isBackgroundEntertainerAttribute} value={value.attribute3} onChange={(attribute) => onChange({...value, attribute3: attribute})}/>
    </FieldRow>
    <FeatMusicianField inline value={value.feat} onChange={feat => onChange({...value, feat})} />
  </FieldSet>
}

function BackgroundFarmerField({value, onChange}: {value: BackgroundFarmer, onChange: (data: BackgroundFarmer) => void}) {
  return <FieldSet>
    <FieldRow>
      <AttributeField label="Attribute" filter={isBackgroundFarmerAttribute} value={value.attribute1} onChange={(attribute) => onChange({...value, attribute1: attribute})}/>
      <AttributeField label="Attribute" filter={isBackgroundFarmerAttribute} value={value.attribute2} onChange={(attribute) => onChange({...value, attribute2: attribute})}/>
      <AttributeField label="Attribute" filter={isBackgroundFarmerAttribute} value={value.attribute3} onChange={(attribute) => onChange({...value, attribute3: attribute})}/>
    </FieldRow>
  </FieldSet>
}

function BackgroundGuardField({value, onChange}: {value: BackgroundGuard, onChange: (data: BackgroundGuard) => void}) {
  return <FieldSet>
    <FieldRow>
      <AttributeField label="Attribute" filter={isBackgroundGuardAttribute} value={value.attribute1} onChange={(attribute) => onChange({...value, attribute1: attribute})}/>
      <AttributeField label="Attribute" filter={isBackgroundGuardAttribute} value={value.attribute2} onChange={(attribute) => onChange({...value, attribute2: attribute})}/>
      <AttributeField label="Attribute" filter={isBackgroundGuardAttribute} value={value.attribute3} onChange={(attribute) => onChange({...value, attribute3: attribute})}/>
    </FieldRow>
    <FieldRow>
      <ToolField label="Gaming Set" filter={isGamingSetTool} value={value.tool} onChange={tool => onChange({...value, tool: tool})} />
    </FieldRow>
  </FieldSet>
}

function BackgroundGuideField({value, onChange}: {value: BackgroundGuide, onChange: (data: BackgroundGuide) => void}) {
  return <FieldSet>
    <FieldRow>
      <AttributeField label="Attribute" filter={isBackgroundGuideAttribute} value={value.attribute1} onChange={(attribute) => onChange({...value, attribute1: attribute})}/>
      <AttributeField label="Attribute" filter={isBackgroundGuideAttribute} value={value.attribute2} onChange={(attribute) => onChange({...value, attribute2: attribute})}/>
      <AttributeField label="Attribute" filter={isBackgroundGuideAttribute} value={value.attribute3} onChange={(attribute) => onChange({...value, attribute3: attribute})}/>
    </FieldRow>
    <FieldRow>
      <AttributeField label="Spellcasting Ability" filter={isMentalAttribute} value={value.feat.spellcastingAbility} onChange={attribute => onChange({...value, feat: {...value.feat, spellcastingAbility: attribute}})} />
    </FieldRow>
    <FieldRow>
      <SpellField label="Cantrip" value={value.feat.cantrip1} onChange={attribute => onChange({...value, feat: {...value.feat, cantrip1: attribute}})} />
      <SpellField label="Cantrip" value={value.feat.cantrip2} onChange={attribute => onChange({...value, feat: {...value.feat, cantrip2: attribute}})} />
    </FieldRow>
  </FieldSet>
}

function BackgroundHermitField({value, onChange}: {value: BackgroundHermit, onChange: (data: BackgroundHermit) => void}) {
  return <FieldSet>
    <FieldRow>
      <AttributeField label="Attribute" filter={isBackgroundHermitAttribute} value={value.attribute1} onChange={(attribute) => onChange({...value, attribute1: attribute})}/>
      <AttributeField label="Attribute" filter={isBackgroundHermitAttribute} value={value.attribute2} onChange={(attribute) => onChange({...value, attribute2: attribute})}/>
      <AttributeField label="Attribute" filter={isBackgroundHermitAttribute} value={value.attribute3} onChange={(attribute) => onChange({...value, attribute3: attribute})}/>
    </FieldRow>
  </FieldSet>
}

function BackgroundMerchantField({value, onChange}: {value: BackgroundMerchant, onChange: (data: BackgroundMerchant) => void}) {
  return <FieldSet>
    <FieldRow>
      <AttributeField label="Attribute" filter={isBackgroundMerchantAttribute} value={value.attribute1} onChange={(attribute) => onChange({...value, attribute1: attribute})}/>
      <AttributeField label="Attribute" filter={isBackgroundMerchantAttribute} value={value.attribute2} onChange={(attribute) => onChange({...value, attribute2: attribute})}/>
      <AttributeField label="Attribute" filter={isBackgroundMerchantAttribute} value={value.attribute3} onChange={(attribute) => onChange({...value, attribute3: attribute})}/>
    </FieldRow>
  </FieldSet>
}


function BackgroundNobleField({value, onChange}: {value: BackgroundNoble, onChange: (data: BackgroundNoble) => void}) {
  return <FieldSet>
    <FieldRow>
      <AttributeField label="Attribute" filter={isBackgroundNobleAttribute} value={value.attribute1} onChange={(attribute) => onChange({...value, attribute1: attribute})}/>
      <AttributeField label="Attribute" filter={isBackgroundNobleAttribute} value={value.attribute2} onChange={(attribute) => onChange({...value, attribute2: attribute})}/>
      <AttributeField label="Attribute" filter={isBackgroundNobleAttribute} value={value.attribute3} onChange={(attribute) => onChange({...value, attribute3: attribute})}/>
    </FieldRow>
    <FeatSkilledField inline value={value.feat} onChange={feat => onChange({...value, feat: feat})} />
    <FieldRow>
      <ToolField label="Gaming Set" filter={isGamingSetTool} value={value.tool} onChange={tool => onChange({...value, tool: tool})} />
    </FieldRow>
  </FieldSet>
}


function BackgroundSageField({value, onChange}: {value: BackgroundSage, onChange: (data: BackgroundSage) => void}) {
  return <FieldSet>
    <FieldRow>
      <AttributeField label="Attribute" filter={isBackgroundSageAttribute} value={value.attribute1} onChange={(attribute) => onChange({...value, attribute1: attribute})}/>
      <AttributeField label="Attribute" filter={isBackgroundSageAttribute} value={value.attribute2} onChange={(attribute) => onChange({...value, attribute2: attribute})}/>
      <AttributeField label="Attribute" filter={isBackgroundSageAttribute} value={value.attribute3} onChange={(attribute) => onChange({...value, attribute3: attribute})}/>
    </FieldRow>
    <FieldRow>
      <AttributeField label="Spellcasting Ability" filter={isMentalAttribute} value={value.feat.spellcastingAbility} onChange={attribute => onChange({...value, feat: {...value.feat, spellcastingAbility: attribute}})} />
    </FieldRow>
    <FieldRow>
      <SpellField label="Cantrip" value={value.feat.cantrip1} onChange={attribute => onChange({...value, feat: {...value.feat, cantrip1: attribute}})} />
      <SpellField label="Cantrip" value={value.feat.cantrip2} onChange={attribute => onChange({...value, feat: {...value.feat, cantrip2: attribute}})} />
    </FieldRow>
  </FieldSet>
}


function BackgroundSailorField({value, onChange}: {value: BackgroundSailor, onChange: (data: BackgroundSailor) => void}) {
  return <FieldSet>
    <FieldRow>
      <AttributeField label="Attribute" filter={isBackgroundSailorAttribute} value={value.attribute1} onChange={(attribute) => onChange({...value, attribute1: attribute})}/>
      <AttributeField label="Attribute" filter={isBackgroundSailorAttribute} value={value.attribute2} onChange={(attribute) => onChange({...value, attribute2: attribute})}/>
      <AttributeField label="Attribute" filter={isBackgroundSailorAttribute} value={value.attribute3} onChange={(attribute) => onChange({...value, attribute3: attribute})}/>
    </FieldRow>
  </FieldSet>
}


function BackgroundScribeField({value, onChange}: {value: BackgroundScribe, onChange: (data: BackgroundScribe) => void}) {
  return <FieldSet>
    <FieldRow>
      <AttributeField label="Attribute" filter={isBackgroundScribeAttribute} value={value.attribute1} onChange={(attribute) => onChange({...value, attribute1: attribute})}/>
      <AttributeField label="Attribute" filter={isBackgroundScribeAttribute} value={value.attribute2} onChange={(attribute) => onChange({...value, attribute2: attribute})}/>
      <AttributeField label="Attribute" filter={isBackgroundScribeAttribute} value={value.attribute3} onChange={(attribute) => onChange({...value, attribute3: attribute})}/>
    </FieldRow>
    <FeatSkilledField inline value={value.feat} onChange={feat => onChange({...value, feat})} />
  </FieldSet>
}


function BackgroundSoldierField({value, onChange}: {value: BackgroundSoldier, onChange: (data: BackgroundSoldier) => void}) {
  return <FieldSet>
    <FieldRow>
      <AttributeField label="Attribute" filter={isBackgroundSoldierAttribute} value={value.attribute1} onChange={(attribute) => onChange({...value, attribute1: attribute})}/>
      <AttributeField label="Attribute" filter={isBackgroundSoldierAttribute} value={value.attribute2} onChange={(attribute) => onChange({...value, attribute2: attribute})}/>
      <AttributeField label="Attribute" filter={isBackgroundSoldierAttribute} value={value.attribute3} onChange={(attribute) => onChange({...value, attribute3: attribute})}/>
    </FieldRow>
    <FieldRow>
      <ToolField label="Gaming Set" filter={isGamingSetTool} value={value.tool} onChange={tool => onChange({...value, tool})} />
    </FieldRow>
  </FieldSet>
}


function BackgroundWayfarerField({value, onChange}: {value: BackgroundWayfarer, onChange: (data: BackgroundWayfarer) => void}) {
  return <FieldSet>
    <FieldRow>
      <AttributeField label="Attribute" filter={isBackgroundWayfarerAttribute} value={value.attribute1} onChange={(attribute) => onChange({...value, attribute1: attribute})}/>
      <AttributeField label="Attribute" filter={isBackgroundWayfarerAttribute} value={value.attribute2} onChange={(attribute) => onChange({...value, attribute2: attribute})}/>
      <AttributeField label="Attribute" filter={isBackgroundWayfarerAttribute} value={value.attribute3} onChange={(attribute) => onChange({...value, attribute3: attribute})}/>
    </FieldRow>
  </FieldSet>
}

export function BackgroundField({
  value, onChange}: {value: Background, onChange: (value: Background) => void}) {
  return <FieldSet inline>
    <FieldRow>
      <DropdownField label="Background" value={value.type} onChange={ev => onChange({type: ev.value, data: DEFAULT_BACKGROUNDS[ev.value as keyof Backgrounds]} as Background)} options={BACKGROUNDS.map(background => ({
        value: background, label: BACKGROUND_LABELS[background]
      }))} />
    </FieldRow>

    {value.type === "acolyte" && <BackgroundAcolyteField value={value.data} onChange={(data) => onChange({type: "acolyte", data})} />}
    {value.type === "artisan" && <BackgroundArtisanField value={value.data} onChange={(data) => onChange({type: "artisan", data})} />}
    {value.type === "charlatan" && <BackgroundCharlatanField value={value.data} onChange={(data) => onChange({type: "charlatan", data})} />}
    {value.type === "criminal" && <BackgroundCriminalField value={value.data} onChange={(data) => onChange({type: "criminal", data})} />}
    {value.type === "custom" && <BackgroundCustomField value={value.data} onChange={(data) => onChange({type: "custom", data})} />}
    {value.type === "entertainer" && <BackgroundEntertainerField value={value.data} onChange={(data) => onChange({type: "entertainer", data})} />}
    {value.type === "farmer" && <BackgroundFarmerField value={value.data} onChange={(data) => onChange({type: "farmer", data})} />}
    {value.type === "guard" && <BackgroundGuardField value={value.data} onChange={(data) => onChange({type: "guard", data})} />}
    {value.type === "guide" && <BackgroundGuideField value={value.data} onChange={(data) => onChange({type: "guide", data})} />}
    {value.type === "hermit" && <BackgroundHermitField value={value.data} onChange={(data) => onChange({type: "hermit", data})} />}
    {value.type === "merchant" && <BackgroundMerchantField value={value.data} onChange={(data) => onChange({type: "merchant", data})} />}
    {value.type === "noble" && <BackgroundNobleField value={value.data} onChange={(data) => onChange({type: "noble", data})} />}
    {value.type === "sage" && <BackgroundSageField value={value.data} onChange={(data) => onChange({type: "sage", data})} />}
    {value.type === "sailor" && <BackgroundSailorField value={value.data} onChange={(data) => onChange({type: "sailor", data})} />}
    {value.type === "scribe" && <BackgroundScribeField value={value.data} onChange={(data) => onChange({type: "scribe", data})} />}
    {value.type === "soldier" && <BackgroundSoldierField value={value.data} onChange={(data) => onChange({type: "soldier", data})} />}
    {value.type === "wayfarer" && <BackgroundWayfarerField value={value.data} onChange={(data) => onChange({type: "wayfarer", data})} />}
  </FieldSet>
}
