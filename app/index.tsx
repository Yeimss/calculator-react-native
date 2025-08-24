import { useTheme } from '@/context/theme-context';
import { SafeAreaView, Text } from 'react-native';


const CalculatorApp = () => {
  const { styles } = useTheme();
    return ( 
      <SafeAreaView style={styles.calculatorContainer}>
        <Text style={styles.mainResult}> 50 x 50 </Text>
        <Text style={styles.subResult}> 2500 </Text>
      </SafeAreaView>
    )
}

export default CalculatorApp
