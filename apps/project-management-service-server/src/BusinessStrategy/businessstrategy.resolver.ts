import * as graphql from "@nestjs/graphql";
import { BusinessStrategyService } from "./businessstrategy.service";

export class BusinessStrategyResolver {
  constructor(protected readonly service: BusinessStrategyService) {}
}
