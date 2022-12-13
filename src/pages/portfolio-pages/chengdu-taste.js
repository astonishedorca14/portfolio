import {Fade} from "react-awesome-reveal";

export default function ChengduTaste() {
    return (
        <div className="chengdu-taste-page">
            <img className="header-img" src={process.env.PUBLIC_URL + "/chengdu-header.png"} alt="chengdu-taste-header-img" />

            <div className="chengdu-taste-content">
                <section className="info-wrapper">
                    <h2 className="section-header">hook</h2>

                    <p id="chengdu-hook"> Hey you! Yeah you, read this! </p>

                    <p id="chengdu-hook-p">
                        Gotcha! Within the first couple of seconds of landing on a website, users make a decision about whether
                        or not they like the site.
                        <br/><br/>
                        <strong>The first impression is and always will be the most important impression. </strong>
                        <br/><br/>
                        As consumer experience shifts digital, from shopping malls to online stores, websites have become the new symbolic storefronts.
                        If this analogy is true, then the first click is the new window display. As a case study for this topic, I will be analyzing the
                        pre-existing pitfalls of the website for a local Providence restaurant, <a href="https://chengdutasteonline.com"  target="_blank">Chengdu Taste</a>,
                        and redesigning it to be more user friendly. The redesign process will be entirely holistic, identifiying usability issues, adapting both lo
                        and hifi wireframes, and finally implementing a responsive design.
                    </p>
                </section>

                <section className="info-wrapper">
                    <h2 className="section-header">Challenge</h2>
                    <p id="chengdu-challenge">
                        How might we redesign the website for Chengdu Taste to be more user friendly, more visually appealing, and more responsive to differing screen sizes?
                    </p>
                </section>

                <section className="info-wrapper">
                    <h2 className="section-header">process</h2>

                    <h3>
                    1. Finding Existing Issues
                    </h3>
                    <div class = "multidiv-container">
                        <div class = "multidiv-col">
                        </div>
                        <div className="multidiv-col">
                        </div>
                        <div className="multidiv-col">
                        </div>
                        <div className="multidiv-col">
                        </div>
                    </div>
                    <h3> Accessibility </h3>

                    <p>
                        On the accessibility end, utilizing  WebAIM WAVE, the Chengdu Taste website does not have any alternative text for its photos. Additionally, there are issues with certain text headers having low contrast with the chosen background color. While it may seem rather pedantic, the issues analyzed by WebAIM Wave demonstrate that Chengdu Taste’s website is not necessarily accessible to all potential users (i.e color-blind, hard of hearing), which is pre-emptively minimizing the market for Chengdu Taste.
                    </p>
                </section>

                {/*<h1>Hook</h1>*/}
                {/*<h1>Challenge</h1>*/}
                {/*<h1>Process</h1>*/}
                {/*<h1>Take Aways & Next Steps</h1>*/}
                {/*<h1>Project Details</h1>*/}


            </div>

        </div>
    );
}