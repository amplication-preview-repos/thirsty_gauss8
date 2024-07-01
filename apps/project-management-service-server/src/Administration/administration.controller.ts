import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AdministrationService } from "./administration.service";

@swagger.ApiTags("administrations")
@common.Controller("administrations")
export class AdministrationController {
  constructor(protected readonly service: AdministrationService) {}
}
