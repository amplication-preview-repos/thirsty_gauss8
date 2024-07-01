import * as graphql from "@nestjs/graphql";
import { SalesService } from "./sales.service";

export class SalesResolver {
  constructor(protected readonly service: SalesService) {}
}
