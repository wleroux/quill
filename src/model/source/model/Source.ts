import {Specie, SpecieID} from "./Specie";
import {Background, BackgroundID} from "./Background";
import {Spell, SpellID} from "./Spell";
import {Feat, FeatID} from "./Feat";
import {Metamagic, MetamagicID} from "./Metamagic";
import {Maneuver, ManeuverID} from "./Maneuver";
import {Tool, ToolID} from "./Tool";
import {Item, ItemID} from "./Item";
import {Level, LevelID} from "@/model/source/model/Level";

export type Source = {
  BACKGROUNDS?: {[backgroundID: BackgroundID]: Background};
  FEATS?: {[featID: FeatID]: Feat};
  ITEMS?: {[itemID: ItemID]: Item};
  LEVELS: {[levelID: LevelID]: Level};
  MANEUVERS?: {[maneuverID: ManeuverID]: Maneuver};
  METAMAGICS?: {[metamagicID: MetamagicID]: Metamagic};
  SPECIES?: {[specieID: SpecieID]: Specie};
  SPELLS?: {[spellID: SpellID]: Spell};
  TOOLS?: {[toolID: ToolID]: Tool};
};
