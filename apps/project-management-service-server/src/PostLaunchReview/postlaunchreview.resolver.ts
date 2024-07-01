import * as graphql from "@nestjs/graphql";
import { PostLaunchReviewService } from "./postlaunchreview.service";

export class PostLaunchReviewResolver {
  constructor(protected readonly service: PostLaunchReviewService) {}
}
