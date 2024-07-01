import * as graphql from "@nestjs/graphql";
import { ProductSupportService } from "./productsupport.service";

export class ProductSupportResolver {
  constructor(protected readonly service: ProductSupportService) {}
}
