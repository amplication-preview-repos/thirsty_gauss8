import * as graphql from "@nestjs/graphql";
import { ProductManagementService } from "./productmanagement.service";

export class ProductManagementResolver {
  constructor(protected readonly service: ProductManagementService) {}
}
