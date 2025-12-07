import { Project, Skill, Education, Achievement } from './types';

export const PROFILE = {
  name: "Muhammad Bin Naveed",
  title: "Full Stack Web Developer",
  email: "muhammadbinnaveed01@gmail.com",
  phone: "+92 321 508 1609",
  location: "Lahore, Pakistan",
  tagline: "Building digital experiences with controlled energy.",
  about: "Motivated and self-driven Computer Science student with a strong foundation in front-end development and a growing passion for modern web technologies. I am eager to apply technical skills to real-world projects, collaborate in dynamic development teams, and continuously expand expertise through hands-on experience and innovation.",
};

export const SKILLS: Skill[] = [
  { name: "JavaScript (ES6+)", category: "frontend" },
  { name: "React.js", category: "frontend" },
  { name: "HTML5 & CSS3", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Bootstrap 5", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "MongoDB + Mongoose", category: "backend" },
  { name: "RESTful APIs", category: "backend" },
  { name: "Git & GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "NPM", category: "tools" },
  { name: "Problem Solving", category: "soft" },
  { name: "Team Collaboration", category: "soft" },
];

export const EDUCATION: Education[] = [
  {
    degree: "BS Computer Science (On Going)",
    institution: "Rise Group Of Colleges, Lahore",
    year: "Present",
  },
  {
    degree: "Full Stack Web Development",
    institution: "EVS Training Institute Lahore",
    year: "Completed",
  },
];

// Placeholder projects since PDF didn't list specific named projects
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing products, orders, and analytics. Features real-time data visualization and CRUD operations.",
    techStack: ["React.js", "Tailwind", "Node.js", "MongoDB"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity tool implementing MVC architecture. Allows users to organize tasks with drag-and-drop functionality and authorization.",
    techStack: ["MERN Stack", "Redux", "JWT Auth"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Portfolio V1",
    description: "My first personal portfolio showcasing responsive design principles and smooth animations using pure CSS and JavaScript.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    liveLink: "#",
    githubLink: "#",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: 1, text: "Mastered MERN Stack development within 1 year of intensive learning." },
  { id: 2, text: "Implemented secure RESTful APIs with JWT authentication." },
  { id: 3, text: "Consistently delivering responsive, mobile-first UI designs." },
];