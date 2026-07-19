import { BriefcaseBusiness, CalendarDays } from "lucide-react";

const experiences = [
  {
    company: "Piramal Finance Ltd.",
    role: "SDE Intern – Full Stack",
    duration: "Mar 2025 – Jul 2025",
    summary:
      "Worked as a Full Stack Software Development Engineer Intern, contributing to enterprise-level applications and backend microservices built using Java Spring Boot and React.js.",
    bullets: [
      "Drove the adoption of UCS across multiple Java Spring Boot backend microservices, aligning implementation with production timelines.",
      "Strengthened application security by implementing InfoSec-mandated headers such as HSTS, CSP, and X-Frame-Options.",
      "Implemented API rate limiting across critical endpoints to improve security and protect services from abusive traffic.",
      "Resolved vulnerabilities identified during security audits and contributed to compliance within project timelines.",
      "Served as a primary on-call engineer during production windows, troubleshooting high-priority issues within SLA timelines.",
      "Developed and maintained React.js frontend components integrated with Java Spring Boot REST APIs.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "React.js",
      "Rate Limiting",
      "HSTS",
      "CSP",
      "Git",
      "CI/CD",
    ],
  },
  {
    company: "MANIT ERP",
    role: "Industrial Training – Frontend Developer",
    duration: "Jul 2024 – Aug 2024",
    summary:
      "Worked as a Frontend Developer on the official MANIT ERP portal, contributing to the development and enhancement of digital services used for academic and administrative processes.",
    bullets: [
      "Worked on frontend features related to student payments, academic results, and registrations.",
      "Contributed to the integration of AI-enabled features to improve automation and the overall user experience.",
      "Worked with SQL-based student data to support seamless access and system functionality.",
      "Gained practical experience working on a real-world institutional ERP system and integrating frontend functionality with data-driven services.",
    ],
    technologies: ["Frontend Development", "JavaScript", "SQL", "AI Integration"],
  },
  {
    company: "JPMorgan Chase & Co.",
    role: "Virtual Internship",
    duration: "Jun 2024",
    summary:
      "Completed a virtual internship focused on understanding financial services, business analysis, and risk management.",
    bullets: [
      "Developed foundational skills in financial analysis and data modelling through project-based tasks.",
      "Gained experience in preparing and presenting insights for client-focused business scenarios.",
      "Developed an understanding of risk management concepts and cross-functional collaboration in the financial services industry.",
      "Gained exposure to strategic decision-making and analytical problem-solving in a global financial organization.",
    ],
    technologies: ["Financial Analysis", "Data Modelling", "Risk Management", "Client Presentation"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-background text-foreground">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A summary of my internships and professional experiences across full-stack development, product engineering, and financial services.
        </p>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="rounded-2xl border border-primary/20 bg-card p-6 md:p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                    <BriefcaseBusiness className="h-5 w-5" />
                    <span>{experience.company}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{experience.role}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>{experience.duration}</span>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-muted-foreground">{experience.summary}</p>

              <ul className="mt-5 space-y-2 text-sm text-foreground/90">
                {experience.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/70 text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
