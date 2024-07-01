import { Module } from "@nestjs/common";
import { MarketingService } from "./marketing.service";
import { MarketingController } from "./marketing.controller";
import { MarketingResolver } from "./marketing.resolver";

@Module({
  controllers: [MarketingController],
  providers: [MarketingService, MarketingResolver],
  exports: [MarketingService],
})
export class MarketingModule {}
