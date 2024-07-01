import * as graphql from "@nestjs/graphql";
import { AdministrationService } from "./administration.service";

export class AdministrationResolver {
  constructor(protected readonly service: AdministrationService) {}
}
