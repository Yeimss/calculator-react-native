import { useEffect, useRef, useState } from "react";

enum Operator{
    add='+',
    substract='-',
    muliply = 'x',
    divide = '÷'
}

export const useCalculator = () => {
    const [formula, setFormula] = useState('0');
    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');
    
    useEffect(() => {
        //calcular subresultado
        setFormula(number)

    }, [number])

    const lastOperation = useRef<Operator|undefined>(Operator.add);

    useEffect(() => {
        //calcular subresultado
        setFormula(number)

    }, [number])
    
    useEffect(() => {
        if(lastOperation.current){
            const firstFormulaPart = formula.split(' ').at(0)
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`)
        }else{
            setFormula(number)
        }
    }, [number])
    const clean = () => {
        setNumber('0')
        setPrevNumber('0')
        setFormula('0')
        
        lastOperation.current = undefined; 
    } 

    const toggleSign = () => {
        if(number.includes('-')){
            return setNumber(number.replace('-',''))
        }
        setNumber('-' + number)
    }

    const deleteLast = () => {
        if(number.length === 2 && number.startsWith('-')) return setNumber('0')
        if(number.length === 1 && !number.startsWith('-')) return setNumber('0')

        return setNumber(number.slice(0,-1))
    }

    const setLastNumber = () => {
        // TODO: Calculate
        if(number.endsWith('.')){
            return setPrevNumber(number.slice(0, -1))
        }
        setPrevNumber(number)
        setNumber('0')   
    }
    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    }
    const subtractionOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.substract;
    }
    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    }
    const muliplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.muliply;
    }
    const buildNumber = (numberString:string) => {
        //verificar si ya existe el punto decimal
        if (number.includes('.') && numberString==='.') return;
        if (number.startsWith('0') || number.startsWith('0')){
            if(numberString === '.') return setNumber(number+numberString);
            if(numberString === '0' && number.includes('.')) return setNumber(number+numberString);
            if(numberString === '0' && !number.includes('.')) return;
            if(numberString !== '0' && !number.includes('.') && number.length === 1) return setNumber(numberString);
        }

        setNumber(number + numberString)
    }

    return {
        //props
        formula,
        number,
        prevNumber,
        //methods
        buildNumber,
        clean,
        toggleSign,
        deleteLast,
        divideOperation,
        subtractionOperation,
        addOperation,
        muliplyOperation
    }
}