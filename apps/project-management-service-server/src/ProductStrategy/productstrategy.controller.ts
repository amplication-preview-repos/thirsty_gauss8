import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ProductStrategyService } from "./productstrategy.service";

@swagger.ApiTags("productStrategies")
@common.Controller("productStrategies")
export class ProductStrategyController {
  constructor(protected readonly service: ProductStrategyService) {}
}
