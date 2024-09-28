import { useContext } from "react";
import { useNavigate } from "react-router";
import { CoffesContext } from "../../contexts/CoffesContext";
import { AddressDelivery } from "./AddressDelivery";
import { SelectedCoffesToConfirm } from "./SelectedCoffesToConfirm";
import { CheckoutContainer } from "./styles";

export function Checkout() {
    const {
        handleSubmit,
    }= useContext(CoffesContext);
    const navigate = useNavigate();

    function handleSubimitDelivery() {
        navigate('/success');
    }

    return (
        <CheckoutContainer onSubmit={handleSubmit(handleSubimitDelivery)}>
            <AddressDelivery />
            <SelectedCoffesToConfirm />
        </CheckoutContainer>
    )
}