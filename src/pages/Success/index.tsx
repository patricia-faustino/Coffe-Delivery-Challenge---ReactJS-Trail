import { useContext } from "react";
import { CoffesContext, PaymentMethod } from "../../contexts/CoffesContext";
import { RoundedIcon } from "../../components/RoundedIcon";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import DeliverySuccess from "../../assets/delivery_success.svg";
import { CartSuccessContainer, DeliveryContentContainer, InformationSuccessContainer, MainSuccessContainer, SectionInformationSuccessContainer, SuccessContainer, TitleSubtitleSuccessContainer, TitleSuccessContainer } from "./styles";

export function Success() {
    const {watch}= useContext(CoffesContext);
    const paymentMethod = watch('payment.paymentMethod');
    const deliveryAddress  = watch('deliveryAddress');
    const formatPaymentMethod = () => {
        const paymentDict: Record<PaymentMethod, string> = {
            credit: "Cartão de Crédito",
            debit: "Cartão de Débito",
            money: "Dinheiro",
            "": ""
        };
        return paymentDict[paymentMethod];
    }

    return (
        <SuccessContainer>
            <DeliveryContentContainer>
                <TitleSubtitleSuccessContainer>
                    <TitleSuccessContainer>Uhu! Pedido Confirmado</TitleSuccessContainer>
                    <span>Agora é só aguardar que logo o café chegará até você</span>
                </TitleSubtitleSuccessContainer>

                <MainSuccessContainer>
                    <CartSuccessContainer>
                        <InformationSuccessContainer>
                            <SectionInformationSuccessContainer>
                                <RoundedIcon 
                                    color="white" 
                                    size={16} 
                                    weight="fill"
                                    IconComponent={MapPin}
                                    backgroundcolor={"purple"}
                                />
                                <div>
                                    <p>Entrega em <span>{deliveryAddress.street}, {deliveryAddress.numberAddress}</span></p>
                                    <span>{deliveryAddress.neighborhood} - {deliveryAddress.city}, {deliveryAddress.UF}</span>
                                </div>

                            </SectionInformationSuccessContainer>

                            <SectionInformationSuccessContainer>
                                <RoundedIcon 
                                    color="white" 
                                    size={16} 
                                    weight="fill"
                                    IconComponent={Timer}
                                    backgroundcolor={"yellow"}
                                />
                                <div>
                                    <p>Previsão de entrega</p>
                                    <span className="text-bolder">20 min - 30min</span>
                                </div>
                            </SectionInformationSuccessContainer>

                            <SectionInformationSuccessContainer>
                                <RoundedIcon 
                                    color="white" 
                                    size={16} 
                                    weight="fill"
                                    IconComponent={CurrencyDollar}
                                    backgroundcolor={"yellowDark"}
                                />
                                <div>
                                    <p>Pagamento na entrega</p>
                                    <span className="text-bolder">{formatPaymentMethod()}</span>
                                </div>
                            </SectionInformationSuccessContainer>
                        </InformationSuccessContainer>
                    </CartSuccessContainer>
                    <img src={DeliverySuccess} alt="" />
                </MainSuccessContainer>
            </DeliveryContentContainer>
      </SuccessContainer>
       
    )
}