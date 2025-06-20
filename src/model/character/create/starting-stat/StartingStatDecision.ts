export type StartingStatDecision = {
  type: "starting-stat";
  data: {
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
  }
};