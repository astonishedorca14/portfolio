import PortfolioItem from "../components/porfolio-item";
import ChengduTaste from "./chengdu-taste";
import Fade from 'react-reveal/Fade';


export default function Portfolio() {
    return (
        <Fade big>
        <div className="portfolio-container">
            <div className="portfolio-grid-container">
                <PortfolioItem
                    img={process.env.PUBLIC_URL + "/chengdu-taste-hover-img.png"}
                    page="/portfolio/chengdu-taste"
                    project={"Responsive Redesign: Chengdu Taste"}

                />
                <PortfolioItem
                    img= {process.env.PUBLIC_URL + "/crossword-hover-img.png"}
                    page="/portfolio/crossword"
                    project={"Crossword Puzzle Editor"}
                />
                <PortfolioItem
                    img={process.env.PUBLIC_URL + "/interface-hover-img.png"}
                    page="/portfolio/personas"
                    project={"Personas & Storyboarding: Ceremony"}
                />
                <PortfolioItem
                    img={process.env.PUBLIC_URL + "/iterative-design-hover-img.png"}
                    page="/portfolio/iterative-design"
                    project={"Iterative Design: Intuned"}
                />
            </div>
        </div>
        </Fade>
    );
}

