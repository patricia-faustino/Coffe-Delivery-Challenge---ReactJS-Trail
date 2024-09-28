import { ShoppingCart } from "phosphor-react";
import { ShoppingCartLinkContainer } from "./styles";
import { StatusProps } from "../RoundedIcon/styles";

interface ShoppingCartLinkProps extends StatusProps {
    size: number;
}

export function ShoppingCartLink({size, backgroundcolor}: ShoppingCartLinkProps) {
    return(
        <ShoppingCartLinkContainer to="/checkout" backgroundcolor={backgroundcolor} title="Carrinho">
            <ShoppingCart size={size} weight="fill" />
        </ShoppingCartLinkContainer>
    );
}