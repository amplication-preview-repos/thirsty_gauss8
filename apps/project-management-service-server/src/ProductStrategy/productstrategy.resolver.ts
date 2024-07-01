import * as graphql from "@nestjs/graphql";
import { ProductStrategyService } from "./productstrategy.service";

export class ProductStrategyResolver {
  constructor(protected readonly service: ProductStrategyService) {}
}
