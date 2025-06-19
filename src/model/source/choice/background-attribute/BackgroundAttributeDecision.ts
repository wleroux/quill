import {AttributeID} from "@/model/source/model/Attribute";

export type BackgroundAttributeDecision = {
  type: "background-attribute",
  data: {
    attributeID1: AttributeID;
    attributeID2: AttributeID;
    attributeID3: AttributeID;
  }
}
