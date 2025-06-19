import {FieldRow} from "@/lib/components/FieldRow";
import {CheckboxField} from "@/lib/components/CheckboxField";
import React, {useState} from "react";
import {MetamagicReplacementChoice} from "@/model/source/choice/metamagic-replacement/MetamagicReplacementChoice";
import {MetamagicReplacementDecision} from "@/model/source/choice/metamagic-replacement/MetamagicReplacementDecision";

export function MetamagicReplacementFields({choice, value, onChange}: {choice: MetamagicReplacementChoice, value?: MetamagicReplacementDecision, onChange: (value?: MetamagicReplacementDecision) => void}) {
  const [temp, setTemp] = useState<Partial<MetamagicReplacementDecision> | undefined>(value);

  return <>
    <FieldRow>
      <CheckboxField label="Replace Metamagic" checked={temp !== undefined} onChange={(ev) => {
        // setTemp(ev ? {from: undefined, to: undefined} : undefined);
      }} />
    </FieldRow>
    {temp !== undefined && <FieldRow>
        {/*<MetamagicField label="Replace Metamagic" value={temp.from} onChange={from => setTemp({...temp, from})} />*/}
        {/*<MetamagicField label="With" value={temp.from} onChange={from => setTemp({...temp, from})} />*/}
    </FieldRow>}
  </>
}