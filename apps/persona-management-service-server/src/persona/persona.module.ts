import { Module } from "@nestjs/common";
import { PersonaModuleBase } from "./base/persona.module.base";
import { PersonaService } from "./persona.service";
import { PersonaController } from "./persona.controller";
import { PersonaResolver } from "./persona.resolver";

@Module({
  imports: [PersonaModuleBase],
  controllers: [PersonaController],
  providers: [PersonaService, PersonaResolver],
  exports: [PersonaService],
})
export class PersonaModule {}
