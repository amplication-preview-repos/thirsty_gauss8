import { Module } from "@nestjs/common";
import { PostLaunchReviewService } from "./postlaunchreview.service";
import { PostLaunchReviewController } from "./postlaunchreview.controller";
import { PostLaunchReviewResolver } from "./postlaunchreview.resolver";

@Module({
  controllers: [PostLaunchReviewController],
  providers: [PostLaunchReviewService, PostLaunchReviewResolver],
  exports: [PostLaunchReviewService],
})
export class PostLaunchReviewModule {}
