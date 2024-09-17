import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { STATUS_COLOR, StatusProps } from "../RoundedIcon/styles";


export const ShoppingCartLinkContainer = styled(NavLink)<StatusProps>`
    svg {
        color: ${(props) => props.theme[STATUS_COLOR[props.backgroundColor]]};
    }
`;