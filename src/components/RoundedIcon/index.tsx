import { IconProps } from "phosphor-react";
import { IconContainer, StatusProps } from "./styles";

interface RoundedIconProps extends IconProps, StatusProps {
    IconComponent: React.ElementType;
}

export function RoundedIcon({color, size, weight, backgroundcolor, IconComponent}: RoundedIconProps) {
    return( 
        <IconContainer backgroundcolor={backgroundcolor}>
            <IconComponent color={color} size={size} weight={weight} />
        </IconContainer>
   );
}