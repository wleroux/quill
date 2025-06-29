import {GameTier} from "@/model/game/GameTier";
import {Character} from "@/model/character/Character";
import {Snowflake} from "discord-api-types/v10";
import {PlayerID} from "@/model/player/PlayerID";

export type GameList = {
  messageID: Snowflake;
  listMakerID: PlayerID;
  tier: GameTier;
  characters: Character[];
};
