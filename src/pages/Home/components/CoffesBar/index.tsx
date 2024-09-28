
import { CoffeCartContainer, CoffeDescriptionContainer, CoffeElementContainer, CoffeInformationContainer, CoffePriceContainer, CoffesContainer, CoffesGridContainer, TagContainer } from './styles';
import { CoffesContext } from '../../../../contexts/CoffesContext';
import { useContext } from 'react';
import { CoffeQuantity } from '../../../../components/CoffeQuantity';
import { CoffePrice } from '../../../../components/CoffePrice';
import { ShoppingCartLink } from '../../../../components/ShoppingCartLink';


export function CoffesBar() {
    const {coffesAmount}= useContext(CoffesContext);
    
    return(
        <CoffesContainer>
            <h2>Nossos cafés</h2>
            <CoffesGridContainer>
                {coffesAmount.map((coffe) => (
                    <CoffeElementContainer key={coffe.name}>
                        <img src={coffe.src} alt="" />

                        <CoffeInformationContainer>
                            <TagContainer>
                                {coffe.tags.map((tag, index) => (
                                    <span key={`${tag}-${index}`}>{tag}</span>
                                ))}
                            </TagContainer>

                            <CoffeDescriptionContainer>
                                <span>{coffe.name}</span>
                                <p>{coffe.description}</p>
                            </CoffeDescriptionContainer>
                            <CoffePriceContainer>
                                <CoffePrice
                                    coffePrice={coffe.price}
                                    fontSize="24px"
                                    fontsizebefore="14px"
                                    fontWeight="bold"
                                    fontweigthbefore="normal"
                                />
                                <CoffeCartContainer>
                                    <CoffeQuantity coffe={coffe} height="2rem" />
                                    <nav>
                                        <ShoppingCartLink size={18} backgroundcolor={"white"}/>
                                    </nav>

                                </CoffeCartContainer>
                               
                            </CoffePriceContainer>

                        </CoffeInformationContainer>
         
                    </CoffeElementContainer>
                ))}
            </CoffesGridContainer>

        </CoffesContainer>
    )
}