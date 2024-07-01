import * as graphql from "@nestjs/graphql";
import { SoftwareDevelopmentService } from "./softwaredevelopment.service";

export class SoftwareDevelopmentResolver {
  constructor(protected readonly service: SoftwareDevelopmentService) {}
}
