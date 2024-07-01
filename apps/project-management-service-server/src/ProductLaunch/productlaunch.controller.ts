import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ProductLaunchService } from "./productlaunch.service";

@swagger.ApiTags("productLaunches")
@common.Controller("productLaunches")
export class ProductLaunchController {
  constructor(protected readonly service: ProductLaunchService) {}
}
