import {Fade} from "react-awesome-reveal";


export default function IterativeDesign() {
    return (
        <Fade>
        <div className="portfolio-page">
            <img className="header-img" src={process.env.PUBLIC_URL + "/iterative-header.png"} alt="iterative-design" />

            {/*hook section*/}
            <section className="info-wrapper">
                <h2 className="section-header">hook</h2>
                <p id="attention-hook"> Does functionality outweigh aesthetic perfection? </p>

                <p id="chengdu-hook-p">
                    Iterative design is an industry standard for designing products, yet early stage tech startups are often marred incomplete front-facing websites in comparison to their products.
                    <br/>
                    <br/>
                    As a case study, I along with other Brown University students took on a comprehensive iterative design process for the startup Intuned, developing a hifi-mockup of Intuned's interface.

                    {/*Intuned is a startup funded by YCombinator that provides data analytics for engineering managers; their software allows teams to connect data from various sources, such as GitHub, Jira, and Notion, and run custom queries to analyze and explore the data.*/}
                </p>
            </section>

            {/*challenge section*/}
            <section className="info-wrapper">
                <h2 className="section-header">challenge</h2>
                <p id={"challenge-p"}>
                    Develop increased familiarity with the design process by creating a prototype which allows users to view and manage team members, build dashboards for data analytics, and create custom data queries.
                </p>

            </section>
            {/*process section*/}
            <section className="info-wrapper">
                <h2 className="section-header">process</h2>


                <h3> Intuned </h3>
                <p>
                    For context, Intuned provides data analytics for engineering managers.
                    Their software allows teams to connect data from various sources, such as GitHub, Jira, and Notion, and run custom queries to analyze and explore the data.
                </p>

                <h3>Sketching & Wireframing</h3>
                <p>
                    Here are the initial sketches we created while brainstorming ideas for our prototype.
                    We explored a wide variety of designs, such as where the navigation bar should be placed, how we should display team members, and how dashboards and metric creation should look like.
                </p>
                <img className={"sketch-img"} src={process.env.PUBLIC_URL + "/design-iterative-1.png"} alt="iterative-sketches" />
                <img className={"sketch-img"} src={process.env.PUBLIC_URL + "/design-iterative-2.png"} alt="iterative-sketches" />

                <p>
                    After discussing the different sketches, we decided to implement design number 1. We wanted to include notifications on the dashboard page, and we also liked the navigation bar display at the top with a search bar. We also thought that the metrics page was less cluttered and more intuitive in this sketch, as it included a progress bar to tell users how far they were in the process.
                    <br/>
                    <br/>
                    Here's a low fidelity wireframe of the final design:
                </p>

                <img className={"sketch-img"} src={process.env.PUBLIC_URL + "/design-iterative-3.png"} alt="iterative-sketches" />


                <h3>High Fidelity Mockup</h3>
                <p>
                    Next, our group created an interactive high-fidelity prototype based on the wireframe we created. While full functionality wasn't a priority, we ensured key interactions were implemented.
                    This mockup was presented to a panel of students and industry professionals, who provided feedback on the design.
                    <br/>
                    <br/>
                    Here's our interactive high-fidelity mockup of our interface before we received feedback:
                </p>

                <iframe
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fo9FpXODdTeUAu36U84OEjR%2Fcs1300-iterative-design-before-feedback%3Fnode-id%3D14%253A2100%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D14%253A2100"
                        allowFullScreen/>

            </section>

            {/*user testing section*/}
            <section className="info-wrapper">
                <h2 className="section-header">user testing</h2>
            </section>


            {/*takeaways section*/}
            <section className="info-wrapper">
                <h2 className="section-header">takeaways</h2>

            </section>



        </div>
        </Fade>




    );
}