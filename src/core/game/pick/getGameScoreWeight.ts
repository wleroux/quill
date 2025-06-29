
export function getGameScoreWeight(score: number): number {
  return (score < 90)
    ? 10 - (score / 10)
    : 1 / ((score/10) - 9 + 1);
}
