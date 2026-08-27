import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetails() {
    const { projectId } = useParams();
    const navigate = useNavigate();

    const project = projects.find(
        (item) => item.id === projectId
    );

    const [currentImage, setCurrentImage] = useState(0);

    const gallery = project?.gallery || [project?.image];

    const nextImage = () => {
        setCurrentImage((current) =>
            current === gallery.length - 1 ? 0 : current + 1
        );
    };

    const previousImage = () => {
        setCurrentImage((current) =>
            current === 0 ? gallery.length - 1 : current - 1
        );
    };

    if (!project) {
        return (
            <main className="project-details project-details--not-found">
                <div className="container">
                    <span className="project-details__eyebrow">
                        PROJECT NOT FOUND
                    </span>

                    <h1>Project not found.</h1>

                    <button
                        type="button"
                        onClick={() => navigate("/")}
                    >
                        ← Back to projects
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className="project-details">
            <div className="container">

                <button
                    type="button"
                    className="project-details__back"
                    onClick={() => navigate("/")}
                >
                    ← Back to projects
                </button>


                {/* HEADER */}

                <header className="project-details__header">

                    <div className="project-details__meta">
                        <span>{project.category}</span>

                        <span className="project-details__status">
                            <span className="project-details__status-dot" />
                            {project.status}
                        </span>
                    </div>

                    <h1>{project.title}</h1>

                    <p className="project-details__description">
                        {project.description}
                    </p>

                    <div className="project-details__technologies">
                        {project.technologies.map((technology) => (
                            <span key={technology}>
                                {technology}
                            </span>
                        ))}
                    </div>

                </header>


                {/* GALLERY */}

                <section className="project-details__gallery-section">

                    <div className="project-details__gallery">

                        <button
                            type="button"
                            className="project-details__gallery-button project-details__gallery-button--previous"
                            onClick={previousImage}
                            aria-label="Previous image"
                        >
                            ←
                        </button>

                        <div className="project-details__gallery-image">
                            <img
                                src={gallery[currentImage]}
                                alt={`${project.title} screenshot ${currentImage + 1}`}
                            />
                        </div>

                        <button
                            type="button"
                            className="project-details__gallery-button project-details__gallery-button--next"
                            onClick={nextImage}
                            aria-label="Next image"
                        >
                            →
                        </button>

                        <div className="project-details__gallery-counter">
                            {currentImage + 1} / {gallery.length}
                        </div>

                    </div>

                </section>


                {/* ABOUT */}

                <section className="project-details__section">

                    <span className="project-details__eyebrow">
                        ABOUT THE PROJECT
                    </span>

                    <h2>About</h2>

                    <p>
                        {project.longDescription}
                    </p>

                </section>
                

                {/* PROJECT ACTIONS */}

                {(project.prototypeUrl || project.repositoryUrl) && (
                    <section className="project-details__actions-section">

                        <span className="project-details__eyebrow">
                            PROJECT LINKS
                        </span>

                        <div className="project-details__actions">

                            {project.prototypeUrl && (
                                <a
                                    href={project.prototypeUrl}
                                    className="project-details__action project-details__action--primary"
                                    download
                                >
                                    <span>
                                        {project.id === "saude-animal"
                                            ? "Download Android APK"
                                            : "Download Prototype"}
                                    </span>

                                    <span className="project-details__action-icon">
                                        ↓
                                    </span>
                                </a>
                            )}

                            {project.repositoryUrl && (
                                <a
                                    href={project.repositoryUrl}
                                    className="project-details__action"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>View Repository</span>

                                    <span className="project-details__action-icon">
                                        ↗
                                    </span>
                                </a>
                            )}

                        </div>

                    </section>
                )}


                {/* FEATURES */}

                <section className="project-details__section">

                    <span className="project-details__eyebrow">
                        KEY FEATURES
                    </span>

                    <h2>Features</h2>

                    <div className="project-details__features">

                        {project.features.map((feature) => (
                            <div
                                className="project-details__feature"
                                key={feature}
                            >
                                <span className="project-details__feature-number">
                                    +
                                </span>

                                <span>{feature}</span>
                            </div>
                        ))}

                    </div>

                </section>


                {/* CONTRIBUTION */}

                <section className="project-details__section">

                    <span className="project-details__eyebrow">
                        MY CONTRIBUTION
                    </span>

                    <h2>What I worked on</h2>

                    <div className="project-details__features">

                        {project.contribution.map((item) => (
                            <div
                                className="project-details__feature"
                                key={item}
                            >
                                <span className="project-details__feature-number">
                                    +
                                </span>

                                <span>{item}</span>
                            </div>
                        ))}

                    </div>

                </section>


                {/* PROJECT INFORMATION */}

                <section className="project-details__section">

                    <span className="project-details__eyebrow">
                        PROJECT INFORMATION
                    </span>

                    <h2>Details</h2>

                    <div className="project-details__info">

                        <div>
                            <span>Team</span>
                            <strong>{project.team}</strong>
                        </div>

                        <div>
                            <span>Studio</span>

                            {project.studioLink ? (
                                <button
                                    type="button"
                                    onClick={() =>
                                        navigate(project.studioLink)
                                    }
                                >
                                    {project.studio}
                                </button>
                            ) : (
                                <strong>
                                    {project.studio}
                                </strong>
                            )}
                        </div>

                        <div>
                            <span>Role</span>

                            <div className="project-details__role">
                                {project.role.map((role) => (
                                    <span key={role}>
                                        {role}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>

                </section>


                {/* TECHNICAL DETAILS */}

                <section className="project-details__section">

                    <span className="project-details__eyebrow">
                        TECHNOLOGY
                    </span>

                    <h2>Technical Details</h2>

                    <div className="project-details__technical">

                        {Object.entries(project.details).map(
                            ([key, value]) => (
                                <div key={key}>
                                    <span>
                                        {key.replace(
                                            /([A-Z])/g,
                                            " $1"
                                        )}
                                    </span>

                                    <strong>
                                        {Array.isArray(value)
                                            ? value.join(" · ")
                                            : value}
                                    </strong>
                                </div>
                            )
                        )}

                    </div>

                </section>


                {/* DEVELOPMENT */}

                <section className="project-details__section">

                    <span className="project-details__eyebrow">
                        DEVELOPMENT
                    </span>

                    <h2>What's next</h2>

                    <p>
                        {project.development.current}
                    </p>

                    <div className="project-details__future">

                        {project.development.future.map(
                            (item) => (
                                <div key={item}>
                                    <span>→</span>
                                    <span>{item}</span>
                                </div>
                            )
                        )}

                    </div>

                </section>


                {/* FOOTER NAVIGATION */}

                <div className="project-details__end">
                    <button
                        type="button"
                        onClick={() => navigate("/")}
                    >
                        ← Back to projects
                    </button>
                </div>

            </div>
        </main>
    );
}

export default ProjectDetails;