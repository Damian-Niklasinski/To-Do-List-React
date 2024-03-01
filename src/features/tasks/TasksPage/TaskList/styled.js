import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul` 
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    font-size: 17px;
    list-style-type: none;
    border-bottom: 1px solid rgba(200, 198, 198, 0.694);
    padding: 5px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Span = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const DoneButton = styled.button`
    color: white;
    border: none;
    background-color: hsl(120, 100%, 25%);
    height: 35px;
    width: 35px;
    margin: 5px;

    &:hover {
        background-color: hsl(120, 100%, 30%);
        transition: 0.3s;
    }

    &:active {
        background-color: hsl(120, 100%, 35%);
    }

`;

export const RemoveButton = styled.button`
    border: none;
    background-color: hsl(0, 100%, 50%);
    padding: 5px;

    &:hover {
        background-color: hsl(0, 100%, 55%);
        transition: 0.3s;
    }

    &:active {
        background-color: hsl(0, 100%, 60%);
    }
`;

export const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    border-bottom: 1px solid teal;

    &:active {
        color: teal;
    }
`;