import { Module } from "@nestjs/common";
import { QualityAssuranceService } from "./qualityassurance.service";
import { QualityAssuranceController } from "./qualityassurance.controller";
import { QualityAssuranceResolver } from "./qualityassurance.resolver";

@Module({
  controllers: [QualityAssuranceController],
  providers: [QualityAssuranceService, QualityAssuranceResolver],
  exports: [QualityAssuranceService],
})
export class QualityAssuranceModule {}
