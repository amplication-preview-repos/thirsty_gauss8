import { Module } from "@nestjs/common";
import { HumanResourcesService } from "./humanresources.service";
import { HumanResourcesController } from "./humanresources.controller";
import { HumanResourcesResolver } from "./humanresources.resolver";

@Module({
  controllers: [HumanResourcesController],
  providers: [HumanResourcesService, HumanResourcesResolver],
  exports: [HumanResourcesService],
})
export class HumanResourcesModule {}
