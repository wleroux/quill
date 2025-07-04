import {DropdownField} from "@/lib/components/DropdownField";
import {ManeuverDecision} from "@/model/source/choice/maneuver/ManeuverDecision";
import {ManeuverChoice} from "@/model/source/choice/maneuver/ManeuverChoice";
import {Character} from "@/model/character/Character";
import {useEffect} from "react";
import {REPOSITORY} from "@/model/source/index";

export function ManeuverField({value, choice, decision, onChange}: {value: Character, choice: ManeuverChoice, decision: ManeuverDecision | undefined, onChange: (value: ManeuverDecision | undefined) => void}) {
  const VALID_MANEUVERS = Object.keys(REPOSITORY.MANEUVERS)
    .filter(maneuverID => !Object.values(value.maneuvers).includes(maneuverID))
    .filter(maneuverID => choice.data.condition === undefined || choice.data.condition(maneuverID, value));
  useEffect(() => {
    if (decision === undefined && VALID_MANEUVERS.length === 1) {
      onChange({type: "maneuver", data: {maneuverID: VALID_MANEUVERS[0]}})
    }
  }, [decision === undefined])

  return <DropdownField
    disabled={VALID_MANEUVERS.length === 0 || VALID_MANEUVERS.length === 1 && VALID_MANEUVERS[0] === decision?.data.maneuverID}
    label={choice.data.label ?? "Maneuver"}
    value={decision?.data.maneuverID}
    options={VALID_MANEUVERS
      .map((maneuverID) => ({
        value: maneuverID,
        label: REPOSITORY.MANEUVERS[maneuverID].label ?? maneuverID
      }))}
  onChange={ev => onChange({type: "maneuver", data: {maneuverID: ev.target.value}})} />
}
