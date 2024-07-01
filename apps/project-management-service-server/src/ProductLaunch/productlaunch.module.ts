import { Module } from "@nestjs/common";
import { ProductLaunchService } from "./productlaunch.service";
import { ProductLaunchController } from "./productlaunch.controller";
import { ProductLaunchResolver } from "./productlaunch.resolver";

@Module({
  controllers: [ProductLaunchController],
  providers: [ProductLaunchService, ProductLaunchResolver],
  exports: [ProductLaunchService],
})
export class ProductLaunchModule {}
