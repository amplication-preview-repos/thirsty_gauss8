import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SalesService } from "./sales.service";

@swagger.ApiTags("sales")
@common.Controller("sales")
export class SalesController {
  constructor(protected readonly service: SalesService) {}
}
