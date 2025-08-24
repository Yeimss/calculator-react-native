import { useTheme } from '@/context/theme-context';
import React from 'react';
import { Text, TextProps } from 'react-native';

interface Props extends TextProps{
    variant:'h1'|'h2';
}
const ThemeText = ({ children, variant, ...rest }:Props) => {
    const { styles } = useTheme()
    return (
        <Text 
            {...rest}
            style={[
                { fontFamily: 'SpaceMono' },
                variant === 'h1' ? styles.mainResult : styles.subResult
            ]}
        > 
            {children} 
        </Text>
    )
}
export default ThemeText
