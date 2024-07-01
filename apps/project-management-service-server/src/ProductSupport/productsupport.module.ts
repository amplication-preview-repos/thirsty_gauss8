import { Module } from "@nestjs/common";
import { ProductSupportService } from "./productsupport.service";
import { ProductSupportController } from "./productsupport.controller";
import { ProductSupportResolver } from "./productsupport.resolver";

@Module({
  controllers: [ProductSupportController],
  providers: [ProductSupportService, ProductSupportResolver],
  exports: [ProductSupportService],
})
export class ProductSupportModule {}
