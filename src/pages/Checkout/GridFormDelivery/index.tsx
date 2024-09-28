import { useContext } from "react";
import { CoffesContext } from "../../../contexts/CoffesContext";
import { GridFormDeliveryContainer } from "./styles";

export function GridFormDelivery() {
    const {
        register, 
        setValue, 
    }= useContext(CoffesContext);

    const applyCepMask = (value: string): string => {
        const numericValue = value.replace(/\D/g, '');
        const limitedValue = numericValue.slice(0, 8);
        return limitedValue.replace(/(\d{5})(\d{1,3})/, '$1-$2');
    };
    
    return (
        <GridFormDeliveryContainer>
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
                            minLength: 1
                        
                        }
                    )}
                />
            </div>
            <div className="rowNumberComplement">
                <input 
                    type="text"
                    placeholder="Número"
                    {...register('deliveryAddress.numberAddress')}
                />
                <div className="inputContainer">
                    <input 
                        type="text"
                        className="inputComplement"
                        placeholder="Complemento"
                        {...register('deliveryAddress.addressComplement')}
                    />
                    <span className="optionalText">Opcional</span>
                </div>
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
        </GridFormDeliveryContainer>
    )
}