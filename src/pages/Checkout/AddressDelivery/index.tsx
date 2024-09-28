import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";
import { useContext } from "react";
import { CoffesContext, PaymentMethod } from "../../../contexts/CoffesContext";
import { GridFormDelivery } from "../GridFormDelivery";
import { ButtonPaymentContainer, DeliveryPaymentContainer, FormContainer, FormDeliveryContainer, PaymentMethodsContainer, SectionTitleContentContainer, TitleSubtitleContainer } from "./styles";

export function AddressDelivery() {
    const {
        register, 
        setValue, 
        watch, 
    }= useContext(CoffesContext);
    const isSelectedPaymentMethod = (paymentMethod: PaymentMethod) => 
        watch('payment.paymentMethod') === paymentMethod;
    function handleChangePaymentMethod(paymentMethod: PaymentMethod) {
        setValue('payment.paymentMethod', paymentMethod);
    }
    return (
        <SectionTitleContentContainer>
            <h3>Complete seu pedido</h3>
            <FormContainer>
                <FormDeliveryContainer >
                    <TitleSubtitleContainer color={'yellowDark'}> 
                        <MapPinLine size={22} />
                        <div>
                            <span>Endereço de Entrega</span>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </TitleSubtitleContainer>
                        <GridFormDelivery />
                </FormDeliveryContainer>

                <DeliveryPaymentContainer>
                    <TitleSubtitleContainer color={'purple'}>
                        <CurrencyDollar size={22}/>
                        <div>
                            <span>Pagamento</span>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</p>
                        </div>
                    </TitleSubtitleContainer>
                    <PaymentMethodsContainer>
                        <ButtonPaymentContainer 
                            type="button" 
                            {...register('payment.paymentMethod')} 
                            onClick={() => handleChangePaymentMethod('credit')}
                            selected= {isSelectedPaymentMethod('credit')}
                        >
                            <CreditCard size={16} />
                            <span>CARTÃO DE CRÉDITO</span>
                        </ButtonPaymentContainer>
                        <ButtonPaymentContainer 
                            type="button" 
                            {...register('payment.paymentMethod')} 
                            onClick={() => handleChangePaymentMethod('debit')}
                            selected= {isSelectedPaymentMethod('debit')}
                        >
                            <Bank size={16}/>
                            <span>CARTÃO DE DÉBITO</span>
                        </ButtonPaymentContainer>
                        <ButtonPaymentContainer 
                            type="button" 
                            {...register('payment.paymentMethod')}
                            onClick={() => handleChangePaymentMethod('money')}
                            selected= {isSelectedPaymentMethod('money')}
                        >
                            <Money size={16}/>
                            <span>DINHEIRO</span>
                        </ButtonPaymentContainer>
                    </PaymentMethodsContainer>
                </DeliveryPaymentContainer>
            </FormContainer>
        </SectionTitleContentContainer>
    )
}