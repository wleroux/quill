import {MetamagicID} from "@/model/source/model/Metamagic";

export type MetamagicReplacementDecision = {
  type: "metamagic-replacement";
  data: {
    sourceID: string;
    metamagicID: MetamagicID;
  }
};
