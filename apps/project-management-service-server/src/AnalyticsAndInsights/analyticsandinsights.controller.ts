import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AnalyticsAndInsightsService } from "./analyticsandinsights.service";

@swagger.ApiTags("analyticsAndInsights")
@common.Controller("analyticsAndInsights")
export class AnalyticsAndInsightsController {
  constructor(protected readonly service: AnalyticsAndInsightsService) {}
}
