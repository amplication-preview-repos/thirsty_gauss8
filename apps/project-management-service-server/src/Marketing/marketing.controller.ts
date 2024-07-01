import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MarketingService } from "./marketing.service";

@swagger.ApiTags("marketings")
@common.Controller("marketings")
export class MarketingController {
  constructor(protected readonly service: MarketingService) {}
}
