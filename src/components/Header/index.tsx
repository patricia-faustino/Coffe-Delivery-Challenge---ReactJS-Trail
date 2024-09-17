import { ActionsContainer, HeaderContainer } from "./styles";
import Logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CoffesContext } from "../../contexts/CoffesContext";

export function Header() {
    const { coffesAmount } = useContext(CoffesContext);
    const totalQuantity = coffesAmount.reduce((acc, coffe) => acc + coffe.quantity, 0);
    
    return(
        <HeaderContainer>
            <NavLink to="/" title="Carrinho">
                <img src={Logo} alt="" />
            </NavLink>

            <ActionsContainer>
                <div className="location">
                    <MapPin size={22} weight="fill"/>
                    <span>Porto Alegre, RS</span>
                </div>
                <nav>
                    <span>{totalQuantity}</span>
                    <NavLink to="/checkout" title="Carrinho">
                        <ShoppingCart size={22} weight="fill" />
                    </NavLink>
                </nav>
            </ActionsContainer>
           
        </HeaderContainer>
    )
}