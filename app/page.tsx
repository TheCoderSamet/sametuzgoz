"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ViewCounter from "@/components/ViewCounter";

type ModalId =
  | "web-development"
  | "backend-rest-api"
  | "cloud-computing"
  | "containerisation-devops"
  | "cyber"
  | "machine-learning"
  | "ux-ui"
  | "mobile-development"
  | "academic"
  | null;

const projectCards = [
  {
    id: "web-development" as const,
    number: "01",
    title: "Web Development",
    type: "PORTFOLIO & FRONT-END",
    description:
      "Frontend and website development work focused on building responsive, user-friendly portfolio and academic web projects.",
  },
  {
    id: "backend-rest-api" as const,
    number: "02",
    title: "Backend & REST API Development",
    type: "BACKEND DEVELOPMENT",
    description:
      "Practical backend development work focused on creating REST APIs, handling requests and connecting frontend applications with server-side logic.",
  },
  {
    id: "cloud-computing" as const,
    number: "03",
    title: "Cloud Computing & Deployment",
    type: "CLOUD DEPLOYMENT",
    description:
      "Academic and practical work focused on deploying web applications using cloud services, static hosting, CDN delivery and serverless backend concepts.",
  },
  {
    id: "containerisation-devops" as const,
    number: "04",
    title: "Containerisation & DevOps Practice",
    type: "DOCKER & DEVOPS",
    description:
      "Academic work focused on packaging applications into containers and understanding modern deployment workflows.",
  },
  {
    id: "cyber" as const,
    number: "05",
    title: "Cyber Security",
    type: "SECURITY PRACTICE",
    description:
      "Academic work focused on workplace cyber security awareness, common security risks and best practices.",
  },
  {
    id: "machine-learning" as const,
    number: "06",
    title: "Machine Learning & AI",
    type: "DATA & AI",
    description:
      "Academic machine learning work focused on understanding AI opportunities, preparing datasets and evaluating predictive models.",
  },
  {
    id: "ux-ui" as const,
    number: "07",
    title: "User Interface & UX/UI Design",
    type: "UX/UI DESIGN",
    description:
      "Study work focused on designing user-friendly digital experiences and improving website usability.",
  },
  {
    id: "mobile-development" as const,
    number: "08",
    title: "Mobile App Development",
    type: "MOBILE APPLICATIONS",
    description:
      "Academic and practical learning focused on mobile application structure, user interaction, screens, navigation and mobile-first interface design.",
  },
  {
    id: "academic" as const,
    number: "09",
    title: "Academic Projects",
    type: "APPLICATION DEVELOPMENT",
    description:
      "Selected mobile application and software projects developed during my IT learning journey.",
  },
];

const education = [
  {
    date: "DEC 2024 — DEC 2026",
    title: "Advanced Diploma of Information Technology",
    institution: "Laneway Education, Melbourne",
    description:
      "Developing practical skills in software development, web technologies, cyber security, artificial intelligence, cloud computing, REST APIs and modern digital solutions.",
    current: true,
  },
  {
    date: "NOV 2022 — MAY 2024",
    title: "English Language Studies",
    institution: "Lonsdale Institute, Melbourne",
    description:
      "Improved my English communication and academic language skills after moving to Australia, supporting my transition into further study and professional development.",
    current: false,
  },
  {
    date: "SEP 2018 — JUL 2022",
    title: "Bachelor's Degree in Mathematics",
    institution: "Dumlupinar University, Kutahya",
    description:
      "Completed my bachelor's degree in Mathematics, developing strong analytical thinking, problem-solving and logical reasoning skills.",
    current: false,
  },
];

