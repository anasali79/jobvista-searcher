
export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  type: string;
  remote?: boolean;
  salary?: string;
  description: string;
  responsibilities?: string[];
  requirements?: string[];
  benefits?: string[];
  postedDate: string;
  featured?: boolean;
  verified?: boolean;
  tags?: string[];
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechVision Inc.",
    location: "India , Indore, MP",
    type: "Full-time",
    remote: true,
    salary: "6LPA - 10LPA ",
    description: `We are looking for a Senior Frontend Developer to join our team. You will be responsible for building and maintaining user interfaces for our web applications.

The ideal candidate has a deep understanding of React, TypeScript, and modern frontend development practices. You should be able to write clean, maintainable code and have an eye for detail.

As part of our team, you'll collaborate with designers, backend developers, and product managers to deliver high-quality user experiences.`,
    responsibilities: [
      "Build and maintain responsive user interfaces using React and TypeScript",
      "Collaborate with designers to implement visual elements",
      "Write clean, maintainable, and testable code",
      "Optimize applications for maximum speed and scalability",
      "Participate in code reviews and mentor junior developers"
    ],
    requirements: [
      "5+ years of experience in frontend development",
      "Expert knowledge of React, TypeScript, and modern JavaScript",
      "Experience with state management libraries (Redux, Zustand, etc.)",
      "Strong understanding of responsive design and cross-browser compatibility",
      "Familiarity with performance optimization techniques",
      "Excellent problem-solving skills and attention to detail"
    ],
    benefits: [
      "Competitive salary and equity options",
      "Comprehensive health, dental, and vision insurance",
      "Flexible work hours and remote work options",
      "Professional development budget",
      "Modern equipment and ergonomic workspace"
    ],
    postedDate: "2 days ago",
    featured: true,
    verified: true,
    tags: ["React", "TypeScript", "Redux", "CSS", "HTML"]
  },
  {
    id: "2",
    title: "Product Designer",
    company: "DesignHub",
    location: "Delhi, India",
    type: "Full-time",
    salary: "7LPA - 12LPA",
    description: `DesignHub is seeking a talented Product Designer to join our growing team. In this role, you will work on creating intuitive and visually appealing user interfaces for our digital products.

You'll collaborate with product managers, engineers, and other designers to define and implement innovative solutions for product direction, visuals, and experience.`,
    responsibilities: [
      "Create user-centered designs by understanding business requirements, user feedback, and research",
      "Develop wireframes, prototypes, and high-fidelity mockups",
      "Contribute to design systems and style guides",
      "Conduct user testing and iterate designs based on feedback",
      "Collaborate with developers to ensure proper implementation of designs"
    ],
    requirements: [
      "3+ years of experience in product design or UX/UI design",
      "Proficiency in design tools such as Figma, Sketch, or Adobe XD",
      "Strong portfolio demonstrating UX problem-solving and visual design skills",
      "Understanding of user-centered design principles",
      "Excellent communication and collaboration skills"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "Flexible work schedule and remote options",
      "Professional development stipend",
      "Creative workspace and design resources"
    ],
    postedDate: "5 days ago",
    verified: true,
    tags: ["UI/UX", "Figma", "Product Design", "User Research", "Prototyping"]
  },
  {
    id: "3",
    title: "Full Stack Developer",
    company: "Innovate Solutions",
    location: "Austin, TX",
    type: "Full-time",
    remote: true,
    salary: "$100,000 - $130,000",
    description: `Innovate Solutions is looking for a talented Full Stack Developer to help build and scale our web applications. You'll work across the entire stack, from frontend interfaces to backend systems and databases.

The ideal candidate has experience with both frontend and backend technologies and is comfortable working in a fast-paced environment.`,
    responsibilities: [
      "Develop and maintain web applications using modern JavaScript frameworks",
      "Build and optimize backend services and APIs",
      "Work with databases to design schemas and write efficient queries",
      "Implement security and data protection measures",
      "Collaborate with cross-functional teams to define features and roadmap"
    ],
    requirements: [
      "4+ years of full stack development experience",
      "Proficiency in React, Node.js, and Express",
      "Experience with relational and NoSQL databases",
      "Understanding of RESTful API design principles",
      "Familiarity with cloud services (AWS, Azure, or GCP)"
    ],
    benefits: [
      "Competitive compensation package",
      "Comprehensive health benefits",
      "Flexible work arrangements",
      "Continuing education allowance",
      "Regular team events and retreats"
    ],
    postedDate: "1 week ago",
    featured: true,
    tags: ["JavaScript", "React", "Node.js", "MongoDB", "Express"]
  },
  {
    id: "4",
    title: "Data Scientist",
    company: "DataMinds",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    description: `DataMinds is seeking a Data Scientist to join our analytics team. You will analyze complex data sets, build predictive models, and extract actionable insights to drive business decisions.

The ideal candidate has a strong background in statistics, machine learning, and programming, with experience in applying these skills to solve real-world problems.`,
    responsibilities: [
      "Collect, preprocess, and analyze large datasets",
      "Develop machine learning models and algorithms",
      "Communicate findings and recommendations to stakeholders",
      "Collaborate with engineering teams to implement data-driven solutions",
      "Stay current with the latest developments in data science and machine learning"
    ],
    requirements: [
      "Master's or PhD in Computer Science, Statistics, or related field",
      "3+ years of experience in data science or machine learning",
      "Proficiency in Python and data analysis libraries (NumPy, Pandas, etc.)",
      "Experience with machine learning frameworks (TensorFlow, PyTorch, etc.)",
      "Strong communication and presentation skills"
    ],
    benefits: [
      "Industry-leading compensation",
      "Comprehensive benefits package",
      "Flexible working hours",
      "Conference and education budget",
      "State-of-the-art tools and resources"
    ],
    postedDate: "3 days ago",
    verified: true,
    tags: ["Python", "Machine Learning", "Statistics", "Data Analysis", "SQL"]
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "CloudTech Systems",
    location: "Seattle, WA",
    type: "Full-time",
    remote: true,
    salary: "$115,000 - $145,000",
    description: `CloudTech Systems is looking for a DevOps Engineer to help us build and maintain our cloud infrastructure. You will be responsible for designing, implementing, and managing our deployment pipelines and infrastructure as code.

The ideal candidate has experience with cloud platforms, containerization, and CI/CD pipelines, with a focus on automation and reliability.`,
    responsibilities: [
      "Design and implement CI/CD pipelines",
      "Manage cloud infrastructure using infrastructure as code",
      "Monitor system performance and troubleshoot issues",
      "Implement security best practices and compliance measures",
      "Collaborate with development teams to optimize deployment processes"
    ],
    requirements: [
      "4+ years of experience in DevOps or SRE roles",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Proficiency with containerization and orchestration (Docker, Kubernetes)",
      "Knowledge of infrastructure as code tools (Terraform, CloudFormation)",
      "Familiarity with monitoring and logging solutions"
    ],
    benefits: [
      "Competitive salary and equity",
      "Premium health, dental, and vision coverage",
      "Flexible work options",
      "Annual learning budget",
      "Work-life balance and wellness programs"
    ],
    postedDate: "4 days ago",
    featured: true,
    verified: true,
    tags: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD"]
  },
  {
    id: "6",
    title: "Mobile App Developer",
    company: "AppWorks",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$95,000 - $125,000",
    description: `AppWorks is seeking a talented Mobile App Developer to join our product team. You'll be responsible for developing and maintaining mobile applications for iOS and Android platforms.

The ideal candidate has experience with React Native or Flutter, with a track record of delivering high-quality mobile applications.`,
    responsibilities: [
      "Develop and maintain cross-platform mobile applications",
      "Collaborate with designers to implement UI/UX features",
      "Optimize application performance and responsiveness",
      "Integrate with backend services and APIs",
      "Implement automated testing for mobile applications"
    ],
    requirements: [
      "3+ years of experience in mobile app development",
      "Proficiency in React Native or Flutter",
      "Experience with native app development (iOS/Android) is a plus",
      "Understanding of mobile app architecture and design patterns",
      "Familiarity with mobile app deployment and distribution processes"
    ],
    benefits: [
      "Competitive salary package",
      "Comprehensive health benefits",
      "Remote work options",
      "Professional growth opportunities",
      "Team building events and activities"
    ],
    postedDate: "1 week ago",
    tags: ["React Native", "Flutter", "iOS", "Android", "Mobile Development"]
  },
  {
    id: "7",
    title: "Backend Engineer",
    company: "ServerStack",
    location: "Remote",
    type: "Full-time",
    remote: true,
    salary: "$105,000 - $135,000",
    description: `ServerStack is looking for a Backend Engineer to help us build scalable and reliable server-side applications. You will be responsible for designing and implementing APIs, microservices, and database systems.

The ideal candidate has strong experience with server-side languages and frameworks, database design, and API development.`,
    responsibilities: [
      "Design and implement scalable backend services and APIs",
      "Optimize database schemas and queries for performance",
      "Ensure high availability and reliability of services",
      "Implement security measures and data protection",
      "Collaborate with frontend developers to integrate client and server components"
    ],
    requirements: [
      "4+ years of backend development experience",
      "Proficiency in languages such as Node.js, Python, or Java",
      "Experience with database systems (SQL and NoSQL)",
      "Knowledge of API design principles and patterns",
      "Familiarity with microservices architecture"
    ],
    benefits: [
      "Competitive compensation",
      "Comprehensive benefits package",
      "Fully remote position",
      "Flexible working hours",
      "Professional development opportunities"
    ],
    postedDate: "6 days ago",
    verified: true,
    tags: ["Node.js", "API Development", "Databases", "Microservices", "Backend"]
  },
  {
    id: "8",
    title: "QA Engineer",
    company: "Quality Assurance Tech",
    location: "Denver, CO",
    type: "Full-time",
    salary: "$80,000 - $110,000",
    description: `Quality Assurance Tech is seeking a QA Engineer to ensure the quality of our software products. You will be responsible for designing and implementing tests, identifying bugs, and working with development teams to resolve issues.

The ideal candidate has experience with manual and automated testing, with a keen eye for detail and a passion for quality.`,
    responsibilities: [
      "Design and execute test plans and test cases",
      "Develop and maintain automated test scripts",
      "Identify, document, and track software defects",
      "Collaborate with development teams to resolve issues",
      "Participate in code reviews and provide feedback"
    ],
    requirements: [
      "3+ years of experience in software testing",
      "Experience with test automation frameworks",
      "Knowledge of software development methodologies",
      "Strong analytical and problem-solving skills",
      "Excellent communication and documentation abilities"
    ],
    benefits: [
      "Competitive salary",
      "Health, dental, and vision insurance",
      "Flexible work schedule",
      "Professional development budget",
      "Company-sponsored events and activities"
    ],
    postedDate: "2 weeks ago",
    tags: ["QA", "Automated Testing", "Test Planning", "Bug Tracking", "Test Cases"]
  }
];

// Function to filter jobs by search query
export const filterJobs = (query: string): Job[] => {
  if (!query.trim()) return jobs;
  
  const lowerCaseQuery = query.toLowerCase().trim();
  
  return jobs.filter(
    job => 
      job.title.toLowerCase().includes(lowerCaseQuery) ||
      job.company.toLowerCase().includes(lowerCaseQuery) ||
      job.location.toLowerCase().includes(lowerCaseQuery) ||
      (job.tags && job.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery)))
  );
};

// Function to get a job by id
export const getJobById = (id: string): Job | undefined => {
  return jobs.find(job => job.id === id);
};
