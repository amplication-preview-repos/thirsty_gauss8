import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PersonaService } from "./persona.service";
import { PersonaControllerBase } from "./base/persona.controller.base";

@swagger.ApiTags("personas")
@common.Controller("personas")
export class PersonaController extends PersonaControllerBase {
  constructor(protected readonly service: PersonaService) {
    super(service);
  }
}
