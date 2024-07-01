import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { HumanResourcesService } from "./humanresources.service";

@swagger.ApiTags("humanResources")
@common.Controller("humanResources")
export class HumanResourcesController {
  constructor(protected readonly service: HumanResourcesService) {}
}
