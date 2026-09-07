export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;

  technologies: string[];

  github?: string;
  demo?: string;

  overview: string[];

  features: {
    title: string;
    description: string;
  }[];

  architecture: {
    title: string;
    description: string;
  }[];

  technicalDetails: {
    title: string;
    description: string;
  }[];

  challenges: {
    challenge: string;
    solution: string;
  }[];

  screenshots: {
    image: string;
    alt: string;
  }[];

  learned: string;

  futureImprovements?: string[];
}


export const projects: Project[] = [
  {
    slug: "nuoy-task-management",

    title: "Nuoy Task Management",

    category: "Full-Stack Web Application",

    description:
      "A full-stack task management application designed to help users organize, manage, and track their tasks.",

    image: "/images/projects/nuoy-task-management.png",

    technologies: [
      "React",
      "Spring Boot",
      "MyBatis",
      "MySQL",
      "JWT",
    ],

    github: "#",

    demo: "#",

    overview: [
      "Nuoy Task Management is a full-stack web application that provides users with a centralized platform for creating, managing, and tracking tasks.",

      "The application uses React for the frontend and Spring Boot for the backend, with MySQL providing persistent data storage.",
    ],

    features: [
      {
        title: "User Authentication",
        description:
          "Implemented JWT-based authentication to protect user-specific resources and API endpoints.",
      },

      {
        title: "Task Management",
        description:
          "Users can create, update, delete, and manage their tasks through the application.",
      },

      {
        title: "RESTful API",
        description:
          "Designed RESTful APIs to allow the React frontend to communicate with the Spring Boot backend.",
      },
    ],

    architecture: [
      {
        title: "Frontend",
        description: "React",
      },

      {
        title: "Backend",
        description: "Spring Boot + MyBatis",
      },

      {
        title: "Database",
        description: "MySQL",
      },
    ],

    technicalDetails: [
      {
        title: "Authentication",
        description:
          "JWT tokens are generated after successful authentication and used to authorize requests to protected endpoints.",
      },

      {
        title: "Backend",
        description:
          "Spring Boot provides the REST API while MyBatis handles database interaction and SQL mapping.",
      },

      {
        title: "Frontend",
        description:
          "React provides the user interface and communicates with the backend through RESTful API requests.",
      },
    ],

    challenges: [
      {
        challenge:
          "Protecting user-specific API endpoints while keeping authentication information secure.",

        solution:
          "Implemented JWT-based authentication and backend request validation to ensure protected resources could only be accessed by authenticated users.",
      },
    ],

    screenshots: [
      {
        image: "/images/projects/task-management-1.png",
        alt: "Task management dashboard",
      },

      {
        image: "/images/projects/task-management-2.png",
        alt: "Task management interface",
      },
    ],

    learned:
      "This project helped me strengthen my understanding of full-stack development, RESTful API design, authentication, database integration, and communication between frontend and backend systems.",

    futureImprovements: [
      "Improve task filtering and searching",
      "Add real-time notifications",
      "Improve mobile responsiveness",
    ],
  },


  {
    slug: "nuoy-take-out",

    title: "Nuoy Take-Out",

    category: "Backend Management System",

    description:
      "A backend management system for a take-out application, including employee management, dishes, orders, and scheduled order processing.",

    image: "/images/projects/nuoy-take-out.png",

    technologies: [
      "Java",
      "Spring Boot",
      "MyBatis",
      "MySQL",
      "Redis",
      "AWS S3",
    ],

    github: "#",

    overview: [
      "Nuoy Take-Out is a backend management system designed to support the core operations of a take-out application.",

      "The system provides APIs for employee management, dish management, order processing, and other administrative operations.",
    ],

    features: [
      {
        title: "Employee Management",
        description:
          "Provides APIs for managing employee accounts and administrative access.",
      },

      {
        title: "Dish Management",
        description:
          "Supports creating, updating, and managing dishes and categories.",
      },

      {
        title: "Order Management",
        description:
          "Handles order creation, status updates, and order processing.",
      },
    ],

    architecture: [
      {
        title: "Backend",
        description: "Spring Boot + MyBatis",
      },

      {
        title: "Database",
        description: "MySQL",
      },

      {
        title: "Cache",
        description: "Redis",
      },
    ],

    technicalDetails: [
      {
        title: "Backend",
        description:
          "Built RESTful APIs using Spring Boot with MyBatis for database operations.",

      },

      {
        title: "Caching",
        description:
          "Used Redis to improve performance for frequently accessed data.",

      },

      {
        title: "Object Storage",
        description:
          "Integrated AWS S3 for storing application images and other resources.",
      },
    ],

    challenges: [
      {
        challenge:
          "Managing frequently accessed application data efficiently.",

        solution:
          "Integrated Redis caching to reduce repeated database queries and improve response performance.",
      },
    ],

    screenshots: [],

    learned:
      "This project strengthened my understanding of Spring Boot backend development, database integration, Redis caching, object storage, and RESTful API design.",

    futureImprovements: [
      "Improve order processing",
      "Add monitoring and logging",
      "Improve API documentation",
    ],
  },
];