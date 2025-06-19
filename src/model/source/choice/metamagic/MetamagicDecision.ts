import {MetamagicID} from "@/model/source/model/Metamagic";

export type MetamagicDecision = {
  type: "metamagic";
  data: {
    metamagicID: MetamagicID;
  }
};
