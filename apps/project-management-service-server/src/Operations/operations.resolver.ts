import * as graphql from "@nestjs/graphql";
import { OperationsService } from "./operations.service";

export class OperationsResolver {
  constructor(protected readonly service: OperationsService) {}
}
