import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Damian Niklasiński"
            body={
                <>
                    <p>
                        Nazywam się <strong>Damian Niklasiński</strong>, mam 25 lat i pochodze z niewielkiej miejscowości jaką jest <strong>Wodzisław Śląski</strong>.
                    </p>
                    <p>
                        Interesuję się pieskami a konkretnie jedną rasą którą jest <strong>Golden Retriever</strong>. Dodatkowym zajęciem przy którym spędzam sporą ilość czasu są gry komputerowe, uważam że jest to super opcja na spędzenie wolnego czasu tym bardziej jeżeli ma sie możliwość pogrania ze znajomymi. Bardzo ważnym aspektem również jest dla mnie możliwość zarobienia dodatkowo pieniędzy poprzez granie przeróżnych turniejów.
                    </p>
                </>
            }
        />
    </Container>
);