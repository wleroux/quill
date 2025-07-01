import {CommandHandler} from "../CommandHandler";
import {gameMasterStartCommand} from "./GameMasterStartCommand";
import {gameMasterPickCommand} from "./GameMasterPickCommand";
import {gameMasterStopCommand} from "./GameMasterStopCommand";
import {gameMasterAddCommand} from "./GameMasterAddCommand";
import {gameMasterRemoveCommand} from "./GameMasterRemoveCommand";
import {gameMasterInfoCommand} from "./GameMasterInfoCommand";

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
