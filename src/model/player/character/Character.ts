import {FeatID} from "@/model/source/model/Feat";
import {SkillID} from "@/model/source/model/Skill";
import {MetamagicID} from "@/model/source/model/Metamagic";
import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {SpellID} from "@/model/source/model/Spell";
import {ToolID} from "@/model/source/model/Tool";
import {AttributeID} from "@/model/source/model/Attribute";
import {LevelID} from "@/model/source/model/Level";

export type Character = {
  name: string;
  level: number;
  xp: number;
  stats: {[attributeID in AttributeID]: number};
  choices: {[choiceID: ChoiceID]: string};
  expertise: SkillID[];
  feats: FeatID[];
  levels: LevelID[];
  metamagics: MetamagicID[];
  skills: SkillID[];
  spells: {
    [choiceID: ChoiceID]: SpellID;
  };
  tools: ToolID[];
};

export const DEFAULT_CHARACTER: Character = {
  name: "Unknown",
  level: 0,
  xp: 0,
  stats: {
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10
  },
  choices: {},
  expertise: [],
  feats: [],
  levels: [],
  metamagics: [],
  skills: [],
  spells: {},
  tools: [],
};

/*
Okay... So we got the name,starting stats,background,species working...

But we are still missing levels.

The issue here is that levels is not something you can "just get"... So it doesn't belong in the standard character creation.

I _would_ like to include the character leveling as part of character creation..

For that, I need a new concept though.

It comes down to... How do I want to do XP?

-> Every game you play gains you 1 XP. When you reach a certain amount of XP, you can use that to level up. When you level up, your XP is reset back to 0.

This basically allows for slow-mode without actual toggles. When you are ready to level up, you level up!

You cannot level up if you are currently in a game... And you cannot join a gain if you aren't the right level.

--- We have "Character"... And CharacterDecisions...

The issue with XP resetting is... I cannot allow for "multiple level ups"...

What I can do instead is: You gain 1 XP, up to Y XP is you are playing Y games...

For instance, Initiate would only allow you to reach XP 14... playing more initiate games does not net you more than 14 XP.


One of the interesting aspects about this particular style is... I can "regress" a character to a point in time. For instance, the point that a level up was decided. The character would effectively be "frozen" at that decision point.

Character Choices are thus... Dynamic. You can always "decide" more.

addCharacterChoice(
  choice,
  decision
)

is the choice allowed?

New Choice:

game played...

Allowed to be added by DMs / the system.

Level Up

Allowed to be added by players (if it doesn't tier them out / not in a game / have enough XP)


*/