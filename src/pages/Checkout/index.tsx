import { useContext } from "react";
import { CoffesContext } from "../../contexts/CoffesContext";
import { Trash } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CheckoutContainer, CoffeElementContainer, CoffePriceElementContainer, CoffesSelectedContainer, FormContainer } from "./styles";
import { CoffePrice } from "../../components/CoffePrice";
import { CoffeQuantity } from "../../components/CoffeQuantity";

interface CoffeDeliveryFormData {
    deliveryAddress: {
        cep: string;
        street: string;
        numberAddress: string;
    }
}

function roundUpToTwoDecimals(value: number): number {
    return Math.ceil(value * 100) / 100;
}

export function Checkout() {
    const coffeDeliveryForm = useForm();
    const {coffesAmount, addAmountCoffe, decreaseQuantityCoffe, removeCoffe}= useContext(CoffesContext);
    const coffesWithQuantity = coffesAmount.filter((coffe) => coffe.quantity > 0);
    const coffesTotal = coffesWithQuantity.reduce((acc, coffe) => acc + (coffe.quantity * coffe.price), 0); 
    const deliveryValue = 3.50;
    return (
        <CheckoutContainer>
            <FormContainer>
                <h3>Complete seu pedido</h3>
               
                <form action="">
                    <div>
                        <span>Endereço de Entrega</span>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                        
                        <input type="text" placeholder="CEP" />
                        <input type="text" placeholder="Rua" />
                        <input type="text" placeholder="Número" />
                        <input type="text" placeholder="Complemento" />
                        <input type="text" placeholder="Bairro" />
                        <input type="text" placeholder="Cidade" />
                        <input type="text" placeholder="UF" />
                    </div>

                    <div>
                        <span>Pagamento</span>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</p>
                        <div>
                            <button>
                                <span>CARTÃO DE CRÉDITO</span>
                            </button>
                            <button>
                                <span>CARTÃO DE DÉBITO</span>
                            </button>
                            <button>
                                <span>DINHEIRO</span>
                            </button>
                        </div>
                    </div>
                   




                </form>
            </FormContainer>
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
                                    <button className="button_remove" onClick={(event) => removeCoffe(event, coffe)}>
                                        <Trash size={16}/>
                                        <span>REMOVER</span>
                                    </button>
                                </div>
                            </div>
                        </CoffeElementContainer>
                       
                        <CoffePrice coffePrice={roundUpToTwoDecimals(coffe.quantity * coffe.price)} fontSize="16px" />
                    </CoffePriceElementContainer>
                    );
                })}
                <div>
                    <div>
                        <span>Total de itens</span>
                        <span>{roundUpToTwoDecimals(coffesTotal)}</span>
                    </div>
                    <div>
                        <span>Entrega</span>
                        <span>{deliveryValue}</span>
                    </div>

                    <div>
                        <span>Total</span>
                        <span>{roundUpToTwoDecimals(coffesTotal + deliveryValue)}</span>
                    </div>

                    <NavLink to="/success">
                        <button>Confirmar Pedido</button>
                    </NavLink>
                </div>


            </CoffesSelectedContainer>
        </CheckoutContainer>

    )
}