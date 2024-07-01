import { Module } from "@nestjs/common";
import { SalesService } from "./sales.service";
import { SalesController } from "./sales.controller";
import { SalesResolver } from "./sales.resolver";

@Module({
  controllers: [SalesController],
  providers: [SalesService, SalesResolver],
  exports: [SalesService],
})
export class SalesModule {}
