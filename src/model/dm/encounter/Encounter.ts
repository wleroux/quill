import {CreatureID} from "@/model/dm/creature/Creature";

export type EncounterID = string;
export type Encounter = {
  label: string;
  creatures: {
    creatureID: CreatureID;
    quantity: number;
  }[]
};
