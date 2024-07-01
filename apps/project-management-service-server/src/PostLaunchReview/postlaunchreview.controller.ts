import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PostLaunchReviewService } from "./postlaunchreview.service";

@swagger.ApiTags("postLaunchReviews")
@common.Controller("postLaunchReviews")
export class PostLaunchReviewController {
  constructor(protected readonly service: PostLaunchReviewService) {}
}
