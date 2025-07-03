import {PHB_SPECIES_AASIMAR} from "./Aasimar";
import {PHB_SPECIES_DRAGONBORN} from "./Dragonborn";
import {PHB_SPECIES_DRAWF} from "./Drawf";
import {PHB_SPECIES_ELF} from "@/model/source/phb/species/Elf";
import {PHB_SPECIES_GNOME} from "@/model/source/phb/species/Gnome";
import {PHB_SPECIES_HUMAN} from "@/model/source/phb/species/Human";
import {PHB_SPECIES_GOLIATH} from "@/model/source/phb/species/Goliath";
import {PHB_SPECIES_ORC} from "@/model/source/phb/species/Orc";
import {Species, SpeciesID} from "@/model/source/model/Species";
import {PHB_SPECIES_HALFLING} from "@/model/source/phb/species/Halfling";
import {PHB_SPECIES_TIEFLING} from "@/model/source/phb/species/Tiefling";

export default {
  "Aasimar": PHB_SPECIES_AASIMAR,
  "Dragonborn": PHB_SPECIES_DRAGONBORN,
  "Drawf": PHB_SPECIES_DRAWF,
  "Elf": PHB_SPECIES_ELF,
  "Gnome": PHB_SPECIES_GNOME,
  "Goliath": PHB_SPECIES_GOLIATH,
  "Halfling": PHB_SPECIES_HALFLING,
  "Human": PHB_SPECIES_HUMAN,
  "Orc": PHB_SPECIES_ORC,
  "Tiefling": PHB_SPECIES_TIEFLING
} as const satisfies {[speciesID: SpeciesID]: Species};
