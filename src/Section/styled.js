import styled, { css } from "styled-components";

export const Sections = styled.section`
    margin: 10px;
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border: 1px solid rgba(200, 198, 198, 0.694);
    margin: 0;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Div = styled.div`
    background-color: white;
    padding: 20px;
    border: 1px solid rgba(200, 198, 198, 0.694);
`;

export const Span = styled.span`
    margin-left: 20px;
`;