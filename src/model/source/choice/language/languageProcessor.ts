import {Processor, ProcessorError} from "@/model/processor/Processor";
import {LanguageChoice} from "@/model/source/choice/language/LanguageChoice";
import {LanguageDecision} from "@/model/source/choice/language/LanguageDecision";
import {ErrorResult, ValidResult} from "@/model/processor/Result";
import {REPOSITORY} from "@/model/source/index";

export const languageProcessor: Processor<LanguageChoice, LanguageDecision | undefined> = (value, choice, decision) => {
  // VALIDATE ENABLED
  if (choice.data.enabled && !choice.data.enabled(undefined, value))
    return ValidResult.of(value);

  if (decision === undefined) {
    if (choice.data.required && !choice.data.required(undefined, value))
      return ValidResult.of(value);
    return ErrorResult.of([new ProcessorError("REQUIRED", [choice.data.choiceID], choice, decision)]);
  } else {
    if (choice.data.condition && !choice.data.condition(decision.data.languageID, value))
      return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);
    if (value.languages?.includes(decision.data.languageID) ?? false)
      return ErrorResult.of([new ProcessorError("ALREADY HAS LANGUAGE", [choice.data.choiceID], choice, decision)]);
    const language = REPOSITORY.LANGUAGES[decision.data.languageID];
    if (!language) return ErrorResult.of([new ProcessorError("UNKNOWN LANGUAGE", [choice.data.choiceID], choice, decision)]);

    return ValidResult.of({
      ...value,
      languages: [
        ...(value.languages ?? []),
        decision.data.languageID
      ]
    });
  }
}
