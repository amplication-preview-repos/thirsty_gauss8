import { Module } from "@nestjs/common";
import { ItService } from "./it.service";
import { ItController } from "./it.controller";
import { ItResolver } from "./it.resolver";

@Module({
  controllers: [ItController],
  providers: [ItService, ItResolver],
  exports: [ItService],
})
export class ItModule {}