export default function Home() {
  const [activeModal, setActiveModal] = useState<ModalId>(null);

  useEffect(() => {
    if (!activeModal) return;

    document.body.style.overflow = "hidden";

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveModal(null);
    };

    window.addEventListener("keydown", closeWithEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [activeModal]);

  return (
    <div className="page">
      <header className="header">
        <nav className="container nav">
          <a href="#home" className="brand">
            SAMET <span>UZGOZ</span>
          </a>

          <div className="navLinks">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container heroGrid">
            <div className="heroText">
              <p className="overline">IT STUDENT &amp; WEB DEVELOPER</p>

              <h1>
                Samet
                <br />
                <span>Uzgoz.</span>
              </h1>

              <p className="intro">
                Information Technology student based in Melbourne with a
                Mathematics background, focused on web development, backend
                systems, cybersecurity and machine learning.
              </p>

              <div className="heroActions">
                <a href="#projects" className="mainButton">
                  View Projects
                </a>

                <a href="#contact" className="textButton">
                  Contact Me <span>→</span>
                </a>
              </div>
            </div>

            <div className="heroVisual">
              <div className="visualBorder">
                <Image
                  src="/samet-profile.png"
                  alt="Samet Uzgoz"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 395px"
                  className="profilePhoto"
                />

                <div className="profilePhotoOverlay" aria-hidden="true" />

                <div className="visualMeta">
                  <div className="visualInfo">
                    <p>Based in</p>
                    <strong>Melbourne, AU</strong>
                  </div>

                  <ViewCounter />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about section">
          <div className="container aboutGrid">
            <div>
              <p className="sectionLabel">ABOUT</p>
              <h2>
                Analytical thinking
                <br />
                meets technology.
              </h2>
            </div>

            <div className="aboutContent">
            <p>
              I completed my Bachelor&apos;s Degree in Mathematics between 2018 and
             2022, where I developed strong analytical thinking, logical reasoning
             and problem-solving skills. After graduating, I moved to Australia and
             improved my English through formal language studies.
            </p>

            <p>
              In 2024, I began the Advanced Diploma of Information Technology program.
              Since then, I have been building practical skills in web development,
              backend systems, cloud technologies, cybersecurity and machine learning.
              I am a fast learner who enjoys understanding new technologies and applying
              them to real projects.
            </p>

            <p>
              I am disciplined, motivated and adaptable. I take responsibility for my
              learning, solve problems step by step and continuously work to improve my
              technical and professional skills.
            </p>

              <div className="profileDetails">
                <div>
                  <span>Location</span>
                  <strong>Melbourne, Australia</strong>
                </div>
                <div>
                  <span>Background</span>
                  <strong>Mathematics Graduate</strong>
                </div>
                <div>
                  <span>Current Study</span>
                  <strong>Information Technology</strong>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="projects" className="projects section">
          <div className="container">
            <div className="sectionTop">
              <div>
                <p className="sectionLabel">PROJECTS</p>
                <h2>Project and Academic Summary</h2>
              </div>

              <a
                href="https://github.com/TheCoderSamet"
                target="_blank"
                rel="noopener noreferrer"
                className="github"
              >
                GitHub Profile ↗
              </a>
            </div>

            <div className="projectGrid">
              {projectCards.map((project) => (
                <button
                  className="projectCard"
                  type="button"
                  key={project.id}
                  onClick={() => setActiveModal(project.id)}
                >
                  <div className="projectCardTop">
                    <span className="projectNumber">{project.number}</span>
                    <span className="viewProject">View Details ↗</span>
                  </div>

                  <div className="projectCardContent">
                    <p className="projectType">{project.type}</p>
                    <h3>{project.title}</h3>
                    <p className="projectText">{project.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="education section">
          <div className="container educationGrid">
            <div className="educationHeading">
              <p className="sectionLabel">EDUCATION</p>
              <h2>
                Academic
                <br />
                Background
              </h2>
            </div>

            <div className="educationTimeline">
              {education.map((item) => (
                <article className="educationItem" key={item.title}>
                  <div className="educationDate">
                    <span className={item.current ? "timelineDot current" : "timelineDot"} />
                    <p>{item.date}</p>
                  </div>

                  <div className="educationContent">
                    {item.current && (
                      <span className="currentBadge">CURRENT STUDY</span>
                    )}
                    <h3>{item.title}</h3>
                    <p className="college">{item.institution}</p>
                    <p className="educationDescription">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container contactBox">
            <p className="sectionLabel">CONTACT</p>
            <h2>Let&apos;s connect.</h2>
            <p className="contactText">
              Open to connecting about IT projects, learning opportunities and
              professional development.
            </p>

            <div className="contactLinks">
              <a href="mailto:sametuzzg@hotmail.com" className="emailLink">
                sametuzzg@hotmail.com
              </a>

              <div className="socialLinks" aria-label="Social links">
                <a
                  href="https://github.com/TheCoderSamet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialIcon"
                  aria-label="GitHub profile"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.96c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.81-4.57 5.07.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/sametuzgoz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialIcon"
                  aria-label="LinkedIn profile"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.38 8.06h4.24V23H.38V8.06ZM7.33 8.06h4.06v2.04h.06c.57-1.08 1.96-2.22 4.03-2.22 4.31 0 5.11 2.84 5.11 6.53V23h-4.24v-7.62c0-1.82-.03-4.16-2.53-4.16-2.54 0-2.93 1.99-2.93 4.03V23H7.33V8.06Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <p>© 2026 Samet Uzgoz</p>
          <p>Personal IT Portfolio</p>
        </div>
      </footer>

      {activeModal && (
        <div
          className="modalBackdrop"
          onMouseDown={() => setActiveModal(null)}
          role="presentation"
        >
          <div
            className="projectModal"
            role="dialog"
            aria-modal="true"
            aria-label="Project details"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modalClose"
              onClick={() => setActiveModal(null)}
              aria-label="Close project details"
            >
              ×
            </button>

            {activeModal === "mobile-development" && (
              <div className="modalBody">
                <p className="modalLabel">MOBILE APPLICATIONS</p>
                <h2>Mobile App Development</h2>
                <p className="modalIntro">
                  Academic and practical learning focused on designing and
                  developing mobile app experiences with clear screens,
                  navigation, interaction flow and user-friendly interfaces.
                </p>

                <div className="modalColumns">
                  <div className="modalPanel">
                    <h3>Mobile App Skills</h3>
                    <ul>
                      <li>Explored mobile app structure, screen planning and user flow.</li>
                      <li>Practised mobile-first interface thinking for app-based projects.</li>
                      <li>Worked with mobile development concepts through React Native and Expo projects.</li>
                    </ul>
                  </div>

                  <div className="modalPanel">
                    <h3>Project Practice</h3>
                    <ul>
                      <li>Designed app features such as reminders, progress tracking and QR scanning.</li>
                      <li>Connected mobile app ideas with authentication, data storage and user interaction.</li>
                      <li>Improved understanding of how mobile applications solve practical user problems.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeModal === "academic" && (
              <div className="modalBody">
                <p className="modalLabel">APPLICATION DEVELOPMENT</p>
                <h2>Academic Projects</h2>
                <p className="modalIntro">
                  Selected applications developed as part of my practical IT
                  learning and software development experience.
                </p>

                <div className="modalRepoList">
                  <article className="modalRepo">
                    <div>
                      <h3>Subscription App</h3>
                      <p>
                        A mobile subscription and expense tracker with payment
                        dates, recurring expenses, reminders and authentication.
                      </p>
                      <div className="modalTags">
                        <span>React Native</span>
                        <span>Expo</span>
                        <span>Supabase</span>
                        <span>TypeScript</span>
                      </div>
                    </div>
                    <a
                      href="https://github.com/TheCoderSamet/Subscription-App"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Repo ↗
                    </a>
                  </article>

                  <article className="modalRepo">
                    <div>
                      <h3>SoberStreak</h3>
                      <p>
                        A mobile habit-tracking project designed to support
                        users in building healthier routines and viewing their
                        progress.
                      </p>
                      <div className="modalTags">
                        <span>Mobile App</span>
                        <span>Progress Tracking</span>
                        <span>User Interface</span>
                      </div>
                    </div>
                    <a
                      href="https://github.com/TheCoderSamet/SoberStreak"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Repo ↗
                    </a>
                  </article>

                  <article className="modalRepo">
                    <div>
                      <h3>SmartReturn QR Scanner</h3>
                      <p>
                        A shopping and return management app featuring QR code
                        scanning, buyer/seller access and return status tracking.
                      </p>
                      <div className="modalTags">
                        <span>React Native</span>
                        <span>Expo</span>
                        <span>Firebase</span>
                        <span>QR Scanner</span>
                      </div>
                    </div>
                    <a
                      href="https://github.com/TheCoderSamet/SmartReturnWithQrScanner"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Repo ↗
                    </a>
                  </article>
                </div>
              </div>
            )}

            {activeModal === "backend-rest-api" && (
              <div className="modalBody">
                <p className="modalLabel">BACKEND DEVELOPMENT</p>
                <h2>Backend &amp; REST API Development</h2>
                <p className="modalIntro">
                  Practical backend development work focused on creating REST
                  APIs, handling requests and connecting frontend applications
                  with server-side logic.
                </p>

                <div className="modalColumns">
                  <div className="modalPanel">
                    <h3>API Development</h3>
                    <ul>
                      <li>Built basic REST API endpoints using Node.js and Express.</li>
                      <li>Practised route structure, request handling and JSON responses.</li>
                      <li>Tested API requests and responses during development.</li>
                    </ul>
                  </div>

                  <div className="modalPanel">
                    <h3>Frontend Connection</h3>
                    <ul>
                      <li>Connected frontend features with backend logic.</li>
                      <li>Explored how client-side pages communicate with server-side APIs.</li>
                      <li>Learned deployment basics for backend and API projects.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeModal === "cloud-computing" && (
              <div className="modalBody">
                <p className="modalLabel">CLOUD DEPLOYMENT</p>
                <h2>Cloud Computing &amp; Deployment</h2>
                <p className="modalIntro">
                  Academic and practical work focused on deploying web
                  applications using cloud services, static hosting, CDN
                  delivery and serverless backend concepts.
                </p>

                <div className="modalColumns">
                  <div className="modalPanel">
                    <h3>Hosting &amp; Delivery</h3>
                    <ul>
                      <li>Hosted a static portfolio website using AWS S3 and CloudFront.</li>
                      <li>Learned CDN, HTTPS delivery and static website hosting concepts.</li>
                      <li>Practised cloud service configuration and deployment troubleshooting.</li>
                    </ul>
                  </div>

                  <div className="modalPanel">
                    <h3>Serverless Concepts</h3>
                    <ul>
                      <li>Explored serverless backend concepts using API Gateway and Lambda.</li>
                      <li>Practised using DynamoDB concepts for simple cloud data storage.</li>
                      <li>Connected cloud services to portfolio and web application workflows.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeModal === "containerisation-devops" && (
              <div className="modalBody">
                <p className="modalLabel">DOCKER &amp; DEVOPS</p>
                <h2>Containerisation &amp; DevOps Practice</h2>
                <p className="modalIntro">
                  Academic work focused on packaging applications into
                  containers and understanding modern deployment workflows.
                </p>

                <div className="modalColumns">
                  <div className="modalPanel">
                    <h3>Containerisation</h3>
                    <ul>
                      <li>Created Docker images for simple web and API applications.</li>
                      <li>Used Dockerfile, image tags, container ports and runtime testing.</li>
                      <li>Practised troubleshooting container build and execution issues.</li>
                    </ul>
                  </div>

                  <div className="modalPanel">
                    <h3>Deployment Workflow</h3>
                    <ul>
                      <li>Learned basic DevOps concepts including portability and consistency.</li>
                      <li>Explored how containers support repeatable development environments.</li>
                      <li>Practised checking running containers, ports and application output.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}


            {activeModal === "cyber" && (
              <div className="modalBody">
                <p className="modalLabel">CYBER SECURITY</p>
                <h2>Cyber Security Awareness</h2>
                <p className="modalIntro">
                  Academic work focused on improving cyber security awareness
                  within the aviation industry and examining practical security
                  risks.
                </p>

                <div className="modalColumns">
                  <div className="modalPanel">
                    <h3>Research &amp; Awareness</h3>
                    <ul>
                      <li>Designed a cyber security awareness survey and analysed responses.</li>
                      <li>Examined phishing, human error, MFA and workplace security practices.</li>
                      <li>Prepared recommendations for stronger employee awareness and reporting.</li>
                    </ul>
                  </div>

                  <div className="modalPanel">
                    <h3>Practical Activities</h3>
                    <ul>
                      <li>Completed phishing awareness and email security activities.</li>
                      <li>Practised web vulnerability testing using OWASP Juice Shop.</li>
                      <li>Performed networking activities using Nmap and Netcat.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeModal === "machine-learning" && (
              <div className="modalBody">
                <p className="modalLabel">MACHINE LEARNING</p>
                <h2>Machine Learning &amp; AI</h2>
                <p className="modalIntro">
                  Academic machine learning work focused on understanding AI
                  opportunities, preparing datasets and evaluating predictive
                  models through practical Python tasks.
                </p>

                <div className="modalColumns">
                  <div className="modalPanel">
                    <h3>Model Development</h3>
                    <ul>
                      <li>Worked with prediction and intrusion detection datasets.</li>
                      <li>Prepared features using encoding, scaling and data cleaning.</li>
                      <li>Used dimensionality reduction concepts including PCA.</li>
                    </ul>
                  </div>

                  <div className="modalPanel">
                    <h3>Evaluation</h3>
                    <ul>
                      <li>Trained classification models using Python.</li>
                      <li>Evaluated accuracy, precision, recall and F1-score.</li>
                      <li>Interpreted confusion matrix results and model performance.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeModal === "ux-ui" && (
              <div className="modalBody">
                <p className="modalLabel">UX/UI DESIGN</p>
                <h2>User Interface &amp; UX/UI Design</h2>
                <p className="modalIntro">
                  Academic work focused on designing clear, user-friendly interfaces
                  and thinking about how visitors move through a website with comfort
                  and clarity.
                </p>

                <div className="modalColumns">
                  <div className="modalPanel">
                    <h3>User Experience</h3>
                    <ul>
                      <li>Designed user interfaces with readability and usability in mind.</li>
                      <li>Considered user experience when planning content and interactions.</li>
                      <li>Built a user-friendly web experience across key portfolio sections.</li>
                    </ul>
                  </div>

                  <div className="modalPanel">
                    <h3>Layout &amp; Visual Design</h3>
                    <ul>
                      <li>Structured page layout, navigation and section hierarchy.</li>
                      <li>Organised content flow between About, Education, Skills, Projects and Contact.</li>
                      <li>Applied modern, clean interface design principles throughout the site.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeModal === "web-development" && (
              <div className="modalBody">
                <p className="modalLabel">PORTFOLIO &amp; FRONT-END</p>
                <h2>Web Development</h2>
                <p className="modalIntro">
                  Academic and practical work focused on building this personal
                  portfolio website, from page structure and components to styling,
                  interactivity and published project content.
                </p>

                <div className="modalColumns">
                  <div className="modalPanel">
                    <h3>Structure &amp; Components</h3>
                    <ul>
                      <li>Applied HTML and CSS fundamentals to build clear page structure.</li>
                      <li>Developed the site using React and Next.js.</li>
                      <li>Organised sections such as Navbar, About, Education, Skills, Projects and Contact.</li>
                      <li>Planned page layout and section flow for a readable portfolio experience.</li>
                    </ul>
                  </div>

                  <div className="modalPanel">
                    <h3>Styling &amp; Interaction</h3>
                    <ul>
                      <li>Used modular styling approaches including SCSS and CSS Modules concepts.</li>
                      <li>Implemented modal and popup logic for project details.</li>
                      <li>Applied responsive design principles across screen sizes.</li>
                      <li>Prepared portfolio content, project cards and GitHub repository links.</li>
                    </ul>
                  </div>
                </div>

                <div className="modalRepoList">
                  <article className="modalRepo">
                    <div>
                      <h3>Personal Portfolio Website</h3>
                      <p>
                        This portfolio project showcasing my IT studies, technical
                        skills, academic background and selected project work.
                      </p>
                      <div className="modalTags">
                        <span>React</span>
                        <span>Next.js</span>
                        <span>TypeScript</span>
                        <span>Responsive UI</span>
                      </div>
                    </div>
                    <a
                      href="https://github.com/TheCoderSamet/sametuzgoz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Repo ↗
                    </a>
                  </article>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
