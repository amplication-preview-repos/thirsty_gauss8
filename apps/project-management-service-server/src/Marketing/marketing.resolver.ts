import * as graphql from "@nestjs/graphql";
import { MarketingService } from "./marketing.service";

export class MarketingResolver {
  constructor(protected readonly service: MarketingService) {}
}
