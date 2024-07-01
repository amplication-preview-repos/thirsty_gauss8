import { Module } from "@nestjs/common";
import { AdministrationService } from "./administration.service";
import { AdministrationController } from "./administration.controller";
import { AdministrationResolver } from "./administration.resolver";

@Module({
  controllers: [AdministrationController],
  providers: [AdministrationService, AdministrationResolver],
  exports: [AdministrationService],
})
export class AdministrationModule {}
