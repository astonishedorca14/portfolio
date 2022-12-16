import {Fade} from "react-awesome-reveal";

export default function Crossword() {
    return (
        <div className="portfolio-page">
            <img className="header-img" src={process.env.PUBLIC_URL + "/iterative-header.png"} alt="iterative-design" />

            {/*hook section*/}
            <section className="info-wrapper">
                <h2 className="section-header">hook</h2>
                <p id="attention-hook">[Temp] </p>

                <p id="chengdu-hook-p">

                </p>
            </section>
            {/*challenge section*/}
            <section className="info-wrapper">
                <h2 className="section-header">challenge</h2>

            </section>
            {/*process section*/}
            <section className="info-wrapper">
                <h2 className="section-header">process</h2>
                <h3>market investigation</h3>


            </section>

            {/*solution section*/}
            <section className="info-wrapper">
                <h2 className="section-header">solution</h2>
                <h3></h3>

            </section>
            {/*takeaways section*/}
            <section className="info-wrapper">
                <h2 className="section-header">takeaways</h2>

            </section>



        </div>




    );
}