import { useNavigate } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({ project, onClick }) {
    const navigate = useNavigate();

    const handleStudioClick = (event) => {
        event.stopPropagation();

        if (project.studioLink) {
            navigate(project.studioLink);
        }
    };

    return (
        <article
            className="project-card"
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    onClick();
                }
            }}
        >
            <div className="project-card__image">
                <img
                    src={project.image}
                    alt={`${project.title} preview`}
                />

                <div className="project-card__image-overlay" />
            </div>

            <div className="project-card__content">
                <div className="project-card__meta">
                    <span className="project-card__category">
                        {project.category}
                    </span>

                    <span className="project-card__status">
                        <span className="project-card__status-dot" />
                        {project.status}
                    </span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-card__tags">
                    {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                    ))}
                </div>

                <div className="project-card__bottom">
                    <div className="project-card__studio-wrapper">
                        {project.studioLink ? (
                            <button
                                className="project-card__studio project-card__studio--link"
                                onClick={handleStudioClick}
                                type="button"
                            >
                                {project.studio}
                            </button>
                        ) : (
                            <span className="project-card__studio">
                                {project.studio}
                            </span>
                        )}
                    </div>

                    <span className="project-card__arrow">
                        ↗
                    </span>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;