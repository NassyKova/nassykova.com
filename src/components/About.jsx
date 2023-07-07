const About = () => {
    return (
        <div className="about">
            <img
                className="about--photo"
                src="./img/main_photo.JPG"
                alt="mainPhoto"
            ></img>

            <p className="about--text">
                Hi there! I am Nassy, a Junior Software Developer based in
                Melbourne/Naarm
                <br />I believe that technology is an amazing powerful tool that
                will change the future for the better
                <br />I am passionate about increasing inclusivity and diversity
                in the tech industry 👩‍💻
                <br /> Before coding I worked in animation industry as a{" "}
                <a
                    href="https://www.imdb.com/name/nm9663771/"
                    target="_blank"
                    rel="noreferrer"
                >
                    2D Rigger
                </a>{" "}
                (creating digital puppets). I love animation for being able to
                bring anything to life, give it a character, a voice and a point
                of view 🌟
                <br /> Once a month you can find me performing or at least
                watching a show at{" "}
                <a
                    href="https://improvconspiracy.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    The Improv Conpsiracy
                </a>{" "}
                <br /> I like art, innovation, development, logic and sense.
                Looking forward to emerge in the tech community and meet great
                people on the way 💚
            </p>
        </div>
    );
};

export default About;
