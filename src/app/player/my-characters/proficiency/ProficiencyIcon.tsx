import {ExpertiseIcon} from "@/app/player/my-characters/proficiency/ExpertiseIcon";
import {ProficientIcon} from "@/app/player/my-characters/proficiency/ProficientIcon";
import {UntrainedIcon} from "@/app/player/my-characters/proficiency/UntrainedIcon";

export function ProficiencyIcon({value}: {
  value: "untrained" | "proficient" | "expertise";
}) {
  if (value === "untrained") return <UntrainedIcon />
  else if (value === "proficient") return <ProficientIcon />
  else return <ExpertiseIcon/>
}
