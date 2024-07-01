import { Module } from "@nestjs/common";
import { SoftwareDevelopmentService } from "./softwaredevelopment.service";
import { SoftwareDevelopmentController } from "./softwaredevelopment.controller";
import { SoftwareDevelopmentResolver } from "./softwaredevelopment.resolver";

@Module({
  controllers: [SoftwareDevelopmentController],
  providers: [SoftwareDevelopmentService, SoftwareDevelopmentResolver],
  exports: [SoftwareDevelopmentService],
})
export class SoftwareDevelopmentModule {}
