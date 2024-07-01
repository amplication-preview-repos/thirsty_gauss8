import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskWhereInput = {
  assignedTo?: StringNullableFilter;
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  project?: ProjectWhereUniqueInput;
  status?: StringNullableFilter;
};
