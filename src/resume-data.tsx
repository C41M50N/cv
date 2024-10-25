import { AppWindowIcon, Mail } from "lucide-react";
import { ResumeData } from "./types";
import { LinkedInIcon } from "./components/icons/linkedin";
import { GitHubIcon } from "./components/icons/github";

export const RESUME_DATA: ResumeData = {
  name: 'Charles F.S. Buffington II',
  initials: 'CB',
  location: 'Michigan, USA',
  locationLink: 'https://maps.app.goo.gl/HGJqpsgaUhTTWXMT6',
  about: 'Software Engineer. Productivity Enthusiast.',
  summary: 'As a product-focused software engineer with a deep commitment to delivering high-quality results, I bring a unique blend of technical expertise and empathetic understanding to every project. I am passionate about creating documented, maintainable software solutions that stand the test of time. With a proven track record of success, I am poised to use my skills to drive innovation and elevate outcomes in a fast-paced work environment.',
  avatar: '/avatar.jpeg',
  links: [
    {
      name: 'Portfolio',
      url: 'https://cbuff.dev',
      icon: AppWindowIcon,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/charles-buffington',
      icon: LinkedInIcon,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/C41M50N',
      icon: GitHubIcon,
    },
    {
      name: 'Email',
      url: 'mailto:hello.cfsb@proton.me',
      icon: Mail,
    }
  ],
  education: [
    {
      name: 'Kettering University',
      degree: 'Bachelor of Science in Computer Science',
      timeline: 'July 2020 - June 2024',
      courses: [
        'Foundations of Data Science', 'Cloud Computing',
        'Computer Networks', 'Mobile Robotics',
      ]
    }
  ],
  experience: [
    {
      title: 'Software Engineering Architect',
      company: 'Truelight Systems',
      timeline: 'Apr. 2024 - Oct. 2024',
      bullets: [
        'Lead the development and implementation of a product roadmap to align with business objectives and market demands',
        'Created documentation pertaining to the development, deployment, and maintenance of all major system components',
        'Ensured the scalability, reliability, and performance of the technology stack to support business growth and user needs',
        'Managed the technology budget to optimize resource allocation and cost efficiency',
        'Created detailed reports (that could be understood by both technical and non-technical individuals) to explain technical decisions to various stakeholders',
      ],
      skills: [
        'Next.js', 'Electron', 'Node.js', 'TypeScript', 'tRPC', 'TanStack Query', 'Prisma ORM', 'MongoDB',
        'TailwindCSS', 'Google Cloud Platform (GCP)', 'Digital Ocean'
      ]
    },
    {
      title: 'Full Stack Engineer',
      company: 'Essium Labs',
      timeline: 'July 2020 - Sept. 2023',
      link: 'https://essiumlabs.com',
      bullets: [
        'Increased client adoption by developing a public Python SDK that enabled seamless integration and automation of workflows, improving the onboarding process for customers',
        'Boosted analyst productivity by over 300% by launching an internal admin dashboard using React and FastAPI',
        'Increased user satisfaction by over 500% by iteratively enhancing UX based on stakeholder feedback',
        'Implemented critical security features to an internal application: 2FA, role-based authorization, and IP address whitelisting',
        'Managed the deployment of 2 applications using CI/CD pipelines with Docker, GitHub Actions, and Google Cloud',
        'Improved customer satisfaction by launching 3 integrations with popular background check service providers',
        'Developed an internal Golang CLI tool to streamline and automate Kubernetes deployment management for engineers',
      ],
      skills: [
        'React', 'TypeScript', 'FastAPI', 'Python', 'Golang', 'Ruby on Rails',
        'Docker/Kubernetes', 'Nginx', 'GitHub Actions', 'Google Cloud Platform',
      ]
    }
  ],
  skills: [
    'Astro', 'TypeScript', 'Next.js', 'React', 'Node.js', 'Electron',
    'Golang', 'Gin/Fiber/Echo',
    'Python', 'FastAPI/Flask/Django', 'SQLAlchemy', 'NumPy', 'Pandas',
    'Kotlin', 'Java', 'Spring Boot', 'Hibernate', 'JUnit', 'Gradle',
    'PostgreSQL', 'MongoDB', 'Redis',
    'Docker', 'Kubernetes', 'AWS', 'GCP', 'Vercel',
  ],
  projects: [
    {
      title: 'JumpDrive',
      description: 'A temporary file and text sharing service',
      link: '',
      techstack: [
        'Next.js', 'tRPC', 'TanStack Query', 'Drizzle ORM', 'PostgreSQL', 'TailwindCSS', 'Vercel'
      ]
    },
    {
      title: 'SubTrack',
      description: 'A subscriptions tracking utility with an intuitive, non-invasive user experience',
      link: 'https://subtrack.cbuff.dev',
      techstack: [
        'Next.js', 'Prisma ORM', 'tRPC', 'TanStack Query', 'PostgreSQL', 'TailwindCSS',
        'React Email', 'Resend', 'Todoist API', 'Vercel'
      ]
    },
    {
      title: 'Fuuty.gg',
      description: 'A soccer knowledge gaming platform with an engaging, user-friendly experience',
      link: '',
      techstack: [
        'Next.js', 'Prisma ORM', 'tRPC', 'TanStack Query', 'MongoDB', 'TailwindCSS',
        'Google Analytics', 'AWS S3', 'Vercel'
      ]
    },
    {
      title: 'Redis Server Lite',
      description: 'A lightweight Redis server implementation written in Go',
      link: 'https://github.com/C41M50N/Redis-Server-Lite',
      techstack: [
        'Go', 'Go Routines', 'Concurrent Programming', 'Test Driven Development (TDD)', 'Redis'
      ]
    }
  ]
}
