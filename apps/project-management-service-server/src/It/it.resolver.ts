import * as graphql from "@nestjs/graphql";
import { ItService } from "./it.service";

export class ItResolver {
  constructor(protected readonly service: ItService) {}
}
