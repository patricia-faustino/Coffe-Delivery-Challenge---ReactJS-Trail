
import { CoffeCartContainer, CoffeDescriptionContainer, CoffeElementContainer, CoffeInformationContainer, CoffePriceContainer, CoffeQuantityContainer, CoffesContainer, CoffesGridContainer, ShoppingCartContainer, TagContainer } from './styles';
import { CoffesContext } from '../../../../contexts/CoffesContext';
import { useContext } from 'react';
import { ShoppingCart } from 'phosphor-react';
import { CoffeQuantity } from '../../../../components/CoffeQuantity';
import { CoffePrice } from '../../../../components/CoffePrice';


export function CoffesBar() {
    const {coffesAmount, addAmountCoffe, decreaseQuantityCoffe}= useContext(CoffesContext);
    
    return(
        <CoffesContainer>
            <h2>Nossos cafés</h2>
            <CoffesGridContainer>
                {coffesAmount.map((coffe) => (
                    <CoffeElementContainer key={coffe.name}>
                        <img src={coffe.src} alt="" />

                        <CoffeInformationContainer>
                            <TagContainer>
                                {coffe.tags.map((tag) => (
                                    <span>{tag}</span>
                                ))}
                            </TagContainer>

                            <CoffeDescriptionContainer>
                                <span>{coffe.name}</span>
                                <p>{coffe.description}</p>
                            </CoffeDescriptionContainer>
                            <CoffePriceContainer>
                                <CoffePrice coffePrice={coffe.price} fontSize="24px" />
                                <CoffeCartContainer>
                                    <CoffeQuantity coffe={coffe} />
                                    <ShoppingCartContainer>
                                        <ShoppingCart size={18} color={"white"} weight="fill" />
                                    </ShoppingCartContainer>
                                </CoffeCartContainer>
                               
                            </CoffePriceContainer>

                        </CoffeInformationContainer>
         
                    </CoffeElementContainer>
                ))}
            </CoffesGridContainer>

        </CoffesContainer>
    )
}