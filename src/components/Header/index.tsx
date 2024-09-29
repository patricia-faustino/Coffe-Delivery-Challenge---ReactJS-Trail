import { ActionsContainer, HeaderContainer } from "./styles";
import Logo from "../../assets/Logo.svg";
import { MapPin } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CoffesContext } from "../../contexts/CoffesContext";
import { ShoppingCartLink } from "../ShoppingCartLink";

export function Header() {
    const { coffesAmount } = useContext(CoffesContext);
    const totalQuantity = coffesAmount.reduce((acc, coffe) => acc + coffe.quantity, 0);
    
    return(
        <HeaderContainer>
            <NavLink to="/" >
                <img src={Logo} alt="" />
            </NavLink>
            <ActionsContainer>
                <div className="location">
                    <MapPin size={22} weight="fill"/>
                    <span>Porto Alegre, RS</span>
                </div>
                <nav>
                    {!!totalQuantity && <span>{totalQuantity}</span>}
                    <ShoppingCartLink size={22} backgroundcolor={"yellowDark"}/>
                </nav>
            </ActionsContainer>
        </HeaderContainer>
    )
}