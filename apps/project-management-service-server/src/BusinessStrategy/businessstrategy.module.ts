import { Module } from "@nestjs/common";
import { BusinessStrategyService } from "./businessstrategy.service";
import { BusinessStrategyController } from "./businessstrategy.controller";
import { BusinessStrategyResolver } from "./businessstrategy.resolver";

@Module({
  controllers: [BusinessStrategyController],
  providers: [BusinessStrategyService, BusinessStrategyResolver],
  exports: [BusinessStrategyService],
})
export class BusinessStrategyModule {}
