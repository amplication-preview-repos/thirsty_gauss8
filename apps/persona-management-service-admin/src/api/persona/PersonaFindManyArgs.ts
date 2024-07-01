import { PersonaWhereInput } from "./PersonaWhereInput";
import { PersonaOrderByInput } from "./PersonaOrderByInput";

export type PersonaFindManyArgs = {
  where?: PersonaWhereInput;
  orderBy?: Array<PersonaOrderByInput>;
  skip?: number;
  take?: number;
};
