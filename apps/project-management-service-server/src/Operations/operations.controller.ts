import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { OperationsService } from "./operations.service";

@swagger.ApiTags("operations")
@common.Controller("operations")
export class OperationsController {
  constructor(protected readonly service: OperationsService) {}
}
