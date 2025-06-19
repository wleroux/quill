import {Attribute, AttributeID} from "@/model/source/model/Attribute";

export const ATTRIBUTES: {[attribute in AttributeID]: Attribute} = {
  "str": {
    label: "Strength"
  },
  "dex": {
    label: "Dexterity"
  },
  "con": {
    label: "Constitution"
  },
  "int": {
    label: "Intelligence"
  },
  "wis": {
    label: "Wisdom"
  },
  "cha": {
    label: "Charisma"
  }
} as const;
