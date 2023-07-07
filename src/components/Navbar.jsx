import SocialIcons from "./socials";
import socialData from "../socials";
import { Link } from "react-router-dom";

export default function Navbar() {
    const socials = socialData.map((item) => {
        return <SocialIcons key={item.id} {...item} />;
    });
    return (
        <div className="nav">
            <button className="nav--toggle">night mode</button>
            <div className="navbar">
            <Link to="/">
                        {" "}
                        <img className="nav--logo" src="./nk.svg"></img>{" "}
                    </Link>

                <h1 className="nav--h1">Nassy Kova</h1>
                <div></div>
                <nav className="nav--menu">
                    <Link to="/about">
                        {" "}
                        <button className="nav--button">about</button>{" "}
                    </Link>

                </nav>
                <div className="nav--socials">{socials}</div>
            </div>
        </div>
    );
}
