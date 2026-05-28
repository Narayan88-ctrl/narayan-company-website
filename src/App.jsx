import "./index.css";

const projects = [
  ["N-Builder", "AI Startup Factory", "Turns plain-language ideas into real software products using AI agents, FastAPI, React, debugging, and auto-healing workflows."],
  ["Sugar Retina AI", "Healthcare AI", "AI-assisted diabetic retinopathy screening with triage, explainable reports, image quality checks, and doctor-in-the-loop workflow."],
  ["Swissify", "Trustworthy AI", "Swiss-aligned AI infrastructure for enterprise workflows, copilots, governance, and responsible automation."],
  ["Robot Brain", "Industrial AI", "AI infrastructure for robotics, safety monitoring, computer vision, and real-world operational awareness."],
  ["Gymi Math AI", "Education AI", "AI-assisted math learning and Gymi preparation platform for structured student support."],
  ["BioOps AI", "DayOne Healthcare Innovation", "AI-assisted clinical operations and openEHR-inspired workflow system for healthcare coordination, evidence analysis, readiness tracking, and hospital innovation challenges."],
];

function App() {
  return (
    <main>
      <nav className="nav">
        <div className="logo">Narayan<span>.AI</span></div>
        <div className="links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#vision">Vision</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="badge">Building AI systems from Switzerland</div>
        <h1>Narayan Ranabhat</h1>
        <h2>AI Developer, Startup Builder & Creative Technologist</h2>
        <p>
          Building AI-powered systems across healthcare, robotics, automation,
          education, software infrastructure, and creative technology.
        </p>
        <div className="buttons">
          <a href="#projects" className="primary">Explore Projects</a>
          <a href="#contact" className="secondary">Contact</a>
        </div>
      </section>

      <section id="about" className="section two">
        <div>
          <p className="eyebrow">About</p>
          <h2>Founder building ambitious AI products with real-world impact.</h2>
        </div>
        <p>
          Narayan Ranabhat is an AI developer and startup builder based in
          Switzerland, focused on turning ambitious ideas into working software
          systems. His work combines engineering, automation, healthcare AI,
          robotics, education, and creative technology.
        </p>
      </section>

      <section id="projects" className="section">
        <p className="eyebrow center">Portfolio</p>
        <h2 className="center title">AI Systems & Startup Projects</h2>
        <div className="grid">
          {projects.map(([name, type, desc]) => (
            <div className="card" key={name}>
              <div className="icon">✦</div>
              <h3>{name}</h3>
              <h4>{type}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="vision" className="section vision">
        <p className="eyebrow center">Vision</p>
        <h2 className="center title">Building the Future of Intelligent Systems</h2>
        <p className="center big">
          AI should help build products, support doctors, improve safety, teach
          students, automate workflows, and unlock human creativity.
        </p>
      </section>

      <section id="contact" className="section contact">
        <h2>Let’s build intelligent systems.</h2>
        <p>
          Open to startup collaboration, pilot projects, innovation programs,
          healthcare AI partnerships, and creative technology opportunities.
        </p>
        <a href="mailto:ikchyarana585@gmail.com" className="primary">Email Me</a>
      </section>

      <footer>
        Built with vision, code, and intelligent systems. © {new Date().getFullYear()} Narayan Ranabhat.
      </footer>
    </main>
  );
}

export default App;
