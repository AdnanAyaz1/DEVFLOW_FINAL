// data/techRegistry.js
import { FaAws, FaDocker, FaGitAlt, FaJava, FaLinux, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import {
  SiAuth0,
  SiCypress,
  SiDjango,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiPostman,
  SiRedis,
  SiRedux,
  SiSpringboot,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebpack,
} from "react-icons/si";

export const techRegistry = {
  // ======================
  // FRONTEND
  // ======================
  react: {
    label: "React",
    icon: FaReact,
    color: "bg-blue-100 text-blue-700",
    aliases: ["react", "reactjs"],
  },

  nextjs: {
    label: "Next.js",
    icon: SiNextdotjs,
    color: "bg-gray-200 text-black",
    aliases: ["next", "nextjs", "nextjsapp"],
  },

  javascript: {
    label: "JavaScript",
    icon: SiJavascript,
    color: "bg-yellow-100 text-yellow-800",
    aliases: ["js", "javascript"],
  },

  typescript: {
    label: "TypeScript",
    icon: SiTypescript,
    color: "bg-blue-100 text-blue-800",
    aliases: ["ts", "typescript"],
  },

  tailwind: {
    label: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "bg-cyan-100 text-cyan-700",
    aliases: ["tailwind", "tailwindcss"],
  },

  redux: {
    label: "Redux",
    icon: SiRedux,
    color: "bg-purple-100 text-purple-700",
    aliases: ["redux"],
  },

  // ======================
  // BACKEND
  // ======================
  nodejs: {
    label: "Node.js",
    icon: FaNodeJs,
    color: "bg-green-100 text-green-700",
    aliases: ["node", "nodejs"],
  },

  express: {
    label: "Express.js",
    icon: SiExpress,
    color: "bg-gray-100 text-gray-800",
    aliases: ["express", "expressjs"],
  },

  python: {
    label: "Python",
    icon: FaPython,
    color: "bg-yellow-100 text-yellow-700",
    aliases: ["python", "py"],
  },

  django: {
    label: "Django",
    icon: SiDjango,
    color: "bg-green-100 text-green-800",
    aliases: ["django"],
  },

  flask: {
    label: "Flask",
    icon: SiFlask,
    color: "bg-gray-100 text-gray-800",
    aliases: ["flask"],
  },

  fastapi: {
    label: "FastAPI",
    icon: SiFastapi,
    color: "bg-teal-100 text-teal-800",
    aliases: ["fastapi"],
  },

  java: {
    label: "Java",
    icon: FaJava,
    color: "bg-red-100 text-red-700",
    aliases: ["java"],
  },

  springboot: {
    label: "Spring Boot",
    icon: SiSpringboot,
    color: "bg-green-100 text-green-700",
    aliases: ["spring", "springboot"],
  },

  // ======================
  // DATABASES
  // ======================
  mongodb: {
    label: "MongoDB",
    icon: SiMongodb,
    color: "bg-green-100 text-green-700",
    aliases: ["mongo", "mongodb"],
  },

  postgresql: {
    label: "PostgreSQL",
    icon: SiPostgresql,
    color: "bg-blue-100 text-blue-700",
    aliases: ["postgres", "postgresql"],
  },

  mysql: {
    label: "MySQL",
    icon: SiMysql,
    color: "bg-blue-100 text-blue-700",
    aliases: ["mysql"],
  },

  redis: {
    label: "Redis",
    icon: SiRedis,
    color: "bg-red-100 text-red-700",
    aliases: ["redis"],
  },

  // ======================
  // DEVOPS / CLOUD
  // ======================
  docker: {
    label: "Docker",
    icon: FaDocker,
    color: "bg-blue-100 text-blue-700",
    aliases: ["docker"],
  },

  kubernetes: {
    label: "Kubernetes",
    icon: SiKubernetes,
    color: "bg-blue-100 text-blue-800",
    aliases: ["k8s", "kubernetes"],
  },

  aws: {
    label: "AWS",
    icon: FaAws,
    color: "bg-orange-100 text-orange-700",
    aliases: ["aws", "amazonwebservices"],
  },

  nginx: {
    label: "Nginx",
    icon: SiNginx,
    color: "bg-green-100 text-green-700",
    aliases: ["nginx"],
  },

  linux: {
    label: "Linux",
    icon: FaLinux,
    color: "bg-gray-100 text-gray-800",
    aliases: ["linux"],
  },

  // ======================
  // TESTING / TOOLING
  // ======================
  git: {
    label: "Git",
    icon: FaGitAlt,
    color: "bg-orange-100 text-orange-700",
    aliases: ["git"],
  },

  jest: {
    label: "Jest",
    icon: SiJest,
    color: "bg-red-100 text-red-700",
    aliases: ["jest"],
  },

  cypress: {
    label: "Cypress",
    icon: SiCypress,
    color: "bg-green-100 text-green-700",
    aliases: ["cypress"],
  },

  vite: {
    label: "Vite",
    icon: SiVite,
    color: "bg-purple-100 text-purple-700",
    aliases: ["vite"],
  },

  webpack: {
    label: "Webpack",
    icon: SiWebpack,
    color: "bg-blue-100 text-blue-700",
    aliases: ["webpack"],
  },

  postman: {
    label: "Postman",
    icon: SiPostman,
    color: "bg-orange-100 text-orange-700",
    aliases: ["postman"],
  },

  swagger: {
    label: "Swagger",
    icon: SiSwagger,
    color: "bg-green-100 text-green-700",
    aliases: ["swagger", "openapi"],
  },

  // ======================
  // SECURITY / SE TAGS (NO ICON FALLBACK OK)
  // ======================
  security: {
    label: "Security",
    icon: null,
    color: "bg-red-100 text-red-700",
    aliases: ["security", "cybersecurity"],
  },

  authentication: {
    label: "Authentication",
    icon: SiAuth0,
    color: "bg-indigo-100 text-indigo-700",
    aliases: ["auth", "authentication"],
  },

  authorization: {
    label: "Authorization",
    icon: null,
    color: "bg-indigo-100 text-indigo-700",
    aliases: ["authorization", "accesscontrol"],
  },

  encryption: {
    label: "Encryption",
    icon: null,
    color: "bg-gray-100 text-gray-800",
    aliases: ["encryption", "cryptography"],
  },

  api: {
    label: "API",
    icon: SiGraphql,
    color: "bg-pink-100 text-pink-700",
    aliases: ["api", "rest", "graphql"],
  },
};
