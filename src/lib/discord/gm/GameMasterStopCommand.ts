import {StringCommandOption, SubcommandHandler} from "../SubcommandHandler";
import {stopGame} from "@/core/game/stopGame";
import {UserRepository} from "@/core/user/UserRepository";
import {userErrorMessage} from "../message/userErrorMessage";
import {simpleEmbedMessage} from "../message/simpleEmbedMessage";
import {GameRepository} from "@/core/game/GameRepository";
import {isGameStatus} from "@/model/game/GameStatus";

const REASON = new StringCommandOption(
  "reason",
  "The reason the game is stopped (default: success)",
  {
    choices: [
      {name: "Success", value: "SUCCESS"},
      {name: "Failure", value: "FAILURE"},
      {name: "Canceled", value: "CANCELED"},
    ],
    required: false
  }
);

export const gameMasterStopCommand = new SubcommandHandler(
  "stop",
  "Stops the current game",
  [REASON],
  async (request, context) => {
    const userID = context.member!.user.id;
    const reason = REASON.get(request);
    if (!isGameStatus(reason)) throw new Error("Invalid Game Status");
    if (reason === "RUNNING") throw new Error("Invalid Game Status");

    const activeGameID = await UserRepository.getActiveGameID(userID);
    if (activeGameID === undefined) return userErrorMessage("Cannot Stop Game", "There is no active game currently.", context.member!);
    const game = await GameRepository.getGameByID(activeGameID);

    const result = await stopGame(activeGameID, reason);
    if (!result.valid) return userErrorMessage("Cannot Stop Game", "There is no active game currently.", context.member!);

    return simpleEmbedMessage(
      "# Stop Game\n" +
      `Game **${game.name}** stopped: ${reason}`,
      context.member
    );
  }
);
