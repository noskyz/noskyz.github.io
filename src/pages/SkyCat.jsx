import { Link } from "react-router-dom";
import "./SkyCat.css";

function SkyCat() {
    return (
        <main className="skycat-page">

            {/* Hero */}

            <section className="skycat-hero">
                <div className="skycat__container">

                    <div className="skycat-hero__logo">
                        <div className="skycat-hero__logo-placeholder">
                            SKY
                            <span>CAT</span>
                        </div>
                    </div>

                    <span className="skycat__eyebrow">
                        Independent Game Development
                    </span>

                    <h1>
                        Building games
                        <span> together.</span>
                    </h1>

                    <p>
                        An independent game development initiative created by
                        David Silva and Diogo Felix, built around shared ideas,
                        experimentation and a passion for creating games together.
                    </p>

                    <Link to="/" className="skycat__back">
                        <span>←</span>
                        Back to portfolio
                    </Link>

                </div>
            </section>


            {/* Story */}

            <section className="skycat-section">
                <div className="skycat__container">

                    <div className="skycat-section__heading">
                        <span className="skycat__eyebrow">
                            01 · Our story
                        </span>

                        <h2>
                            It started with
                            <span> a game.</span>
                        </h2>
                    </div>

                    <div className="skycat-story">

                        <div className="skycat-story__intro">
                            <span className="skycat-story__label">
                                The beginning
                            </span>

                            <p>
                                SkyCat started during a university game development
                                class, when two friends were asked to begin creating
                                a game.
                            </p>
                        </div>

                        <div className="skycat-story__text">

                            <p>
                                That project became
                                <strong> Echoes of the Forgotten</strong>.
                            </p>

                            <p>
                                While working on the game, we started joking about
                                creating a name for what we were building together.
                                Our Discord usernames — <strong>noskyz</strong> and
                                <strong> furiosthecatodad</strong> — eventually
                                inspired the name SkyCat.
                            </p>

                            <p>
                                What started as a name for a university project
                                gradually became the idea for something bigger:
                                a place where we could continue creating games
                                together.
                            </p>

                        </div>

                    </div>

                </div>
            </section>


            {/* The idea */}

            <section className="skycat-section skycat-section--muted">
                <div className="skycat__container">

                    <div className="skycat-section__heading">
                        <span className="skycat__eyebrow">
                            02 · The idea
                        </span>

                        <h2>
                            More than
                            <span> one project.</span>
                        </h2>
                    </div>

                    <div className="skycat-idea">

                        <p>
                            SkyCat is an independent game development initiative
                            created by two friends with the goal of building games
                            together, experimenting with ideas and growing through
                            real projects.
                        </p>

                        <p>
                            The long-term goal is to turn SkyCat into a creative
                            and technical space where we can develop our own games,
                            share them with others and build a body of collaborative
                            work.
                        </p>

                    </div>

                </div>
            </section>


            {/* Team */}

            <section className="skycat-section">
                <div className="skycat__container">

                    <div className="skycat-section__heading">
                        <span className="skycat__eyebrow">
                            03 · The team
                        </span>

                        <h2>
                            Two developers.
                            <span> One studio.</span>
                        </h2>
                    </div>

                    <div className="skycat-team">

                        <div className="skycat-member">
                            <span className="skycat-member__number">
                                01
                            </span>

                            <h3>
                                David Silva
                            </h3>

                            <span className="skycat-member__role">
                                Game Development · Programming · Game Design · 3D
                            </span>

                            <p>
                                Game development, programming and game design, with additional experience in Blender, 3D assets, animations and Unity GameObjects.
                            </p>
                        </div>

                        <div className="skycat-member">
                            <span className="skycat-member__number">
                                02
                            </span>

                            <h3>
                                Diogo Felix
                            </h3>

                            <span className="skycat-member__role">
                                Game Development · Programming · Game Design
                            </span>

                            <p>
                                Game development, programming and game design across our collaborative projects.
                            </p>
                        </div>

                    </div>

                </div>
            </section>


            {/* Project */}

            <section className="skycat-section skycat-section--project">
                <div className="skycat__container">

                    <div className="skycat-section__heading">
                        <span className="skycat__eyebrow">
                            04 · Our project
                        </span>

                        <h2>
                            Echoes of the
                            <span> Forgotten.</span>
                        </h2>

                        <p>
                            The first project developed under the SkyCat name.
                        </p>
                    </div>


                    <div className="skycat-project">

                        <div className="skycat-project__image">
                            <div className="skycat-project__image-placeholder">
                                Echoes of the Forgotten
                            </div>
                        </div>

                        <div className="skycat-project__content">

                            <span className="skycat-project__status">
                                In Development
                            </span>

                            <h3>
                                Echoes of the Forgotten
                            </h3>

                            <p>
                                A psychological narrative game developed in Unity
                                HDRP, following a father who survives a plane crash
                                and begins uncovering fragments of his family's story.
                            </p>

                            <div className="skycat-project__technologies">
                                <span>Unity HDRP</span>
                                <span>C#</span>
                                <span>Blender</span>
                                <span>FMOD</span>
                                <span>Git / GitHub</span>
                            </div>

                            <Link
                                to="/work/echoes-of-the-forgotten"
                                className="skycat__button"
                            >
                                View project
                                <span>→</span>
                            </Link>

                        </div>

                    </div>

                </div>
            </section>


            {/* What's next */}

            <section className="skycat-section skycat-section--closing">
                <div className="skycat__container">

                    <span className="skycat__eyebrow">
                        05 · What's next
                    </span>

                    <h2>
                        SkyCat is being
                        <span> reactivated.</span>
                    </h2>

                    <p>
                        We're exploring the next steps for SkyCat, including
                        establishing our own online presence, creating social
                        media channels and deciding which projects to take
                        forward.
                    </p>

                    <p>
                        Whether that means continuing Echoes of the Forgotten
                        or creating something completely new, the goal remains
                        the same: keep building games together.
                    </p>

                    <div className="skycat__closing-actions">
                        <Link
                            to="/"
                            className="skycat__button skycat__button--secondary"
                        >
                            Back to portfolio
                            <span>→</span>
                        </Link>
                    </div>

                </div>
            </section>

        </main>
    );
}

export default SkyCat;