import { Persona as TPersona } from "../api/persona/Persona";

export const PERSONA_TITLE_FIELD = "name";

export const PersonaTitle = (record: TPersona): string => {
  return record.name?.toString() || String(record.id);
};
