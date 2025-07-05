import {ClassID, Level} from "@/model/source/model/Level";
import {is} from "@/model/source/condition/generic/IsCondition";
import {PHB_ROGUE_3, PHB_ROGUE_4} from "./RougeBase";
import {ToolID} from "@/model/source/model/Tool";
import {ItemID} from "@/model/source/model/Item";

const PHB_ROGUE_ASSASSIN_3: Level = {
  replace: "Rogue 2",
  label: "Rogue (Assassin) 3",
  choices: [
    ...PHB_ROGUE_3.choices,
    {type: "tool", data: {
      choiceID: "rogue (assassin)::tool-1",
      condition: is<ToolID>("Disguise Kit")
    }},
    {type: "tool", data: {
      choiceID: "rogue (assassin)::tool-2",
      condition: is<ToolID>("Poisoner's Kit"),
    }},
    {type: "item", data: {
      choiceID: "rogue (assassin)::item-1",
      condition: is<ItemID>("Disguise Kit"),
    }},
    {type: "item", data: {
      choiceID: "rogue (assassin)::item-2",
      condition: is<ItemID>("Poisoner's Kit"),
    }}
  ]
} as const;
const PHB_ROGUE_ASSASSIN_4: Level = {
  replace: "Rogue (Assassin) 3",
  label: "Rogue (Assassin) 4",
  choices: [
    ...PHB_ROGUE_4.choices
  ]
} as const;

export default {
  [PHB_ROGUE_ASSASSIN_3.label]: PHB_ROGUE_ASSASSIN_3,
  [PHB_ROGUE_ASSASSIN_4.label]: PHB_ROGUE_ASSASSIN_4
} as const satisfies {[levelID: ClassID]: Level};
