import { Project } from "../projects/project";

export interface Thumbnailizable {
  getThumbnails(entity: Project): String[]
}
