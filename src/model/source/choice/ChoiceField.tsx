import {Choice} from "@/model/source/choice/Choice";
import {Decision} from "@/model/source/choice/Decision";
import {Field} from "@/lib/components/Field";
import {FieldLabel} from "@/lib/components/FieldLabel";
import {SimpleField} from "@/model/source/choice/simple/SimpleField";
import {SkillField} from "@/model/source/choice/skill/SkillField";
import {Character} from "@/model/character/Character";
import {FeatField} from "@/model/source/choice/feat/FeatField";
import {ToolField} from "@/model/source/choice/tool/ToolField";
import {AttributeField} from "@/model/source/choice/attribute/AttributeField";
import {SpellField} from "@/model/source/choice/spell/SpellField";
import {BackgroundAttributeField} from "@/model/character/create/background/background-attribute/BackgroundAttributeField";
import {SkillOrToolField} from "@/model/source/choice/skill-or-tool/SkillOrToolField";
import {SpellReplacementFields} from "@/model/source/choice/spell-replacement/SpellReplacementField";
import {ExpertiseField} from "@/model/source/choice/expertise/ExpertiseField";
import {MetamagicField} from "@/model/source/choice/metamagic/MetamagicField";

export function ChoiceField({character, choice, decision, onChange}: {character: Character, choice: Choice, decision: Decision | undefined, onChange: (value: Decision | undefined) => void}) {
  if (choice.data.enabled && !choice.data.enabled(undefined, character)) return <></>

  if (choice.type === "attribute" && (decision === undefined || decision?.type === "attribute")) {
    return <AttributeField character={character} choice={choice} decision={decision} onChange={onChange} />
  } else if (choice.type === "background-attribute" && (decision === undefined || decision?.type === "background-attribute")) {
    return <BackgroundAttributeField character={character} choice={choice} value={decision} onChange={onChange} />
  } else if (choice.type === "simple" && (decision === undefined || decision.type === "simple")) {
    return <SimpleField choice={choice} value={decision} onChange={onChange}/>
  } else if (choice.type === "expertise" && (decision === undefined || decision.type === "expertise")) {
    return <ExpertiseField value={character} choice={choice} decision={decision} onChange={onChange} />
  } else if (choice.type === "feat" && (decision === undefined || decision.type === "feat")) {
    return <FeatField character={character} choice={choice} value={decision} onChange={onChange} />
  } else if (choice.type === "metamagic" && (decision === undefined || decision.type === "metamagic")) {
    return <MetamagicField value={character} choice={choice} decision={decision} onChange={onChange} />
  } else if (choice.type === "skill" && (decision === undefined || decision.type === "skill")) {
    return <SkillField character={character} choice={choice} value={decision} onChange={onChange}/>
  } else if (choice.type === "skill-or-tool" && (decision === undefined || decision?.type === "skill-or-tool")) {
    return <SkillOrToolField character={character} choice={choice} decision={decision} onChange={onChange} />
  } else if (choice.type === "spell" && (decision === undefined || decision.type === "spell")) {
    return <SpellField character={character} choice={choice} value={decision} onChange={onChange}/>
  } else if (choice.type === "spell-replacement" && (decision === undefined || decision?.type === "spell-replacement")) {
    return <SpellReplacementFields value={character} choice={choice} decision={decision} onChange={(fn) => onChange(fn(decision))} />
  } else if (choice.type === "tool" && (decision === undefined || decision.type === "tool")) {
    return <ToolField character={character} choice={choice} value={decision} onChange={onChange} />
  }

  return <Field>
    <FieldLabel>Unknown Choice: {choice.type}</FieldLabel>
  </Field>
}