import {InteractionHandler} from "@/pages/api/discord/InteractionHandler";
import {gameMasterCommands} from "@/pages/api/discord/gm/GameMasterCommands";
import {GameMasterPickMessageComponentHandler} from "@/pages/api/discord/gm/GameMasterPickMessageComponentHandler";
import {GameMasterAddCharacterMessageComponentHandler} from "@/pages/api/discord/gm/GameMasterAddCharacterMessageComponentHandler";

export const rootCommand = new InteractionHandler(
  [gameMasterCommands],
  [new GameMasterPickMessageComponentHandler(), new GameMasterAddCharacterMessageComponentHandler()]
);
