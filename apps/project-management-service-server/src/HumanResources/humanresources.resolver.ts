import * as graphql from "@nestjs/graphql";
import { HumanResourcesService } from "./humanresources.service";

export class HumanResourcesResolver {
  constructor(protected readonly service: HumanResourcesService) {}
}
