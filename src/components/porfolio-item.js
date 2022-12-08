
const PortfolioItem = (props) => {
    return (
        <div className="portfolio-item">
            <a className="portfolio-hover"  href={props.page}>
                <img className="portfolio-img" src={props.img}/>
                <h2>{props.project}</h2>
                <p>{props.description}</p>
            </a>
        </div>
    );
}

export default PortfolioItem;