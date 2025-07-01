import {InteractionHandler} from "./InteractionHandler";
import {gameMasterCommands} from "./gm/GameMasterCommands";
import {GameMasterPickMessageComponentHandler} from "./gm/GameMasterPickMessageComponentHandler";
import {GameMasterAddCharacterMessageComponentHandler} from "./gm/GameMasterAddCharacterMessageComponentHandler";

export const rootCommand = new InteractionHandler(
  [gameMasterCommands],
  [new GameMasterPickMessageComponentHandler(), new GameMasterAddCharacterMessageComponentHandler()]
);
