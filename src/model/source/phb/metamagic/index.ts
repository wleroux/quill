import {Metamagic, MetamagicID} from "@/model/source/model/Metamagic";

export default {
  "careful spell": {
    label: "Careful Spell",
    choices: []
  },
  "distant spell": {
    label: "Distant Spell",
    choices: []
  },
  "empowered spell": {
    label: "Empowered Spell",
    choices: []
  },
  "extended spell": {
    label: "Extended Spell",
    choices: []
  },
  "heightened spell": {
    label: "Heightened Spell",
    choices: []
  },
  "quickened spell": {
    label: "Quickened Spell",
    choices: []
  },
  "seeking spell": {
    label: "Seeking Spell",
    choices: []
  },
  "subtle spell": {
    label: "Subtle Spell",
    choices: []
  },
  "transmuted spell": {
    label: "Transmuted Spell",
    choices: []
  },
  "twinned spell": {
    label: "Twinned Spell",
    choices: []
  },
} as const satisfies {[metamagicID: MetamagicID]: Metamagic};
