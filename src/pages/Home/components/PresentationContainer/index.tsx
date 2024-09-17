import { Coffee,  Package, ShoppingCart, Timer } from "phosphor-react";
import CoffeHome from "../../../../assets/coffe_home.svg";
import { PresentationContainer, ItemContainer, ItemsContainer, TitleContainer } from "./styles";
import { RoundedIcon } from "../.../../../../../components/RoundedIcon";

export function Presentation()  {
    return (
        <PresentationContainer>
            <section>
                <TitleContainer>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </TitleContainer>
        
                <ItemsContainer>
                    <ItemContainer>
                        <RoundedIcon 
                            color="white" 
                            size={16} 
                            weight="fill"
                            IconComponent={ShoppingCart}
                            backgroundColor={"yellowDark"}
                        />
                        <span>Compra simples e segura</span>
                    </ItemContainer>
                    <ItemContainer>
                        <RoundedIcon 
                            color="white" 
                            size={16} 
                            weight="fill"
                            IconComponent={Package}
                            backgroundColor={"baseText"}
                        />
                        <span>Embalagem mantém o café intacto</span>
                    </ItemContainer>
                    <ItemContainer>
                        <RoundedIcon 
                            color="white" 
                            size={16} 
                            weight="fill"
                            IconComponent={Timer}
                            backgroundColor={"yellow"}
                        />
                        <span>Entrega rápida e rastreada</span>
                    </ItemContainer>
                    <ItemContainer>
                        <RoundedIcon 
                            color="white" 
                            size={16} 
                            weight="fill"
                            IconComponent={Coffee}
                            backgroundColor={"purple"}
                        />
                        <span>O café chega fresquinho até você</span>
                    </ItemContainer>
                </ItemsContainer>
            </section>
            <div>
                <img src={CoffeHome} alt="" />
            </div>
        </PresentationContainer>
    );
}