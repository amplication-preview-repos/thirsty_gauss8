import { Injectable } from "@nestjs/common";
import { DefineValuePropositionInput } from "../conceptAssistant/DefineValuePropositionInput";
import { DefineValuePropositionOutput } from "../conceptAssistant/DefineValuePropositionOutput";
import { RefineConceptInput } from "../conceptAssistant/RefineConceptInput";
import { RefineConceptOutput } from "../conceptAssistant/RefineConceptOutput";
import { SpecifyTargetAudienceInput } from "../conceptAssistant/SpecifyTargetAudienceInput";
import { SpecifyTargetAudienceOutput } from "../conceptAssistant/SpecifyTargetAudienceOutput";

@Injectable()
export class ConceptAssistantService {
  constructor() {}
  async DefineValueProposition(args: DefineValuePropositionInput): Promise<DefineValuePropositionOutput> {
    throw new Error("Not implemented");
  }
  async RefineConcept(args: RefineConceptInput): Promise<RefineConceptOutput> {
    throw new Error("Not implemented");
  }
  async SpecifyTargetAudience(args: SpecifyTargetAudienceInput): Promise<SpecifyTargetAudienceOutput> {
    throw new Error("Not implemented");
  }
}
