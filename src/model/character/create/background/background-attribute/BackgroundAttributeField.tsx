import {ATTRIBUTE_IDS} from "@/model/source/model/Attribute";
import {Character} from "@/model/character/Character";
import {BackgroundAttributeDecision} from "@/model/character/create/background/background-attribute/BackgroundAttributeDecision";
import {BackgroundAttributeChoice} from "@/model/character/create/background/background-attribute/BackgroundAttributeChoice";
import {DropdownField} from "@/lib/components/DropdownField";
import {ATTRIBUTES} from "@/model/source/Attribute";
import {FieldSet} from "@/lib/components/FieldSet";

export function BackgroundAttributeField({character, choice, value, onChange}:  {character: Character, choice: BackgroundAttributeChoice, value: BackgroundAttributeDecision | undefined, onChange: (value: BackgroundAttributeDecision | undefined) => void }) {
  const init = character.stats;
  const attr1 = {...character.stats};
  if (value?.data.attributeID1) attr1[value?.data.attributeID1] += 1;
  const attr2 = {...character.stats};
  if (value?.data.attributeID1) attr2[value?.data.attributeID1] += 1;
  if (value?.data.attributeID2) attr2[value?.data.attributeID2] += 1;

  return (
    <FieldSet inline>
      <DropdownField label="Attribute" value={value?.data.attributeID1} onChange={(ev) => {
        onChange({
          type:"background-attribute",
          data: {
            ...value?.data,
            attributeID1: ev.target.value,
            attributeID2: value?.data.attributeID2!,
            attributeID3: value?.data.attributeID3!
          }
        })
      }} options={
        ATTRIBUTE_IDS
          .filter(attributeID => choice.data.condition === undefined || choice.data.condition(attributeID, character))
          .filter(attributeID => attributeID !== value?.data.attributeID2 || attributeID !== value?.data.attributeID3)
          .map(attributeID => ({
          label: `${ATTRIBUTES[attributeID].label} (${init[attributeID]} ⇒ ${init[attributeID] + 1})`,
          value: attributeID,
        }))
      } />
      <DropdownField label="Attribute" value={value?.data.attributeID2} onChange={(ev) => {
        onChange({
          type: "background-attribute",
          data: {
            ...value?.data,
            attributeID1: value?.data.attributeID1!,
            attributeID2: ev.target.value,
            attributeID3: value?.data.attributeID3!
          }
        })
      }} options={
        ATTRIBUTE_IDS
          .filter(attributeID => choice.data.condition === undefined || choice.data.condition(attributeID, character))
          .filter(attributeID => attributeID !== value?.data.attributeID1 || attributeID !== value?.data.attributeID3)
          .map(attributeID => ({
          label:  `${ATTRIBUTES[attributeID].label} (${attr1[attributeID]} ⇒ ${attr1[attributeID] + 1})`,
          value: attributeID,
        }))
      } />
      <DropdownField label="Attribute" value={value?.data.attributeID3} onChange={(ev) => {
        onChange({
          type: "background-attribute",
          data: {
            ...value?.data,
            attributeID1: value?.data.attributeID1!,
            attributeID2: value?.data.attributeID2!,
            attributeID3: ev.target.value,
          }
        })
      }} options={
        ATTRIBUTE_IDS
          .filter(attributeID => choice.data.condition === undefined || choice.data.condition(attributeID, character))
          .filter(attributeID => attributeID !== value?.data.attributeID1 || attributeID !== value?.data.attributeID2)
          .map(attributeID => ({
          label: `${ATTRIBUTES[attributeID].label} (${attr2[attributeID]} ⇒ ${attr2[attributeID] + 1})`,
          value: attributeID,
        }))
      } />
    </FieldSet>
  );
}