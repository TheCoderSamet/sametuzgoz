"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ViewCounter from "@/components/ViewCounter";

type ModalId = "academic" | "cyber" | "machine-learning" | null;

const skills = [
  "HTML & CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "GitHub",
  "Cyber Security",
  "Machine Learning",
];

const projectCards = [
  {
    id: "academic" as const,
    number: "01",
    title: "Academic Projects",
    type: "APPLICATION DEVELOPMENT",
    description:
      "Selected mobile application and software projects developed during my IT learning journey.",
  },
  {
    id: "cyber" as const,
    number: "02",
    title: "Cyber Security",
    type: "SECURITY PRACTICE",
    description:
      "Academic security work covering awareness, risk analysis and practical testing activities.",
  },
  {
    id: "machine-learning" as const,
    number: "03",
    title: "Machine Learning",
    type: "DATA & AI",
    description:
      "Practical academic work involving datasets, model training and performance evaluation.",
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
    date: "2022 — PAUSED",
    title: "Veterinary Technician and Laboratory Sciences",
    institution: "Anadolu University, Eskisehir",
    description:
      "Started this program and continued until half a semester before completion. I paused my studies after making the decision to move to Australia.",
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
                Mathematics graduate and Information Technology student based
                in Melbourne, focused on software development, system
                administration and cybersecurity.
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
                I completed my Bachelor&apos;s Degree in Mathematics between
                2018 and 2022. After graduating, I moved to Australia and
                improved my English through formal language studies.
              </p>

              <p>
                In 2024, I began the Advanced Diploma of Information
                Technology program. My interest in technology has led me to
                focus on software development, system administration and
                cybersecurity.
              </p>

              <p>
                I am a disciplined individual who enjoys learning and is
                determined to achieve personal and professional growth.
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

              <div className="skills">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects section">
          <div className="container">
            <div className="sectionTop">
              <div>
                <p className="sectionLabel">PROJECTS</p>
                <h2>Selected Projects</h2>
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
              <a href="mailto:samet.uzg@gmail.com">samet.uzg@gmail.com</a>
              <a
                href="https://github.com/TheCoderSamet"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/TheCoderSamet
              </a>
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
                <h2>Machine Learning Model</h2>
                <p className="modalIntro">
                  Academic data and AI work focused on training models and
                  evaluating prediction results through practical Python tasks.
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
          </div>
        </div>
      )}
    </div>
  );
}
