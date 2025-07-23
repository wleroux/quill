import {LanguageID} from "@/model/source/model/Language";

export type LanguageDecision = {
  type: "language";
  data: {
    languageID: LanguageID;
  }
};
