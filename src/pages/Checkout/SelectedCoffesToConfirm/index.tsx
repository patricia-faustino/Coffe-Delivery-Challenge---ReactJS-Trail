import { useContext } from "react";
import { CoffesContext } from "../../../contexts/CoffesContext";
import { Trash } from "phosphor-react";
import { CoffePrice } from "../../../components/CoffePrice";
import { CoffeQuantity } from "../../../components/CoffeQuantity";
import { SelectedCoffesToConfirmContainer, CartContainer, CoffesSelectedContainer, CoffePriceElementContainer, CoffeElementContainer, TotalDeliveryContainer, TotalItemsCoffeContainer, DeliveryCoffeContainer, TotalContainer, SucessLinkContainer } from "./styles";



function roundUpToTwoDecimals(value: number): number {
    return Math.ceil(value * 100) / 100;
}

export function SelectedCoffesToConfirm() {
    const {
        coffesAmount, 
        removeCoffe, 
    }= useContext(CoffesContext);
    const coffesWithQuantity = coffesAmount.filter((coffe) => coffe.quantity > 0);
    const coffesTotal = coffesWithQuantity.reduce((acc, coffe) => acc + (coffe.quantity * coffe.price), 0); 
    const deliveryValue = 3.50;

    return (
        <SelectedCoffesToConfirmContainer>
            <h3>Cafés selecionados</h3>
                <CartContainer>
                    <CoffesSelectedContainer>
                        {coffesWithQuantity.map((coffe) => {
                            return (
                                <CoffePriceElementContainer key={coffe.name}>
                                    <CoffeElementContainer>
                                        <img src={coffe.src} alt="" />
                                        <div className="title_quantity">
                                            <span>{coffe.name}</span>
                                            <div className="quantity">
                                                <CoffeQuantity coffe={coffe} height={'2rem'}/>
                                                <button type="button" className="button_remove" onClick={(e) => removeCoffe(e, coffe)}>
                                                    <Trash size={16}/>
                                                    <span>REMOVER</span>
                                                </button>
                                            </div>
                                        </div>
                                    </CoffeElementContainer>
                                
                                    <CoffePrice
                                        coffePrice={roundUpToTwoDecimals(coffe.quantity * coffe.price)}
                                        fontSize="16px"
                                        fontsizebefore="16px"
                                        fontWeight="bold"
                                        fontweigthbefore="bold"
                                    />
                                </CoffePriceElementContainer>
                                );
                        })}
                    </CoffesSelectedContainer>
                    <TotalDeliveryContainer>
                        <TotalItemsCoffeContainer>
                            <span>Total de itens</span>
                            <CoffePrice
                                coffePrice={roundUpToTwoDecimals(coffesTotal)}
                                fontSize="16px"
                                fontsizebefore="16px"
                                fontWeight="normal"
                                fontweigthbefore="normal"
                            />
                        </TotalItemsCoffeContainer>
                        <DeliveryCoffeContainer>
                            <span>Entrega</span>
                            <CoffePrice
                                coffePrice={deliveryValue}
                                fontSize="16px"
                                fontsizebefore="16px"
                                fontWeight="normal"
                                fontweigthbefore="normal"
                            />
                        </DeliveryCoffeContainer>
                        <TotalContainer>
                            <span>Total</span>
                            <CoffePrice
                                coffePrice={roundUpToTwoDecimals(coffesTotal + deliveryValue)}
                                fontSize="16px"
                                fontsizebefore="16px"
                                fontWeight="bold"
                                fontweigthbefore="bold"
                            />
                        </TotalContainer>
                    </TotalDeliveryContainer>
                    <SucessLinkContainer>
                        <button type="submit">Confirmar Pedido</button>
                    </SucessLinkContainer>
                </CartContainer>
        </SelectedCoffesToConfirmContainer>
    )
}