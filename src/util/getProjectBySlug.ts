import { projects } from "../pages/projects/ProjectsData";

export function getProjectBySlug(slug: string) {
  return projects.find(
    (project) => project.slug === slug
  );
}