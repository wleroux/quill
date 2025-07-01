import PHB24 from "./phb/index";

import {Source} from "./model/Source";
import {Tool, ToolID} from "./model/Tool";
import {Background, BackgroundID} from "./model/Background";
import {Feat, FeatID} from "./model/Feat";
import {Item, ItemID} from "./model/Item";
import {ClassID, Level} from "./model/Level";
import {Maneuver, ManeuverID} from "./model/Maneuver";
import {Metamagic, MetamagicID} from "./model/Metamagic";
import {Specie, SpecieID} from "./model/Specie";
import {Spell, SpellID} from "./model/Spell";
import {EldritchInvocation, EldritchInvocationID} from "./model/EldritchInvocation";

const ALL_SOURCES: Source[] = [
  PHB24
] as const;

export const REPOSITORY = {
  BACKGROUNDS: Object.assign({}, ...ALL_SOURCES.map(source => source.BACKGROUNDS).filter(Boolean)) satisfies {[backgroundID: BackgroundID]: Background},
  ELDRITCH_INVOCATIONS: Object.assign({}, ...ALL_SOURCES.map(source => source.ELDRITCH_INVOCATIONS).filter(Boolean)) satisfies {[eldritchInvocationID: EldritchInvocationID]: EldritchInvocation},
  FEATS: Object.assign({}, ...ALL_SOURCES.map(source => source.FEATS).filter(Boolean)) satisfies {[featID: FeatID]: Feat},
  ITEMS: Object.assign({}, ...ALL_SOURCES.map(source => source.ITEMS).filter(Boolean)) satisfies {[itemID: ItemID]: Item},
  CLASSES: Object.assign({}, ...ALL_SOURCES.map(source => source.LEVELS).filter(Boolean)) satisfies {[levelID: ClassID]: Level},
  MANEUVERS: Object.assign({}, ...ALL_SOURCES.map(source => source.MANEUVERS).filter(Boolean)) satisfies {[maneuverID: ManeuverID]: Maneuver},
  METAMAGICS: Object.assign({}, ...ALL_SOURCES.map(source => source.METAMAGICS).filter(Boolean)) satisfies {[metamagicID: MetamagicID]: Metamagic},
  SPECIES: Object.assign({}, ...ALL_SOURCES.map(source => source.SPECIES).filter(Boolean)) satisfies {[specieID: SpecieID]: Specie},
  SPELLS: Object.assign({}, ...ALL_SOURCES.map(source => source.SPELLS).filter(Boolean)) satisfies {[spellID: SpellID]: Spell},
  TOOLS: Object.assign({}, ...ALL_SOURCES.map(source => source.TOOLS).filter(Boolean)) satisfies {[toolID: ToolID]: Tool},
} as const;
