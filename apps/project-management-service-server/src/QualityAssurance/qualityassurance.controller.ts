import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { QualityAssuranceService } from "./qualityassurance.service";

@swagger.ApiTags("qualityAssurances")
@common.Controller("qualityAssurances")
export class QualityAssuranceController {
  constructor(protected readonly service: QualityAssuranceService) {}
}
