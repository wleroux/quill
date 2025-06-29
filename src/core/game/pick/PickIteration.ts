import {GameList} from "@/core/game/pick/GameList";

export type GameRange = {
  start: number;
  end: number;
};

const NO_CHANCE = [
  "No.",
  "SOL",
  "Ha. Nice try.",
  "You again?",
  "Wanted Level: ⭐⭐⭐⭐⭐",
  "DENIED.",
  "Zero Chance. Zilch.",
  "Nope... Nope nope nope!",
  "We need to talk.",
  "_awkward...._",
  "Try again next time.",
  "No dice.",
  "Not in a million years.",
  "VIP only.",
  "Skip!",
  "Have we met?",
  "Uh-huh...",
  "Who dis?",
  "Get outta here!",
  "1001",
  "╰(*°▽°*)╯",
  "👈(ﾟヮﾟ👈)",
  "This guy, amirite?",
  "Dude.",
  "🙈",
  "🫣",
  "😏",
  "🤞",
  "ERROR: cannot compute",
  "If we keep meeting, people will get suspicious...",
  "bot rizzer"
];
export function getGameRangeDisplay(range: GameRange) {
  if (range.end < range.start) {
    return NO_CHANCE[Math.floor(Math.random() * NO_CHANCE.length)];
  }
  return `${range.start + 1} - ${range.end + 1}`
}

export type PickIteration = {
  lists: GameList[];
  playerScores: {[playerID: string]: number};
  gameRanges: { [playerID: string]: GameRange },
  roll: number;
  selectedPlayer: string
};
