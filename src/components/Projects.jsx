import ReactLogo from "/img/logos/React.svg";
import HTMLLogo from "/img/logos/HTML5.png";
import CSSLogo from "/img/logos/CSS3.png";
import JSLogo from "/img/logos/js.png";

export default function Project(props) {
    return (
        <div className="project">
            <img
                className="project--photo"
                src={`../img/projects/${props.coverImg}`}
            ></img>
            <section className="project--info">
                <h1 className="project--title">{props.title}</h1>
                <section className="project--logos">
                    <img className="project--logo" src={JSLogo}></img>
                    <img className="project--logo" src={ReactLogo}></img>
                    <img className="project--logo" src={CSSLogo}></img>
                    <img className="project--logo" src={HTMLLogo}></img>
                </section>
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
                <a
                    href={props.githublink}
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
