import {Fade} from "react-awesome-reveal";


export default function Crossword() {
    return (
        <div className="portfolio-page">
            <img className="header-img" src={process.env.PUBLIC_URL + "/iterative-header.png"} alt="iterative-design" />

            {/*hook section*/}
            <section className="info-wrapper">
                <h2 className="section-header">hook</h2>
                <p id="attention-hook"> Does functionality far outweigh aesthetic perfection? Does form supercede function? </p>

                <p id="chengdu-hook-p">
                    Quickly within the last three to four years, touchpad payment devices have become ubiquitous. And if you're not clear about what I'm talking about? It's those new devices at cafes and restaurants that have been charging 15% tip as a default.
                    <br/><br/>
                    As a result, I opted to choose the touchpad POS device as my interface of choice to do a deep dive case study on how users interact with it and how they feel.
                </p>
            </section>
            {/*challenge section*/}
            <section className="info-wrapper">
                <h2 className="section-header">challenge</h2>

            </section>
            {/*process section*/}
            <section className="info-wrapper">
                <h2 className="section-header">challenge</h2>

            </section>
            {/*takeaways section*/}
            <section className="info-wrapper">
                <h2 className="section-header">challenge</h2>

            </section>



        </div>




    );
}