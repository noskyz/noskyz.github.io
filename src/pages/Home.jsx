import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import About from "../components/About/About";
import Currently from "../components/Currently/Currently";
import Footer from "../components/Footer/Footer";

function Home() {
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "game", label: "Games" },
    { id: "software", label: "Software" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <>
      <Hero />

      <main>
        <Section
          id="work"
          eyebrow="Selected work"
          title="Projects"
          description="A selection of software and game development projects I've worked on."
        >
          <div className="projects-filters">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={`projects-filter ${activeFilter === filter.id ? "projects-filter--active" : ""
                  }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => navigate(`/work/${project.id}`)}
              />
            ))}
          </div>
        </Section>
      </main>

      <About />

      <Currently />

      <Footer />
    </>
  );
}

export default Home;