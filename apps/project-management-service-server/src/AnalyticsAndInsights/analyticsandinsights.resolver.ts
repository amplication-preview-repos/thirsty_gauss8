import * as graphql from "@nestjs/graphql";
import { AnalyticsAndInsightsService } from "./analyticsandinsights.service";

export class AnalyticsAndInsightsResolver {
  constructor(protected readonly service: AnalyticsAndInsightsService) {}
}
