export type GameStatus = "RUNNING" | "SUCCESS" | "FAILURE" | "CANCELED";
const GAME_STATUS = [
  "RUNNING",
  "SUCCESS",
  "FAILURE",
  "CANCELED"
] as const satisfies GameStatus[];
export function isGameStatus(value: string): value is GameStatus {
  return GAME_STATUS.includes(value as GameStatus);
}
