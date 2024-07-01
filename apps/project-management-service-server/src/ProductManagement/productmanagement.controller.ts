import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ProductManagementService } from "./productmanagement.service";

@swagger.ApiTags("productManagements")
@common.Controller("productManagements")
export class ProductManagementController {
  constructor(protected readonly service: ProductManagementService) {}
}
