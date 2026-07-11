export default function Home() {
  const projects = [
    {
      title: "Opportunity → POS Automation",
      desc: "Automated opportunity matching process using Salesforce, Apex and integrations."
    },
    {
      title: "Marketing Analytics Platform",
      desc: "Unified reporting using Tableau, SQL, Google Analytics and data warehouse."
    },
    {
      title: "Sitecore Accessibility Initiative",
      desc: "Improved accessibility compliance and user experience across enterprise websites."
    },
    {
      title: "Trade-In Automation",
      desc: "Automated trade-in workflows and approval processes in Salesforce."
    }
  ];

  return (
    <main>

      <section className="hero">
        <p className="tag">Salesforce × Analytics × AI</p>

        <h1>
          LAXMI
          <br />
          PATIL
        </h1>

        <h2>
          Building Intelligent Enterprise Solutions Through CRM,
          Analytics & Artificial Intelligence.
        </h2>

        <div className="buttons">
          work" className="btn">
            View Work
          </a>

          /resume.pdf
            Download Resume
          </a>
        </div>
      </section>

      <section className="about">
        <h3>ABOUT</h3>

        <p>
          I help organizations transform data into intelligent business
          decisions.
        </p>

        <p>
          My background combines Salesforce development, Tableau analytics,
          enterprise automation and artificial intelligence to build scalable
          business solutions that create measurable impact.
        </p>
      </section>

      <section id="work">
        <h3>FEATURED WORK</h3>

        <div className="projects">
          {projects.map((project) => (
            <div className="projectCard" key={project.title}>
              <h4>{project.title}</h4>
              <p>{project.desc}</p>
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
          <div>2026 — AI Portfolio & Intelligent Solutions</div>
          <div>Future — AI Solutions Architect</div>
        </div>
      </section>

      <section>
        <h3>SKILLS</h3>

        <div className="skills">
          <div>Salesforce 95%</div>
          <div>Tableau 90%</div>
          <div>Apex / LWC 94%</div>
          <div>SQL 92%</div>
          <div>Python 85%</div>
          <div>AI / ML 80%</div>
        </div>
      </section>

      <section>
        <h3>CERTIFICATIONS</h3>

        <div className="projects">
          <div className="projectCard">Salesforce Certifications</div>
          <div className="projectCard">Tableau Certifications</div>
          <div className="projectCard">AI Certifications</div>
        </div>
      </section>

      <section>
        <h3>CONTACT</h3>

        <p>GitHub</p>
        <p>LinkedIn</p>
        <p>Email</p>
      </section>

    </main>
  );
}
