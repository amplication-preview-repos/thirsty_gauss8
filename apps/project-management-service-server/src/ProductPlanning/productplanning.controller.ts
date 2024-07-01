import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ProductPlanningService } from "./productplanning.service";

@swagger.ApiTags("productPlannings")
@common.Controller("productPlannings")
export class ProductPlanningController {
  constructor(protected readonly service: ProductPlanningService) {}
}
