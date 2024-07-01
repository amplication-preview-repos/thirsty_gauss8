import { Project } from "../project/Project";

export type Task = {
  assignedTo: string | null;
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  name: string | null;
  project?: Project | null;
  status: string | null;
  updatedAt: Date;
};
