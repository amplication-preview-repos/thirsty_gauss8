import { TaskCreateNestedManyWithoutProjectsInput } from "./TaskCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  description?: string | null;
  name?: string | null;
  owner?: string | null;
  tasks?: TaskCreateNestedManyWithoutProjectsInput;
};
