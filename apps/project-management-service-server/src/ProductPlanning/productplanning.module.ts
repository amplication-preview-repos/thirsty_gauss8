import { Module } from "@nestjs/common";
import { ProductPlanningService } from "./productplanning.service";
import { ProductPlanningController } from "./productplanning.controller";
import { ProductPlanningResolver } from "./productplanning.resolver";

@Module({
  controllers: [ProductPlanningController],
  providers: [ProductPlanningService, ProductPlanningResolver],
  exports: [ProductPlanningService],
})
export class ProductPlanningModule {}
