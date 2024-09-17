import { IconProps } from "phosphor-react";
import { IconContainer, StatusProps } from "./styles";

interface RoundedIconProps extends IconProps, StatusProps {
    IconComponent: React.ElementType;
}

export function RoundedIcon({color, size, weight,backgroundColor, IconComponent}: RoundedIconProps) {
    return( 
        <IconContainer backgroundColor={backgroundColor}>
            <IconComponent color={color} size={size} weight={weight} />
        </IconContainer>
   );
}