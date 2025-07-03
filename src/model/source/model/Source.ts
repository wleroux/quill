import {Species, SpeciesID} from "./Species";
import {Background, BackgroundID} from "./Background";
import {Spell, SpellID} from "./Spell";
import {Feat, FeatID} from "./Feat";
import {Metamagic, MetamagicID} from "./Metamagic";
import {Maneuver, ManeuverID} from "./Maneuver";
import {Tool, ToolID} from "./Tool";
import {Item, ItemID} from "./Item";
import {ClassID, Level} from "@/model/source/model/Level";
import {EldritchInvocation, EldritchInvocationID} from "@/model/source/model/EldritchInvocation";

export type Source = {
  BACKGROUNDS?: {[backgroundID: BackgroundID]: Background};
  ELDRITCH_INVOCATIONS?: {[eldritchInvocationID: EldritchInvocationID]: EldritchInvocation};
  FEATS?: {[featID: FeatID]: Feat};
  ITEMS?: {[itemID: ItemID]: Item};
  LEVELS: {[levelID: ClassID]: Level};
  MANEUVERS?: {[maneuverID: ManeuverID]: Maneuver};
  METAMAGICS?: {[metamagicID: MetamagicID]: Metamagic};
  SPECIES?: {[specieID: SpeciesID]: Species};
  SPELLS?: {[spellID: SpellID]: Spell};
  TOOLS?: {[toolID: ToolID]: Tool};
};
