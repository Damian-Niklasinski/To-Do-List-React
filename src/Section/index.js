import "./style.css";

const Section = ( {title, body, HeaderContent} ) => (
    <section className="section">
                <header className="section__secondHeader">
                    <h2 className="section__mainHeader"><span className="section__span">{title}</span></h2>
                    {HeaderContent}
                </header>
                <div className="section__div">
                    {body}
                </div>
            </section>
);

export default Section;