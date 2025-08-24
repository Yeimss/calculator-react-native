import CalculatorButton from '@/components/CalculatorButton';
import ThemeText from '@/components/ThemeText';
import { useTheme } from '@/context/theme-context';
import { SafeAreaView, View } from 'react-native';


const CalculatorApp = () => {
  const { styles } = useTheme();
    return ( 
      <SafeAreaView style={styles.calculatorContainer}>
        {/*    resultados     */}
        <View style={{ paddingHorizontal:30, paddingBottom:20 }}>
          <ThemeText variant='h1'>50 x 50</ThemeText>
          <ThemeText variant='h2'>2500</ThemeText>
        </View>


        {/*    filas de botones     */}
        <View style={styles.row}>
          <CalculatorButton label='C' btnType='function' onPress={() => console.log('C')}></CalculatorButton>
          <CalculatorButton label='±' btnType='function' onPress={() => console.log('±')}></CalculatorButton>
          <CalculatorButton label='del' btnType='function' onPress={() => console.log('del')}></CalculatorButton>
          <CalculatorButton label='÷' btnType='operator' onPress={() => console.log('÷')}></CalculatorButton>
        </View>

        <View style={styles.row}>
          <CalculatorButton label='7' btnType='number' onPress={() => console.log('7')}></CalculatorButton>
          <CalculatorButton label='8' btnType='number' onPress={() => console.log('8')}></CalculatorButton>
          <CalculatorButton label='9' btnType='number' onPress={() => console.log('9')}></CalculatorButton>
          <CalculatorButton label='x' btnType='operator' onPress={() => console.log('x')}></CalculatorButton>
        </View>

        <View style={styles.row}>
          <CalculatorButton label='4' btnType='number' onPress={() => console.log('4')}></CalculatorButton>
          <CalculatorButton label='5' btnType='number' onPress={() => console.log('5')}></CalculatorButton>
          <CalculatorButton label='6' btnType='number' onPress={() => console.log('6')}></CalculatorButton>
          <CalculatorButton label='-' btnType='operator' onPress={() => console.log('-')}></CalculatorButton>
        </View>

        <View style={styles.row}>
          <CalculatorButton label='1' btnType='number' onPress={() => console.log('1')}></CalculatorButton>
          <CalculatorButton label='2' btnType='number' onPress={() => console.log('2')}></CalculatorButton>
          <CalculatorButton label='3' btnType='number' onPress={() => console.log('3')}></CalculatorButton>
          <CalculatorButton label='+' btnType='operator' onPress={() => console.log('+')}></CalculatorButton>
        </View>

        <View style={styles.row}>
          <CalculatorButton label='0' doubleSize={true} btnType='number' onPress={() => console.log('0')}></CalculatorButton>
          <CalculatorButton label='.' btnType='number' onPress={() => console.log('.')}></CalculatorButton>
          <CalculatorButton label='=' btnType='operator' onPress={() => console.log('=')}></CalculatorButton>
        </View>

      </SafeAreaView>
    )
}

export default CalculatorApp
