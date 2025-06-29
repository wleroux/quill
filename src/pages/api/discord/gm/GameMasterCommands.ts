import {gameMasterStartCommand} from "@/pages/api/discord/gm/GameMasterStartCommand";
import {CommandHandler} from "@/pages/api/discord/CommandHandler";
import {gameMasterPickCommand} from "@/pages/api/discord/gm/GameMasterPickCommand";
import {gameMasterStopCommand} from "@/pages/api/discord/gm/GameMasterStopCommand";
import {gameMasterAddCommand} from "@/pages/api/discord/gm/GameMasterAddCommand";
import {gameMasterRemoveCommand} from "@/pages/api/discord/gm/GameMasterRemoveCommand";
import {gameMasterInfoCommand} from "@/pages/api/discord/gm/GameMasterInfoCommand";

export const gameMasterCommands = new CommandHandler(
  "gm",
  "Commands for Game Masters",
  gameMasterPickCommand,
  gameMasterStartCommand,
  gameMasterStopCommand,
  gameMasterAddCommand,
  gameMasterRemoveCommand,
  gameMasterInfoCommand
);
