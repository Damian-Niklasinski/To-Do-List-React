import styled, { css } from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    color: hsl(180, 100%, 25%);
    margin-right: 10px;
    border: none;
    background: transparent;

    &:disabled {
        color: gray;
    }

    &:hover {
        color: hsl(180, 100%, 35%);
        transition: 0.3s;
    }

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }

`;