import * as graphql from "@nestjs/graphql";
import { DiscoveryService } from "./discovery.service";

export class DiscoveryResolver {
  constructor(protected readonly service: DiscoveryService) {}
}
