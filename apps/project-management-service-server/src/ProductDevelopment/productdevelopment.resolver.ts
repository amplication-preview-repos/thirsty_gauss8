import * as graphql from "@nestjs/graphql";
import { ProductDevelopmentService } from "./productdevelopment.service";

export class ProductDevelopmentResolver {
  constructor(protected readonly service: ProductDevelopmentService) {}
}
