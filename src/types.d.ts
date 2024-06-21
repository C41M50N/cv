
export type ResumeLink = {
  name: string;
  url: string;
  icon: 
    React.ComponentType<{ className: string }> | 
    react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
}

export type ResumeEducation = {
  name: string;
  degree: string;
  timeline: string;
  courses: Array<string>;
}

export type ResumeExperience = {
  title: string;
  company: string;
  timeline: string;
  link: string;
  bullets: Array<string>;
  skills: Array<string>;
}

export type ResumeProject = {
  title: string;
  description: string;
  link: string;
  techstack: Array<string>;
}

export type ResumeData = {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatar: string;
  links: Array<ResumeLink>;
  education: Array<ResumeEducation>;
  experience: Array<ResumeExperience>;
  skills: Array<string>;
  projects: Array<ResumeProject>;
}
