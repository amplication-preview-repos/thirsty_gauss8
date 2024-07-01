import { Module } from "@nestjs/common";
import { DiscoveryService } from "./discovery.service";
import { DiscoveryController } from "./discovery.controller";
import { DiscoveryResolver } from "./discovery.resolver";

@Module({
  controllers: [DiscoveryController],
  providers: [DiscoveryService, DiscoveryResolver],
  exports: [DiscoveryService],
})
export class DiscoveryModule {}
