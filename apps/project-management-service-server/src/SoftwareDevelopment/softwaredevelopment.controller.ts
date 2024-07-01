import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SoftwareDevelopmentService } from "./softwaredevelopment.service";

@swagger.ApiTags("softwareDevelopments")
@common.Controller("softwareDevelopments")
export class SoftwareDevelopmentController {
  constructor(protected readonly service: SoftwareDevelopmentService) {}
}
