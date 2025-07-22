import {DropdownField} from "@/lib/components/DropdownField";
import {REPOSITORY} from "@/model/source/index";
import {Character} from "@/model/character/Character";
import {useEffect} from "react";
import {ItemChoice} from "@/model/character/level/item/ItemChoice";
import {ItemDecision} from "@/model/character/level/item/ItemDecision";
import {FieldSet} from "@/lib/components/FieldSet";
import {ChoicesField} from "@/model/source/choice/ChoicesField";

export function ItemField({value, choice, decision, onChange}: {
  value: Character,
  choice: ItemChoice,
  decision: ItemDecision | undefined,
  onChange: (fn: (value: ItemDecision | undefined) => (ItemDecision | undefined)) => void
}) {
  const VALID_ITEMS = Object.keys(REPOSITORY.ITEMS)
    .filter(itemID => choice.data.condition === undefined || choice.data.condition(itemID, value));
  useEffect(() => {
    if (VALID_ITEMS.length === 1 && VALID_ITEMS[0] !== decision?.data.itemID) {
      onChange(_ => ({type: "item", data: {itemID: VALID_ITEMS[0], decisions: {}}}));
    }
  }, [decision === undefined]);

  const item = decision?.data.itemID ? REPOSITORY.ITEMS[decision.data.itemID] : undefined;

  if (item === undefined || item.choices.length === 0) {
    return <DropdownField disabled={VALID_ITEMS.length === 1} label={choice.data.label ?? "Item"} value={decision?.data.itemID} onChange={ev => onChange(_ => ({type: "item", data: {itemID: ev.value, decisions: {}}}))} options={
      VALID_ITEMS
        .map((itemID) => ({
          value: itemID,
          label: REPOSITORY.ITEMS[itemID].label
        }))
    } />;
  } else {
    return <FieldSet inline>
      <DropdownField disabled={VALID_ITEMS.length === 1} label={choice.data.label ?? "Item"} value={decision?.data.itemID} onChange={ev => onChange(_ => ({type: "item", data: {itemID: ev.value, decisions: {}}}))} options={
        VALID_ITEMS
          .map((itemID) => ({
            value: itemID,
            label: REPOSITORY.ITEMS[itemID].label
          }))
      } />
      {decision?.type === "item" && <ChoicesField value={value} choices={item.choices} decisions={decision.data.decisions} onChange={fn => onChange(prev => {
        if (prev === undefined) return undefined;
        return ({
          ...prev,
          data: {
            ...prev.data,
            decisions: fn(prev.data.decisions)
          }
        })
      })} />}
    </FieldSet>;
  }
}