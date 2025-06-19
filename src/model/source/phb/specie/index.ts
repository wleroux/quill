import {PHB_SPECIE_AASIMAR} from "./Aasimar";
import {PHB_SPECIE_DRAGONBORN} from "./Dragonborn";
import {PHB_SPECIE_DRAWF} from "./Drawf";
import {PHB_SPECIE_ELF} from "@/model/source/phb/specie/Elf";
import {PHB_SPECIE_GNOME} from "@/model/source/phb/specie/Gnome";
import {PHB_SPECIE_HUMAN} from "@/model/source/phb/specie/Human";
import {PHB_SPECIE_GOLIATH} from "@/model/source/phb/specie/Goliath";
import {PHB_SPECIE_ORC} from "@/model/source/phb/specie/Orc";
import {Specie, SpecieID} from "@/model/source/model/Specie";
import {PHB_SPECIE_HALFLING} from "@/model/source/phb/specie/Halfling";

export default {
  "Aasimar": PHB_SPECIE_AASIMAR,
  "Dragonborn": PHB_SPECIE_DRAGONBORN,
  "Drawf": PHB_SPECIE_DRAWF,
  "Elf": PHB_SPECIE_ELF,
  "Gnome": PHB_SPECIE_GNOME,
  "Goliath": PHB_SPECIE_GOLIATH,
  "Halfling": PHB_SPECIE_HALFLING,
  "Human": PHB_SPECIE_HUMAN,
  "Orc": PHB_SPECIE_ORC
} as const satisfies {[specieID: SpecieID]: Specie};
