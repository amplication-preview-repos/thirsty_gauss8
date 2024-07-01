import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DiscoveryService } from "./discovery.service";

@swagger.ApiTags("discoveries")
@common.Controller("discoveries")
export class DiscoveryController {
  constructor(protected readonly service: DiscoveryService) {}
}
