import {DropdownField} from "@/lib/components/DropdownField";
import {LanguageDecision} from "@/model/source/choice/language/LanguageDecision";
import {LanguageChoice} from "@/model/source/choice/language/LanguageChoice";
import {REPOSITORY} from "@/model/source/index";
import {Character} from "@/model/character/Character";
import {useEffect} from "react";

export function LanguageField({value, choice, decision, onChange}: {
  value: Character,
  choice: LanguageChoice,
  decision: LanguageDecision | undefined,
  onChange: (fn: (value: LanguageDecision | undefined) => LanguageDecision | undefined) => void}) {
  const VALID_LANGUAGES = Object.keys(REPOSITORY.LANGUAGES)
    .filter(languageID => !(value.languages ?? []).includes(languageID))
    .filter(languageID => choice.data.condition === undefined || choice.data.condition(languageID, value))
  useEffect(() => {
    if (VALID_LANGUAGES.length === 1 && decision?.data.languageID !== VALID_LANGUAGES[0]) {
      onChange(_ => ({type: "language", data: {languageID: VALID_LANGUAGES[0], decisions: {}}}));
    }
  }, [decision === undefined]);

  return <DropdownField
    disabled={VALID_LANGUAGES.length === 0 || VALID_LANGUAGES.length === 1 && VALID_LANGUAGES[0] === decision?.data.languageID}
    label={choice.data.label ?? "Language"}
    value={decision?.data.languageID}
    options={VALID_LANGUAGES
      .map(languageID => ({value: languageID, label: REPOSITORY.LANGUAGES[languageID].label}))
      .sort((a, b) => a.label.localeCompare(b.label))
    }
    onChange={ev => onChange(_ => ({type: "language", data: {
      languageID: ev.target.value,
      decisions: {}
    }}))} />
}