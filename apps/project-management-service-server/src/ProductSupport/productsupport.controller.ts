import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ProductSupportService } from "./productsupport.service";

@swagger.ApiTags("productSupports")
@common.Controller("productSupports")
export class ProductSupportController {
  constructor(protected readonly service: ProductSupportService) {}
}
