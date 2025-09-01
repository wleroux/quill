"use server";
import {GameRepository} from "@/core/game/GameRepository";
import {getUserID} from "@/lib/authentication/getUserID";
import {MyGamesPage} from "@/app/game-master/my-games/MyGamesPage";

export default async function Page() {
  const userID = (await getUserID())!;
  const games = await GameRepository.getGamesByGameMasterID(userID);
  return <MyGamesPage games={games} />
}
