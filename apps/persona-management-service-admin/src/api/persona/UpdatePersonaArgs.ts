import { PersonaWhereUniqueInput } from "./PersonaWhereUniqueInput";
import { PersonaUpdateInput } from "./PersonaUpdateInput";

export type UpdatePersonaArgs = {
  where: PersonaWhereUniqueInput;
  data: PersonaUpdateInput;
};
