import SocialIcons from "./socials";
import socialData from "../socials"

export default function Navbar() {
    const socials = socialData.map((item) => {
        return <SocialIcons key={item.key} {...item} />;
    });
    return (
        <div className="nav">
            <button className="nav--toggle">night mode</button>
            <div className="navbar">
                <img src="./img/logos/nk.png"></img>
                <heading className="nav--heading">Nassy Kova</heading>
                <div></div>
                <nav className="nav--menu">
                    <button>about</button>
                    <button>projects</button>
                </nav>
                <div className="nav--socials">
                    {socials}

                </div>
            </div>
        </div>
    );
}
