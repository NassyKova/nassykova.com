export default function Project(props) {
    return (
        <div className="project">
            <a href={props.githubLink} target="_blank" rel="noreferrer">
                <img
                    className="project--photo"
                    src={`../img/projects/${props.coverImg}`}
                ></img>
            </a>
            <section className="project--info">
                <h1 className="project--title">{props.title}</h1>
                <section className="project--tech">{props.tech}</section>
                <p className="project--subtitle">{props.subtitle} </p>
                <p className="project--p">{props.description}</p>
                <a
                    className="project--websitelink"
                    href={props.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    {props.linkDescription}
                </a>{" "}
                <a href={props.githubLink} target="_blank" rel="noreferrer">
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
