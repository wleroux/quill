import {LevelID} from "@/model/source/model/Level";
import {Character} from "@/model/player/character/Character";
import {REPOSITORY} from "@/model/source/index";

function getAncestorLevels(levelID: LevelID): LevelID[] {
  const ancestors = [];
  let level = REPOSITORY.LEVELS[levelID];
  while (level) {
    ancestors.push(levelID);

    levelID = level.replace;
    level = REPOSITORY.LEVELS[levelID];
    if (ancestors.includes(levelID)) break;
  }
  return ancestors;
}

export function neverTaken(levelID: LevelID, value: Character): boolean {
  return !value.levels.flatMap(levelID => getAncestorLevels(levelID)).includes(levelID);
}
