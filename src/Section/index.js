import { Sections, Header, Div, Span } from "./styled";


const Section = ({ title, body, headerContent }) => (
    <Sections>
        <Header>
            <h2>
                <Span>
                    {title}
                </Span>
            </h2>
            {headerContent}
        </Header>
        <Div>
            {body}
        </Div>
    </Sections>
);

export default Section;