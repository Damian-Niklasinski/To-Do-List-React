import { StyledContainer } from "./styled";
import styled from "styled-components";


const Container = ( {children} ) => (
    <StyledContainer>
        {children}
    </StyledContainer>
);

export default Container;