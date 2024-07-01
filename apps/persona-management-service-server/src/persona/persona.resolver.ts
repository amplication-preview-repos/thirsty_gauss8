import * as graphql from "@nestjs/graphql";
import { PersonaResolverBase } from "./base/persona.resolver.base";
import { Persona } from "./base/Persona";
import { PersonaService } from "./persona.service";

@graphql.Resolver(() => Persona)
export class PersonaResolver extends PersonaResolverBase {
  constructor(protected readonly service: PersonaService) {
    super(service);
  }
}
