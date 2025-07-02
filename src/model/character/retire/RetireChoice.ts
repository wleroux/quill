export const DefaultRetireChoice: RetireChoice = {
  type: "retire",
  data: {
    choiceID: "retire"
  }
};

export type RetireChoice = {
  type: "retire",
  data: {
    choiceID: string;
  }
};
