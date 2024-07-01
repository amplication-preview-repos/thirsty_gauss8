import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskCreateInput = {
  assignedTo?: string | null;
  description?: string | null;
  dueDate?: Date | null;
  name?: string | null;
  project?: ProjectWhereUniqueInput | null;
  status?: string | null;
};
