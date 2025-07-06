import {AttributeID} from "@/model/source/model/Attribute";

export type SavingThrowDecision = {
  type: "saving-throw";
  data: {
    attributeID: AttributeID;
  }
};