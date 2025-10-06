import {DropdownField} from "@/lib/components/DropdownField";
import {REPOSITORY} from "@/model/source/index";
import {Character} from "@/model/character/Character";
import React from "react";
import {FieldSet} from "@/lib/components/FieldSet";
import {ChoicesField} from "@/model/source/choice/ChoicesField";
import {ItemReplacementChoice} from "@/model/character/level/item-replace/ItemReplacementChoice";
import {ItemReplacementDecision} from "@/model/character/level/item-replace/ItemReplacementDecision";
import {CheckboxField} from "@/lib/components/CheckboxField";
import {ITEM_RARITIES, ITEM_TIERS} from "@/model/source/model/Item";

export function ItemReplacementField({value, choice, decision, onChange}: {
  value: Character,
  choice: ItemReplacementChoice,
  decision: ItemReplacementDecision | undefined,
  onChange: (fn: (value: ItemReplacementDecision | undefined) => (ItemReplacementDecision | undefined)) => void
}) {
  const VALID_ITEMS_TO_REPLACE = value.items.map(item => item.itemID)
    .filter(itemID => choice.data.condition === undefined || choice.data.condition(itemID, value))
    .sort((a,b) => REPOSITORY.ITEMS[a].label.localeCompare(REPOSITORY.ITEMS[b].label));
  const required = choice.data.required?.(undefined, value) ?? true;

  const replaceItem = decision?.data.itemID ? REPOSITORY.ITEMS[decision.data.itemID] : undefined;
  const VALID_REPLACEMENT_ITEMS = Object.keys(REPOSITORY.ITEMS)
    .filter(item => REPOSITORY.ITEMS[item].rarity === replaceItem?.rarity && REPOSITORY.ITEMS[item].tier === replaceItem?.tier)
    .filter(itemID => choice.data.condition === undefined || choice.data.condition(itemID, value))
    .sort((a,b) => REPOSITORY.ITEMS[a].label.localeCompare(REPOSITORY.ITEMS[b].label));


  const itemCategories = ITEM_RARITIES.flatMap(rarity => {
    return ITEM_TIERS.map(tier => {
      return [rarity, tier]
    })
  });

  return <FieldSet inline>
    {!required && <FieldSet inline>
      <CheckboxField label={choice.data.label ?? "Replace Spell"} checked={decision !== undefined} onChange={(checked) => {
        onChange(_ => checked ? ({type: "item-replacement", data: {replaceItemID: VALID_ITEMS_TO_REPLACE[0], itemID: VALID_ITEMS_TO_REPLACE[0], decisions: {}}}) : undefined)
      }} />
    </FieldSet>}

    {(required || decision !== undefined) && <FieldSet inline>
      <DropdownField
        disabled={VALID_ITEMS_TO_REPLACE.length === 1}
        label={choice.data.label ?? "Item Replacement"}
        value={decision?.data.replaceItemID}
        onChange={ev => {
          const value = typeof ev.value === "string" ? ev.value : ev.value.value;
          if (value === undefined) return;
          else onChange(prev => {
            if (!prev) return ({type: "item-replacement", data: {replaceItemID: value, itemID: value, decisions: {}}});
            return ({type: "item-replacement", data: {...prev.data, replaceItemID: value, itemID: value, decisions: {}}});
          });
        }}
        optionGroupLabel={"label"}
        optionGroupChildren={"items"}
        options={
          itemCategories
          .filter(([rarity, tier]) => VALID_ITEMS_TO_REPLACE.some(item => REPOSITORY.ITEMS[item].rarity === rarity && REPOSITORY.ITEMS[item].tier === tier))
          .map(([rarity, tier]) => {
            return ({
              label: `${tier} ${rarity}`,
              items: VALID_ITEMS_TO_REPLACE
                .filter(itemID => REPOSITORY.ITEMS[itemID].rarity === rarity && REPOSITORY.ITEMS[itemID].tier === tier)
                .map(itemID => ({
                  value: itemID,
                  label: REPOSITORY.ITEMS[itemID].label
                }))
            })
          })
        } />
      <DropdownField
        disabled={VALID_REPLACEMENT_ITEMS.length === 1}
        label={"Item"}
        value={decision?.data.itemID}
        onChange={ev => {
          const value = typeof ev.value === "string" ? ev.value : ev.value.value;
          if (value === undefined) return;
          else onChange(prev => {
            if (prev)
              return ({type: "item-replacement", data: {...prev.data, itemID: value, decisions: {}}});
            return undefined;
          });
        }}
        options={VALID_REPLACEMENT_ITEMS
          .map((itemID) => ({
            value: itemID,
            label: REPOSITORY.ITEMS[itemID].label
          }))} />
      {decision?.type === "item-replacement" && <ChoicesField value={value} choices={replaceItem.choices} decisions={decision.data.decisions} onChange={fn => onChange(prev => {
        if (prev === undefined) return undefined;
        return ({
          ...prev,
          data: {
            ...prev.data,
            decisions: fn(prev.data.decisions)
          }
        })
      })} />}
    </FieldSet>}
  </FieldSet>;
}