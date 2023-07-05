export default function Project() {
    return (
        <div className="project">
            <a
                className="project--websitelink"
                href="https://artworkfromthemet.netlify.app"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    className="project--photo"
                    src="../img/projects/Met.png"
                ></img>
                <h1 className="project--title">
                    The Metropolitan Museum of Art Collection
                </h1>
                <p>Hackathon team project </p>
                <p>
                    Bringing the art collection from New York to your screen!
                    The Metropolitan Museum of Art presents over 5000 years of
                    art from all around the globe. On this website you can see
                    available artwork, search for favorite artists or explore
                    new ones, add an artwork to your personal favorite page.
                    <p className="bold">Javascript, React, Third Party API </p>
                </p>
            </a>
            <section>
                {" "}
                <a
                    href="https://github.com/Wade008/hackathon/tree/Nassy"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="project--githublogo"
                        src="../img/logos/GitHub-Mark-32px.png"
                        alt="github logo"
                    />
                </a>
            </section>
        </div>
    );
}
