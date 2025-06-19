import {AttributeID} from "@/model/source/model/Attribute";

export type AttributeDecision = {
  type: "attribute",
  data: {
    attributeID: AttributeID;
  }
};
