import { Module } from "@nestjs/common";
import { ProductStrategyService } from "./productstrategy.service";
import { ProductStrategyController } from "./productstrategy.controller";
import { ProductStrategyResolver } from "./productstrategy.resolver";

@Module({
  controllers: [ProductStrategyController],
  providers: [ProductStrategyService, ProductStrategyResolver],
  exports: [ProductStrategyService],
})
export class ProductStrategyModule {}
