import { Module } from "@nestjs/common";
import { ProductDevelopmentService } from "./productdevelopment.service";
import { ProductDevelopmentController } from "./productdevelopment.controller";
import { ProductDevelopmentResolver } from "./productdevelopment.resolver";

@Module({
  controllers: [ProductDevelopmentController],
  providers: [ProductDevelopmentService, ProductDevelopmentResolver],
  exports: [ProductDevelopmentService],
})
export class ProductDevelopmentModule {}
