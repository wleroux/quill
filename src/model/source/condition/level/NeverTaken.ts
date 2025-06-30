import {ClassID} from "@/model/source/model/Level";
import {Character} from "@/model/character/Character";
import {REPOSITORY} from "@/model/source/index";

function getAncestorLevels(levelID: ClassID): ClassID[] {
  const ancestors = [];
  let level = REPOSITORY.CLASSES[levelID];
  while (level) {
    ancestors.push(levelID);

    levelID = level.replace;
    level = REPOSITORY.CLASSES[levelID];
    if (ancestors.includes(levelID)) break;
  }
  return ancestors;
}

export function neverTaken(levelID: ClassID, value: Character): boolean {
  return !value.levels.flatMap(levelID => getAncestorLevels(levelID)).includes(levelID);
}
