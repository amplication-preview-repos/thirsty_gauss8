import * as graphql from "@nestjs/graphql";
import { ProductPlanningService } from "./productplanning.service";

export class ProductPlanningResolver {
  constructor(protected readonly service: ProductPlanningService) {}
}
