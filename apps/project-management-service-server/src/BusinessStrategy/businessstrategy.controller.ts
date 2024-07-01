import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { BusinessStrategyService } from "./businessstrategy.service";

@swagger.ApiTags("businessStrategies")
@common.Controller("businessStrategies")
export class BusinessStrategyController {
  constructor(protected readonly service: BusinessStrategyService) {}
}
