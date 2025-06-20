import {Character} from "@/model/character/Character";
import {AttributeChoice} from "@/model/source/choice/attribute/AttributeChoice";
import {AttributeDecision} from "@/model/source/choice/attribute/AttributeDecision";
import {DropdownField} from "@/lib/components/DropdownField";
import {ATTRIBUTE_IDS} from "@/model/source/model/Attribute";
import {ATTRIBUTES} from "@/model/source/Attribute";

export function AttributeField({character, choice, decision, onChange}: {
  character: Character;
  choice: AttributeChoice;
  decision: AttributeDecision | undefined;
  onChange: (value: AttributeDecision | undefined) => void;
}) {
  const VALID_ATTRIBUTE_IDS = ATTRIBUTE_IDS
    .filter(attributeID => character.stats[attributeID] < 20)
    .filter(attributeID => choice.data.condition == undefined || choice.data.condition(attributeID, character));

  return <DropdownField label="Attribute" value={decision?.data.attributeID} options={VALID_ATTRIBUTE_IDS.map(attributeID => ({
      label: ATTRIBUTES[attributeID].label,
      value: attributeID
    }))} onChange={value => {
      onChange({
        type: "attribute",
        data: {
          attributeID: value.target.value
        }
      })
    }} />
}
