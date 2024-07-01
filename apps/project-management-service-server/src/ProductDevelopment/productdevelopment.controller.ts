import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ProductDevelopmentService } from "./productdevelopment.service";

@swagger.ApiTags("productDevelopments")
@common.Controller("productDevelopments")
export class ProductDevelopmentController {
  constructor(protected readonly service: ProductDevelopmentService) {}
}
