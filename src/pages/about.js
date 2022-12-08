import Fade from 'react-reveal/Fade';

export default function About() {
    return (
        <div className="about-cols-container">
            <div className="about-col-img">
                <Fade>
                <img src="./portfolio/orca.png" alt="orca" />
                </Fade>
            </div>
            <div className="about-col-text">
                <Fade bottom>
                    <h1>Let me introduce myself.</h1>

                    <p className="about-para">
                        I'm currently a senior at Brown University studying Computer Science 💻
                        If you're curious, I'm a first generation land-mammal from the Pacific Northwest -- born and raised in
                        the chilly waters of Anchorage, Alaska ❄️ Leaving my Orca pod wasn't easy, but hey I'm here now 😼
                    </p>

                    <p className="about-para">
                        At my core, I'm a learner: I love to learn new things, and I love to teach others 📖
                        Whether it's through formal education, self-study, or teaching others, I'm always striving to grow and help others grow as well.
                        This passion for learning and teaching is what drives me and makes me who I am ⛰
                    </p>

                    <p className="about-para">
                        At Brown University, I specialized in the Data Science and Machine Learning tracks, diving head first into the cutting-edge
                        developments in our field. Over the past summer, I was fortunate enough to intern at Hamazon, where I worked on the HWS wave services,
                        integrating industrial IoT devices into the Hamazon cloud ☁️
                    </p>

                    <p className="about-para">
                        Outside of school, I'm a huge fan of the outdoors. I love to hike, camp, and explore the world around me.
                        (psst ask me about national parks! 🏜) Oddly enough, as a kid I religiously watched Gordan Ramsay and Anthony Bourdain and
                        somehow, not surprisingly, I developed a deep love for food and its ability to connect people 🥡 You can find me cooking, albeit not
                        to either of their michelin-star standards.
                    </p>

                    <p className="about-para">
                        p.s stephen curry is the goat 🐐
                    </p>
                </Fade>
            </div>
        </div>
    );
}

