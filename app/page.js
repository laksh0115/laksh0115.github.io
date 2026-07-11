export default function Home() {
  const projects = [
    {
      title: "Opportunity to POS Automation",
      description:
        "Automated Opportunity-to-POS matching workflow using Salesforce, Apex and integrations.",
    },
    {
      title: "Trade-In Automation",
      description:
        "Streamlined trade-in request processing and approval automation.",
    },
    {
      title: "Marketing Analytics Platform",
      description:
        "Unified Tableau reporting with marketing and web analytics.",
    },
    {
      title: "Sitecore Accessibility Project",
      description:
        "Enhanced accessibility compliance and user experience.",
    },
  ];

  return (
    <main>
      <section className="hero">
        <p className="tag">
          Salesforce Developer • Tableau Developer • AI Graduate Student
        </p>

        <h1>
          LAXMI
          <br />
          PATIL
        </h1>

        <h2>
          Building Intelligent Enterprise Solutions Through CRM,
          Analytics & Artificial Intelligence
        </h2>

        <div className="buttons">
          #work
            View Work
          </a>

          /resume.pdf
            Download Resume
          </a>
        </div>
      </section>

      <section id="work">
        <h3>FEATURED WORK</h3>

        <div className="projects">
          {projects.map((project) => (
            <div className="projectCard" key={project.title}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3>CAREER JOURNEY</h3>

        <div className="timeline">
          <div>2022 — Master's in Data Science</div>
          <div>2023 — Salesforce & Tableau Developer</div>
          <div>2024 — Enterprise Automation Projects</div>
          <div>2025 — Master's in Artificial Intelligence</div>
          <div>2026 — AI Portfolio Development</div>
          <div>Future — AI Solutions Architect</div>
        </div>
      </section>

      <section>
        <h3>SKILLS</h3>

        <div className="skills">
          <div>Salesforce — 95%</div>
          <div>Apex / LWC — 94%</div>
          <div>Tableau — 90%</div>
          <div>SQL — 92%</div>
          <div>Python — 85%</div>
          <div>AI / Machine Learning — 80%</div>
          <div>Sitecore — 85%</div>
        </div>
      </section>

      <section>
        <h3>CONTACT</h3>

        <div className="timeline">
          <div>GitHub: github.com/laksh0115</div>
          <div>LinkedIn: Add Your LinkedIn URL</div>
          <div>Email: Add Your Email</div>
        </div>
      </section>
    </main>
  );
}
