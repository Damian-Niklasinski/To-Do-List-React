import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr auto;
    padding: 10px;

    @media (max-width: 767px) {
        display: flex;
        flex-wrap: wrap;
    }

`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid rgba(200, 198, 198, 0.694);

    @media (max-width: 767px) {
        flex-basis: 100%;
    }
    
`;

export const Button = styled.button`
    border: none;
    background-color: teal;
    color: white;
    padding: 10px;

    &:hover {
        transition: 0.3s;
        transform: scale(120%);
    }

    &:active {
        background-color: rgba(0, 128, 128, 0.743);
        color: white;
        padding: 10px;
    }

    @media (max-width: 767px) {
        flex-basis: 100%;
    }
`;