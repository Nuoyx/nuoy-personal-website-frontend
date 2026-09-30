export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    slug: "nuoy-task-management",
    title: "Nuoy Task Management",
    description:
      "A full-stack task management application with user authentication, task management, and RESTful APIs.",
    technologies: ["React", "Spring Boot", "MyBatis", "MySQL", "JWT"],
    github: "#",
  },
  {
    slug: "nuoy-take-out",
    title: "Nuoy Take-Out",
    description:
      "A backend management system for a take-out application, including employee management, dishes, orders, and scheduled order processing.",
    technologies: [
      "Java",
      "Spring Boot",
      "MyBatis",
      "MySQL",
      "Redis",
      "AWS S3",
    ],
    github: "#",
  },
];