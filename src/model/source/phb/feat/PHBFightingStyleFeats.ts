import {Feat, FeatID} from "../../model/Feat";

const PHB_FEAT_ARCHERY: Feat = {
  label: "Archery",
  category: "fighting style",
  choices: []
};
const PHB_FEAT_BLIND_FIGHTING: Feat = {
  label: "Blind Fighting",
  category: "fighting style",
  choices: []
};
const PHB_FEAT_DEFENSE: Feat = {
  label: "Defense",
  category: "fighting style",
  choices: []
};
const PHB_FEAT_DUELING: Feat = {
  label: "Dueling",
  category: "fighting style",
  choices: []
};
const PHB_FEAT_GREAT_WEAPON_FIGHTING: Feat = {
  label: "Great Weapon Fighting",
  category: "fighting style",
  choices: []
};
const PHB_FEAT_INTERCEPTION: Feat = {
  label: "Interception",
  category: "fighting style",
  choices: []
};
const PHB_FEAT_PROTECTION: Feat = {
  label: "Protection",
  category: "fighting style",
  choices: []
};
const PHB_FEAT_THROWN_WEAPON_FIGHTING: Feat = {
  label: "Thrown Weapon Fighting",
  category: "fighting style",
  choices: []
};
const PHB_FEAT_TWO_WEAPON_FIGHTING: Feat = {
  label: "Two-Weapon Fighting",
  category: "fighting style",
  choices: []
};
const PHB_FEAT_UNARMED_FIGHTING: Feat = {
  label: "Unarmed Fighting",
  category: "fighting style",
  choices: []
};

export default {
  "Archery": PHB_FEAT_ARCHERY,
  "Blind Fighting": PHB_FEAT_BLIND_FIGHTING,
  "Defense": PHB_FEAT_DEFENSE,
  "Dueling": PHB_FEAT_DUELING,
  "Great Weapon Fighting": PHB_FEAT_GREAT_WEAPON_FIGHTING,
  "Interception": PHB_FEAT_INTERCEPTION,
  "Protection": PHB_FEAT_PROTECTION,
  "Thrown Weapon Fighting": PHB_FEAT_THROWN_WEAPON_FIGHTING,
  "Two-Weapon Fighting": PHB_FEAT_TWO_WEAPON_FIGHTING,
  "Unarmed Fighting": PHB_FEAT_UNARMED_FIGHTING
} as const satisfies {[featID: FeatID]: Feat};
