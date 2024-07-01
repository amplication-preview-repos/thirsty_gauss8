import * as graphql from "@nestjs/graphql";
import { ProductLaunchService } from "./productlaunch.service";

export class ProductLaunchResolver {
  constructor(protected readonly service: ProductLaunchService) {}
}
