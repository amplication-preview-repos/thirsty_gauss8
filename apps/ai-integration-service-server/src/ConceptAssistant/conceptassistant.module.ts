import { Module } from "@nestjs/common";
import { ConceptAssistantService } from "./conceptassistant.service";
import { ConceptAssistantController } from "./conceptassistant.controller";
import { ConceptAssistantResolver } from "./conceptassistant.resolver";

@Module({
  controllers: [ConceptAssistantController],
  providers: [ConceptAssistantService, ConceptAssistantResolver],
  exports: [ConceptAssistantService],
})
export class ConceptAssistantModule {}
