import { useContext } from "react";
import { CoffesContext } from "../../contexts/CoffesContext";
import { Trash } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

interface CoffeDeliveryFormData {
    deliveryAddress: {
        cep: string;
        street: string;
        numberAddress: string;
    }
}

export function Checkout() {
    const coffeDeliveryForm = useForm();
    const {coffesAmount, addAmountCoffe, decreaseQuantityCoffe, removeCoffe}= useContext(CoffesContext);
    const coffesWithQuantity = coffesAmount.filter((coffe) => coffe.quantity > 0);
    const coffesTotal = coffesWithQuantity.reduce((acc, coffe) => acc + (coffe.quantity * coffe.price), 0); 
    const deliveryValue = 3.50;
    return (
        <div>
            <div>
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
            </div>
            <div>
                
        
                {coffesWithQuantity.map((coffe) => {
                    return (
                        <div key={coffe.name}>
                            <img src={coffe.src} alt="" />
                            <div>
                                <span>{coffe.name}</span>
                                <div>
                                    <button onClick={(event) => decreaseQuantityCoffe(event, coffe)}>
                                        <span>-</span>
                                    </button>
                                    <span>{coffe.quantity}</span>
                                    <button onClick={(event) => addAmountCoffe(event,coffe)}>
                                        <span>+</span>
                                    </button>
                                </div>
                                <button onClick={(event) => removeCoffe(event, coffe)}>
                                    <Trash size={16}/>
                                    <span>REMOVER</span>
                                </button>
                            </div>
                            <div>
                                <span>{coffe.quantity * coffe.price}</span>
                            </div>
                        </div>
                    );
                })}

                <div>
                    <div>
                        <span>Total de itens</span>
                        <span>{coffesTotal}</span>
                    </div>
                    <div>
                        <span>Entrega</span>
                        <span>{deliveryValue}</span>
                    </div>

                    <div>
                        <span>Total</span>
                        <span>{coffesTotal + deliveryValue}</span>
                    </div>

                    <NavLink to="/success">
                        <button>Confirmar Pedido</button>
                    </NavLink>
                </div>


            </div>
        </div>

    )
}