import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskUpdateInput = {
  assignedTo?: string | null;
  description?: string | null;
  dueDate?: Date | null;
  name?: string | null;
  project?: ProjectWhereUniqueInput | null;
  status?: string | null;
};
