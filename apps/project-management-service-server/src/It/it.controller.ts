import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ItService } from "./it.service";

@swagger.ApiTags("its")
@common.Controller("its")
export class ItController {
  constructor(protected readonly service: ItService) {}
}
