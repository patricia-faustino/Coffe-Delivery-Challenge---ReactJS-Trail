import { ShoppingCart } from "phosphor-react";
import { ShoppingCartLinkContainer } from "./styles";
import { StatusProps } from "../RoundedIcon/styles";

interface ShoppingCartLinkProps extends StatusProps {
    size: number;
}

export function ShoppingCartLink({size, backgroundColor}: ShoppingCartLinkProps) {
    return(
        <ShoppingCartLinkContainer to="/checkout" backgroundColor={backgroundColor} title="Carrinho">
            <ShoppingCart size={size} weight="fill" />
        </ShoppingCartLinkContainer>
    );
}