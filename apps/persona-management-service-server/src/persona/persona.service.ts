import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PersonaServiceBase } from "./base/persona.service.base";

@Injectable()
export class PersonaService extends PersonaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
