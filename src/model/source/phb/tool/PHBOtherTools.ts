import {Tool, ToolID} from "@/model/source/model/Tool";
import { is } from "../../condition/generic/IsCondition";

export const PHB_DISGUISE_KIT: Tool = {
  label: "Disguise Kit",
  type: undefined,
  choices: [
    {type: "item", data: {choiceID: "tool::item-1", condition: is("Disguise Kit")}}
  ]
};
export const PHB_FORGERY_KIT: Tool = {
  label: "Forgery Kit",
  type: undefined,
  choices: [
    {type: "item", data: {choiceID: "tool::item-1", condition: is("Forgery Kit")}}
  ]
};
export const PHB_HERBALISM_KIT: Tool = {
  label: "Herbalism Kit",
  type: undefined,
  choices: [
    {type: "item", data: {choiceID: "tool::item-1", condition: is("Herbalism Kit")}}
  ]
};
export const PHB_NAVIGATORS_TOOLS: Tool = {
  label: "Navigator's Tools",
  type: undefined,
  choices: [
    {type: "item", data: {choiceID: "tool::item-1", condition: is("Navigator's Tools")}}
  ]
};
export const PHB_POISONERS_KIT: Tool = {
  label: "Poisoner's Kit",
  type: undefined,
  choices: [
    {type: "item", data: {choiceID: "tool::item-1", condition: is("Poisoner's Kit")}}
  ]
};
export const PHB_THIEVES_TOOLS: Tool = {
  label: "Thieves' Tools",
  type: undefined,
  choices: [
    {type: "item", data: {choiceID: "tool::item-1", condition: is("Thieves' Tools")}}
  ]
};

export const PHB_OTHER_TOOLS: {[toolID: ToolID]: Tool} = {
  "Disguise Kit": PHB_DISGUISE_KIT,
  "Forgery Kit": PHB_FORGERY_KIT,
  "Herbalism Kit": PHB_HERBALISM_KIT,
  "Navigator's Tools": PHB_NAVIGATORS_TOOLS,
  "Poisoner's Kit": PHB_POISONERS_KIT,
  "Thieves' Tools": PHB_THIEVES_TOOLS
} as const;
