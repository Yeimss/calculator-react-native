import CalculatorButton from '@/components/CalculatorButton';
import ThemeText from '@/components/ThemeText';
import { useTheme } from '@/context/theme-context';
import { useCalculator } from '@/hooks/useCalculator';
import { SafeAreaView, View } from 'react-native';


const CalculatorApp = () => {
  const { styles } = useTheme();
    const { 
        formula,
        prevNumber,
        buildNumber,
        clean,
        toggleSign,
        deleteLast,
        divideOperation,
        addOperation, 
        muliplyOperation,
        subtractionOperation
    } = useCalculator()

    return ( 
      <SafeAreaView style={styles.calculatorContainer}>
        {/*    resultados     */}
        <View style={{ paddingHorizontal:30, paddingBottom:20 }}>
          <ThemeText variant='h1'>{formula}</ThemeText>
          {
            formula === prevNumber ? (
              <ThemeText variant='h2'></ThemeText>
            ) : (
              <ThemeText variant='h2'>{prevNumber}</ThemeText>
            )
          }
        </View>

        {/*    filas de botones       */}
        <View style={styles.row}>
          <CalculatorButton label='C' btnType='function' onPress={clean}></CalculatorButton>
          <CalculatorButton label='+/-' btnType='function' onPress={toggleSign}></CalculatorButton>
          <CalculatorButton label='del' btnType='function' onPress={deleteLast}></CalculatorButton>
          <CalculatorButton label='÷' btnType='operator' onPress={divideOperation}></CalculatorButton>
        </View>

        <View style={styles.row}>
          <CalculatorButton label='7' btnType='number' onPress={() => buildNumber('7')}></CalculatorButton>
          <CalculatorButton label='8' btnType='number' onPress={() => buildNumber('8')}></CalculatorButton>
          <CalculatorButton label='9' btnType='number' onPress={() => buildNumber('9')}></CalculatorButton>
          <CalculatorButton label='x' btnType='operator' onPress={muliplyOperation}></CalculatorButton>
        </View>

        <View style={styles.row}>
          <CalculatorButton label='4' btnType='number' onPress={() => buildNumber('4')}></CalculatorButton>
          <CalculatorButton label='5' btnType='number' onPress={() => buildNumber('5')}></CalculatorButton>
          <CalculatorButton label='6' btnType='number' onPress={() => buildNumber('6')}></CalculatorButton>
          <CalculatorButton label='-' btnType='operator' onPress={subtractionOperation}></CalculatorButton>
        </View>

        <View style={styles.row}>
          <CalculatorButton label='1' btnType='number' onPress={() => buildNumber('1')}></CalculatorButton>
          <CalculatorButton label='2' btnType='number' onPress={() => buildNumber('2')}></CalculatorButton>
          <CalculatorButton label='3' btnType='number' onPress={() => buildNumber('3')}></CalculatorButton>
          <CalculatorButton label='+' btnType='operator' onPress={addOperation}></CalculatorButton>
        </View>

        <View style={styles.row}>
          <CalculatorButton label='0' doubleSize={true} btnType='number' onPress={() => buildNumber('0')}></CalculatorButton>
          <CalculatorButton label='.' btnType='number' onPress={() => buildNumber('.')}></CalculatorButton>
          <CalculatorButton label='=' btnType='operator' onPress={() => console.log('=')}></CalculatorButton>
        </View>

      </SafeAreaView>
    )
}

export default CalculatorApp
