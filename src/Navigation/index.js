import { List, StyledNavLink } from "./styled";


const Navigation = () => {
    return (
        <nav>
            <List>
                <li>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/autor">O autorze</StyledNavLink>
                </li>
            </List>
        </nav>
    );
};

export default Navigation;