import { useContext } from "react";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
import { useForm } from "react-hook-form";
import { CartContainer, CheckoutContainer, CoffeElementContainer, CoffePriceElementContainer, CoffesSelectedContainer, DeliveryCoffeContainer, DeliveryPaymentContainer, FormContainer, FormDeliveryContainer, GridFormDelivery, PaymentMethods, SectionTitleContentContainer, SucessLinkContainer, TitleSubtitleContainer, TotalContainer, TotalDeliveryContainer, TotalItemsCoffeContainer } from "./styles";
import { CoffePrice } from "../../components/CoffePrice";
import { CoffeQuantity } from "../../components/CoffeQuantity";
import { CoffesContext } from "../../contexts/CoffesContext";

interface CoffeDeliveryFormData {
    deliveryAddress: {
        cep: string;
        street: string;
        numberAddress: string;
        addressComplement: string;
        neighborhood: string;
        city: string;
        UF: string;
    },
    payment: {
        paymentMethod: 'credit' | 'debit' | 'money' ;
    }
}

function roundUpToTwoDecimals(value: number): number {
    return Math.ceil(value * 100) / 100;
}

export function Checkout() {
    const newDelivery = useForm<CoffeDeliveryFormData>({
        // resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            deliveryAddress: {
                cep: '',
                street: '',
                numberAddress: '',
                addressComplement: '',
                neighborhood: '',
                city: '',
                UF: '',
            },
            payment: {
                paymentMethod: 'credit',
            }
        }
    });   

    const { handleSubmit, watch, reset, register, setValue, formState: { errors } } = newDelivery;

    // const isSubmitedDisabled = !task;

    function handleSubimitDelivery() {
        // createNewCycle(data);
        reset();
    }

    function handleChangePaymentMethod(paymentMethod: 'credit' | 'debit' | 'money') {

    }

    console.log(errors)
    const applyCepMask = (value: string): string => {
        const numericValue = value.replace(/\D/g, '');
        const limitedValue = numericValue.slice(0, 8);
        return limitedValue.replace(/(\d{5})(\d{1,3})/, '$1-$2');
    };
    

    const {coffesAmount, removeCoffe}= useContext(CoffesContext);
    const coffesWithQuantity = coffesAmount.filter((coffe) => coffe.quantity > 0);
    const coffesTotal = coffesWithQuantity.reduce((acc, coffe) => acc + (coffe.quantity * coffe.price), 0); 
    const deliveryValue = 3.50;
    return (
        <CheckoutContainer>
            <SectionTitleContentContainer>
                <h3>Complete seu pedido</h3>
                <FormContainer action="">
                    <FormDeliveryContainer onSubmit={handleSubimitDelivery}>
                        <TitleSubtitleContainer colorSvg={'yellowDark'}> 
                            <MapPinLine size={22} />
                            <div>
                                <span>Endereço de Entrega</span>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                            
                        </TitleSubtitleContainer>
                        <GridFormDelivery>
                            <div className="rowCep">
                                <input 
                                    type="text"
                                        placeholder="CEP"
                                        {...register('deliveryAddress.cep', 
                                            {
                                                required: true,
                                                pattern: {
                                                    value: /^\d{5}-?\d{3}$/,
                                                    message: "CEP inválido"
                                                },
                                                onChange: (e) => {
                                                    const maskedValue = applyCepMask(e.target.value);
                                                    setValue('deliveryAddress.cep', maskedValue);
                                                }
                                            }

                                    )}
                                />
                            </div>
                            <div className="rowStreet">
                                <input
                                    type="text" 
                                        placeholder="Rua"
                                        {...register('deliveryAddress.street', 
                                            {
                                                required: true,
                                                minLength: 1,
                                            }

                                    )}
                                />
                            </div>
                            <div className="rowNumberComplement">
                                <input 
                                    type="text"
                                        placeholder="Número"
                                        {...register('deliveryAddress.numberAddress', 
                                            {
                                                required: false,
                                            }

                                    )}
                                />
                                <input 
                                    type="text"
                                        placeholder="Complemento"
                                    {...register('deliveryAddress.addressComplement')}
                                />
                            </div>
                            <div className="rowNeighborhoodCityUF">
                                <input 
                                    type="text"
                                        placeholder="Bairro"
                                        {...register('deliveryAddress.neighborhood', 
                                            {
                                                required: true,
                                                minLength: 1,
                                            }

                                    )}
                                />
                                <input 
                                    type="text"
                                        placeholder="Cidade"
                                        {...register('deliveryAddress.city', 
                                            {
                                                required: true,
                                                minLength: 1,
                                            }

                                    )}
                                />
                                <input 
                                    type="text"
                                        placeholder="UF"
                                        {...register('deliveryAddress.UF', 
                                            {
                                                required: true,
                                                minLength: 1,
                                            }
                                    )}
                                />
                            </div>
            
                        </GridFormDelivery>
                    </FormDeliveryContainer>

                    <DeliveryPaymentContainer>
                        <TitleSubtitleContainer colorSvg={'purple'}>
                            <CurrencyDollar size={22}/>
                            <div>
                                <span>Pagamento</span>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</p>
                            </div>
                        </TitleSubtitleContainer>
                  
                       
                        <PaymentMethods>
                            <button>
                                <CreditCard size={16} />
                                <span>CARTÃO DE CRÉDITO</span>
                            </button>
                            <button>
                                <Bank size={16}/>
                                <span>CARTÃO DE DÉBITO</span>
                            </button>
                            <button>
                                <Money size={16}/>
                                <span>DINHEIRO</span>
                            </button>
                        </PaymentMethods>
                    </DeliveryPaymentContainer>
                </FormContainer>
            </SectionTitleContentContainer>
              
            <SectionTitleContentContainer>
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
                                            <button className="button_remove" onClick={(event) => removeCoffe(event, coffe)}>
                                                <Trash size={16}/>
                                                <span>REMOVER</span>
                                            </button>
                                        </div>
                                    </div>
                                </CoffeElementContainer>
                            
                                <CoffePrice
                                    coffePrice={roundUpToTwoDecimals(coffe.quantity * coffe.price)}
                                    fontSize="16px"
                                    fontSizeBefore="16px"
                                    fontWeigth="bold"
                                    fontWeigthBefore="bold"
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
                                fontSizeBefore="16px"
                                fontWeigth="normal"
                                fontWeigthBefore="normal"
                            />
                        </TotalItemsCoffeContainer>
                        <DeliveryCoffeContainer>
                            <span>Entrega</span>
                            <CoffePrice
                                coffePrice={deliveryValue}
                                fontSize="16px"
                                fontSizeBefore="16px"
                                fontWeigth="normal"
                                fontWeigthBefore="normal"
                            />
                        </DeliveryCoffeContainer>
                        <TotalContainer>
                            <span>Total</span>
                            <CoffePrice
                                coffePrice={roundUpToTwoDecimals(coffesTotal + deliveryValue)}
                                fontSize="16px"
                                fontSizeBefore="16px"
                                fontWeigth="normal"
                                fontWeigthBefore="normal"
                            />
                        </TotalContainer>
                    </TotalDeliveryContainer>
                    <SucessLinkContainer to="/success">
                        <button type="submit">Confirmar Pedido</button>
                    </SucessLinkContainer>
                </CartContainer>
                
            </SectionTitleContentContainer>
        </CheckoutContainer>

    )
}