const SocialIcons = (props) => {
    return (
        <div className="nav--socials">
            <a href={props.link}>
                <img src={`../img/logos/${props.logo}`}
                className="nav--socials--logo"></img>
            </a>
        </div>
    );
};

export default SocialIcons;
