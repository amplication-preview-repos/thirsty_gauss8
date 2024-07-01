import * as graphql from "@nestjs/graphql";
import { QualityAssuranceService } from "./qualityassurance.service";

export class QualityAssuranceResolver {
  constructor(protected readonly service: QualityAssuranceService) {}
}
