import {Fade} from "react-awesome-reveal";

export default function Personas() {
    return (
        <Fade>
            <div className="portfolio-page">
                <img className="header-img" src={process.env.PUBLIC_URL + "/persona-header.png"} alt="persona-header-img" />
                {/*hook section*/}
                <section className="info-wrapper">
                    <h2 className="section-header">hook</h2>

                    <p id="attention-hook"> The cashier swivels around the touchpad, what do you do? </p>

                    <p id="chengdu-hook-p">
                        Quickly within the last three to four years, touchpad payment devices have become ubiquitous. And if you're not clear about what I'm talking about? It's those new devices at cafes and restaurants that have been charging 15% tip as a default.
                        <br/><br/>
                        As a result, I opted to choose the touchpad POS device as my interface of choice to do a deep dive case study on how users interact with it and how they feel.
                    </p>
                </section>

                {/*challenge section*/}
                <section className="info-wrapper">
                    <h2 className="section-header">Challenge</h2>
                    <p id="challenge-p">
                        Investigate how users interact with the increasingly integrated touchpad POS device, probing how users feel about the device and how they interact with it.
                    </p>
                </section>



            </div>
        </Fade>
    );
}
