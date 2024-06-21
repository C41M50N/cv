import { AppWindowIcon, Mail } from "lucide-react";
import { ResumeData } from "./types";
import { LinkedInIcon } from "./components/icons/linkedin";
import { GitHubIcon } from "./components/icons/github";

export const RESUME_DATA: ResumeData = {
  name: 'Charles F.S. Buffington II',
  initials: 'CB',
  location: 'Burton, Michigan, USA',
  locationLink: 'https://www.google.com/maps/place/Burton,+MI/@43.0040258,-83.7980911,11z/',
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
      title: 'Technical Analyst → Full Stack Engineer',
      company: 'Essium Labs',
      timeline: 'July 2020 - Sept. 2023',
      link: 'https://essiumlabs.com',
      bullets: [
        'Boosted analyst productivity by *over 300%* by launching an internal admin dashboard using *React* and *FastAPI*',
        'Increased user satisfaction by *over 500%* by iteratively enhancing UX based on stakeholder feedback',
        'Achieved a *10x boost* in customer productivity by transforming vague requirements into intuitive user interfaces',
        'Deployed *2 applications* using CI/CD pipelines with *Docker*, *GitHub Actions*, and *Kubernetes Engine*',
        '*Tripled* customer satisfaction reports by creating *3 background check service integrations* with Ruby on Rails',
        'Contributed to the reliability and performance of *3 enterprise web apps* through maintenance and support',
        'Implemented security features: *two-factor authentication*, *role-based authorization*, *IP address whitelisting*',
      ],
      skills: [
        'React', 'TypeScript', 'FastAPI', 'Python', 'Golang', 'Ruby on Rails',
        'Docker/Kubernetes', 'Nginx', 'GitHub Actions', 'Google Cloud Platform',
      ]
    }
  ],
  skills: [
    'Astro', 'TypeScript', 'Next.js', 'React', 'Node.js', 'Golang',
    'Python', 'FastAPI/Flask/Django', 'SQLAlchemy', 'NumPy', 'Pandas',
    'Spring Boot', 'Hibernate', 'JUnit', 'Gradle',
    'PostgreSQL', 'MongoDB', 'Redis',
    'Docker', 'Kubernetes', 'AWS', 'GCP', 'Vercel',
  ],
  projects: [
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
      link: 'https://fuuty.gg',
      techstack: [
        'Next.js', 'Prisma ORM', 'tRPC', 'TanStack Query', 'MongoDB', 'TailwindCSS',
        'Google Analytics', 'AWS S3', 'Vercel'
      ]
    }
  ]
}
