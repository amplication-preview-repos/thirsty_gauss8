import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ConceptAssistantService } from "./conceptassistant.service";
import { SpecifyTargetAudienceInput } from "../conceptAssistant/SpecifyTargetAudienceInput";
import { DefineValuePropositionOutput } from "../conceptAssistant/DefineValuePropositionOutput";
import { RefineConceptOutput } from "../conceptAssistant/RefineConceptOutput";
import { SpecifyTargetAudienceOutput } from "../conceptAssistant/SpecifyTargetAudienceOutput";

@swagger.ApiTags("conceptAssistants")
@common.Controller("conceptAssistants")
export class ConceptAssistantController {
  constructor(protected readonly service: ConceptAssistantService) {}

  @common.Post("/define-value-proposition")
  @swagger.ApiOkResponse({
    type: DefineValuePropositionOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DefineValueProposition(
    @common.Body()
    body: SpecifyTargetAudienceInput
  ): Promise<DefineValuePropositionOutput> {
        return this.service.DefineValueProposition(body);
      }

  @common.Post("/refine-concept")
  @swagger.ApiOkResponse({
    type: RefineConceptOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RefineConcept(
    @common.Body()
    body: SpecifyTargetAudienceInput
  ): Promise<RefineConceptOutput> {
        return this.service.RefineConcept(body);
      }

  @common.Post("/specify-target-audience")
  @swagger.ApiOkResponse({
    type: SpecifyTargetAudienceOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SpecifyTargetAudience(
    @common.Body()
    body: SpecifyTargetAudienceInput
  ): Promise<SpecifyTargetAudienceOutput> {
        return this.service.SpecifyTargetAudience(body);
      }
}
