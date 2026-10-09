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
    slug: "nuoy-take-out",
    title: "Nuoy Take-Out",
    description:
      "A Java-based backend for a food delivery platform designed to support restaurant operations and online ordering. Built with Spring Boot, the project uses a modular architecture that separates shared utilities, data models, and server-side application logic. It integrates relational database access and includes dependencies for caching, cloud file storage, and API documentation.",
    technologies: [
      "Java",
      "Spring Boot",
      "MyBatis",
      "MySQL",
      "Redis",
      "AWS S3",
      "Maven",
    ],
    github: "https://github.com/Nuoyx/food-delivery-platform-backend",
  },
  {
    slug: "food-to-eat",
    title: "Food To Eat",
    description:
      "A full-stack food discovery application designed to help users decide what to eat through personalized recommendations and AI-assisted conversations. It combines an interactive React interface with a Spring Boot backend for managing food data and supporting preference-based recommendations. A separate Python-based chatbot service uses LangChain and Google Gemini to provide natural language assistance.",
    technologies: [
      "React",
      "JavaScript",
      "Spring Boot",
      "MyBatis",
      "Python",
      "FastAPI",
      "LangChain",
      "Google Gemini",
      "Redis",
      "PostgreSQL",
    ],
    github: "https://github.com/Nuoyx/food-to-eat-backend",
  },
  {
    slug: "image-classification-model",
    title: "Image Classification Model",
    description:
      "Developed a convolutional neural network (CNN) using PyTorch to classify images across 10 categories in the CIFAR-10 dataset, achieving 77.81% test accuracy. Designed a three-layer convolutional architecture incorporating batch normalization, max pooling, and dropout to extract visual features and reduce overfitting. Implemented GPU-accelerated training with Adam optimization, cross-entropy loss, and model checkpointing for evaluation.",
    technologies: [
      "Python",
      "PyTorch",
      "Torchvision",
      "CUDA",
      "CNN",
    ],
    github: "https://github.com/Nuoyx/image-classification-model",
  },
  {
    slug: "nuoyue-management-system",
    title: "Nuoyue Management System",
    description:
      "Developed a Spring Boot backend for employee and department management, implementing RESTful CRUD APIs, MyBatis-based data persistence, dynamic filtering, and pagination. Integrated JWT-based authentication, AWS S3 file storage, and Spring AOP for operation logging and auditing. Implemented transactional employee record management and reporting APIs for workforce statistics.",
    technologies: [
      "Java",
      "Spring Boot",
      "MyBatis",
      "MySQL",
      "JWT",
      "AWS S3",
      "Spring AOP",
      "Maven",
    ],
    github: "https://github.com/Nuoyx/nuoyue-management-system-backend",
  },


];