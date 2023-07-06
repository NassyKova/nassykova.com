import SocialIcons from "./socials";
import socialData from "../socials";

export default function Navbar() {
    const socials = socialData.map((item) => {
        return <SocialIcons key={item.id} {...item} />;
    });
    return (
        <div className="nav">
            <button className="nav--toggle">night mode</button>
            <div className="navbar">
                <img className="nav--logo" src="./nk.svg"></img>
                <h1 className="nav--h1">Nassy Kova</h1>
                <div></div>
                <nav className="nav--menu">
                    <button>about</button>
                    <button>projects</button>
                </nav>
                <div className="nav--socials">{socials}</div>
            </div>
        </div>
    );
}
