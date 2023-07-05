export default function Navbar() {
    return (
        <div className="nav">
            <button className="nav--toggle">night mode</button>
            <div className="navbar">
                <heading className="nav--heading">Nassy Kova</heading>
                <div></div>
                <nav className="nav--menu">
                    <button>about</button>
                    <button>projects</button>
                </nav>
                <div className="nav--socials">Socials 1 2 3</div>
            </div>
        </div>
    );
}
