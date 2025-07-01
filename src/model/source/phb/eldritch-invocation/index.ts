import {EldritchInvocation, EldritchInvocationID} from "../../model/EldritchInvocation";
import {Condition} from "@/model/source/condition/Condition";
import {featType} from "@/model/source/condition/feat/FeatTypeCondition";
import {all} from "@/model/source/condition/generic/AllCondition";
import {SpellID} from "@/model/source/model/Spell";

const hasLevel = (classID: string): Condition<undefined> => (_, character) => character.levels.some(level => level.classID === classID);
const hasSpell = (spellID: SpellID): Condition<undefined> => (_, character) => Object.values(character.spells).includes(spellID);

// TODO: Determine which spells apply to these
const AGONIZING_BLAST = Object.fromEntries([
  "Eldritch Blast",
].map((cantripID): [EldritchInvocationID, EldritchInvocation] => {
  return [`Agonizing Blast (${cantripID})`, {
    label: `Agonizing Blast (${cantripID})`,
    prerequisite: all(hasLevel("Warlock 2"), hasSpell(cantripID)),
    choices: []
  }]
}));

const ELDRITCH_SPEAR = Object.fromEntries([
  "Eldritch Blast"
].map((cantripID): [EldritchInvocationID, EldritchInvocation] => {
  return [`Eldritch Spear (${cantripID})`, {
    label: `Eldritch Spear (${cantripID})`,
    prerequisite: all(hasLevel("Warlock 2"), hasSpell(cantripID)),
    choices: []
  }]
}));

const REPELLING_BLAST = Object.fromEntries([
  "Eldritch Blast"
].map((cantripID): [EldritchInvocationID, EldritchInvocation] => {
  return [`Repelling Blast (${cantripID})`, {
    label: `Repelling Blast (${cantripID})`,
    prerequisite: all(hasLevel("Warlock 2"), hasSpell(cantripID)),
    choices: []
  }]
}));

export default {
  "Armor of Shadows": {
    label: "Armor of Shadows",
    choices: []
  },
  "Eldritch Mind": {
    label: "Eldritch Mind",
    choices: []
  },
  "Pact of the Blade": {
    label: "Pact of the Blade",
    choices: []
  },
  "Pact of the Chain": {
    label: "Pact of the Chain",
    choices: []
  },
  "Pact of the Tome": {
    label: "Pact of the Tome",
    choices: []
  },
  ...AGONIZING_BLAST,
  "Devil's Sight": {
    label: "Devil's Sight",
    prerequisite: hasLevel("Warlock 2"),
    choices: []
  },
  ...ELDRITCH_SPEAR,
  "Fiendish Vigor": {
    label: "Fiendish Vigor",
    prerequisite: hasLevel("Warlock 2"),
    choices: []
  },
  "Lessons of the First Ones": {
    label: "Lessons of the First Ones",
    prerequisite: hasLevel("Warlock 2"),
    choices: [
      {type: "feat", data: {
        label: "Origin Feat",
        choiceID: "edritch-invocation::lessons-of-the-first-ones::feat-1",
        condition: featType("origin")
      }}
    ]
  },
  "Mask of Many Faces": {
    label: "Mask of Many Faces",
    prerequisite: hasLevel("Warlock 2"),
    choices: []
  },
  "Misty Visions": {
    label: "Misty Visions",
    prerequisite: hasLevel("Warlock 2"),
    choices: []
  },
  "Otherworldly Leap": {
    label: "Otherworldly Leap",
    prerequisite: hasLevel("Warlock 2"),
    choices: []
  },
  ...REPELLING_BLAST
} as const satisfies {[eldritchInvocationID: EldritchInvocationID]: EldritchInvocation};
