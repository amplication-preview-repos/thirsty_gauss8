import { Module } from "@nestjs/common";
import { OperationsService } from "./operations.service";
import { OperationsController } from "./operations.controller";
import { OperationsResolver } from "./operations.resolver";

@Module({
  controllers: [OperationsController],
  providers: [OperationsService, OperationsResolver],
  exports: [OperationsService],
})
export class OperationsModule {}
