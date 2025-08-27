import { Colors } from "@/constants/Colors";
import { useTheme } from "@/context/theme-context";
import { useCalculator } from "@/hooks/useCalculator";
import * as Haptics from 'expo-haptics';
import { Pressable, Text } from "react-native";
type btnType = 'number' | 'function' | 'operator'; 

interface Props {
    label:string;
    btnType:btnType;
    onPress: () => void
    doubleSize?: boolean
}


const CalculatorButton = ({label, btnType, onPress, doubleSize=false }:Props) => {


    const { lightMode, styles } = useTheme()
    const colores = lightMode ? Colors.light : Colors.dark

    const getBgColor = (type:btnType) : string | undefined => {
        if(type==='number') return colores.numbersBg
        if(type==='function') return colores.functionsBg
        if(type==='operator') return colores.operatorsBg
    }
    const getTextColor = (type:btnType) : string | undefined => {
        if(type==='number') return colores.numbersColor
        if(type==='function') return colores.functionsColor
        if(type==='operator') return colores.functionsColor
    }

    return (
        <Pressable 
            style={({ pressed }) => ({
                ...styles.button,
                backgroundColor: getBgColor(btnType),
                opacity: pressed ? 0.6 : 1,
                width: doubleSize ? 180 : 80
            })}
            onPress={() => {
                Haptics.notificationAsync(
                    Haptics.NotificationFeedbackType.Success
                )
                onPress();
            }} 
        >
            <Text style={[styles.buttonText, { color: getTextColor(btnType)}]}>
                {label}
            </Text>
        </Pressable>
    )
}

export default CalculatorButton;