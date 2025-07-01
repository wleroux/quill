
export function getGameScoreWeight(score: number): number {
  return (score < 10)
    ? 10 - score
    : 1 / (score - 9);
}
