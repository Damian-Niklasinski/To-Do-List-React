import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName: activeClassName,
}))`

    color: white;
    text-decoration: none;
    &.${activeClassName} {
        color: white;
        border-radius: 15px;
        padding: 10px;
    }

    &:active {
        color: teal;
    }
`;


export const List = styled.ul`
    background-color: teal;
    font-size: 25px;
    display: flex;
    gap: 25px;
    justify-content: center;
    list-style: none;
    padding: 25px;
`;
