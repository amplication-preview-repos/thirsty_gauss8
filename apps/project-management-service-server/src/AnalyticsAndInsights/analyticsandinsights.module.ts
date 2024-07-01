import { Module } from "@nestjs/common";
import { AnalyticsAndInsightsService } from "./analyticsandinsights.service";
import { AnalyticsAndInsightsController } from "./analyticsandinsights.controller";
import { AnalyticsAndInsightsResolver } from "./analyticsandinsights.resolver";

@Module({
  controllers: [AnalyticsAndInsightsController],
  providers: [AnalyticsAndInsightsService, AnalyticsAndInsightsResolver],
  exports: [AnalyticsAndInsightsService],
})
export class AnalyticsAndInsightsModule {}
