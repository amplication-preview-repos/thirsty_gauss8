import * as graphql from "@nestjs/graphql";
import { DefineValuePropositionInput } from "../conceptAssistant/DefineValuePropositionInput";
import { DefineValuePropositionOutput } from "../conceptAssistant/DefineValuePropositionOutput";
import { RefineConceptInput } from "../conceptAssistant/RefineConceptInput";
import { RefineConceptOutput } from "../conceptAssistant/RefineConceptOutput";
import { SpecifyTargetAudienceInput } from "../conceptAssistant/SpecifyTargetAudienceInput";
import { SpecifyTargetAudienceOutput } from "../conceptAssistant/SpecifyTargetAudienceOutput";
import { ConceptAssistantService } from "./conceptassistant.service";

export class ConceptAssistantResolver {
  constructor(protected readonly service: ConceptAssistantService) {}

  @graphql.Mutation(() => DefineValuePropositionOutput)
  async DefineValueProposition(
    @graphql.Args()
    args: DefineValuePropositionInput
  ): Promise<DefineValuePropositionOutput> {
    return this.service.DefineValueProposition(args);
  }

  @graphql.Mutation(() => RefineConceptOutput)
  async RefineConcept(
    @graphql.Args()
    args: RefineConceptInput
  ): Promise<RefineConceptOutput> {
    return this.service.RefineConcept(args);
  }

  @graphql.Mutation(() => SpecifyTargetAudienceOutput)
  async SpecifyTargetAudience(
    @graphql.Args()
    args: SpecifyTargetAudienceInput
  ): Promise<SpecifyTargetAudienceOutput> {
    return this.service.SpecifyTargetAudience(args);
  }
}
