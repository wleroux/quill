import {ClassID} from "@/model/source/model/Level";
import {Character} from "@/model/character/Character";
import {REPOSITORY} from "@/model/source/index";

export function getAllClassIDs(value: Character): ClassID[] {
  return value.classIDs.flatMap((classID) => {
    const ancestors = [];
    let level = REPOSITORY.CLASSES[classID];
    while (level) {
      ancestors.push(classID);

      classID = level.replace;
      level = REPOSITORY.CLASSES[classID];
    }
    return ancestors;
  });
}

export function neverTaken(classID: ClassID, value: Character): boolean {
  return !getAllClassIDs(value).includes(classID);
}
