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
    
    const lastOperation = useRef<Operator|undefined>(undefined);
       
    useEffect(() => {
        if(lastOperation.current){
            const firstFormulaPart = formula.split(' ').at(0)
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`)
        }else{
            setFormula(number)
        }
    }, [number])
    
    useEffect(() => {
        if(formula.split(' ').length > 1){
            let subResult = calculateSubResult();
            setPrevNumber(`${subResult}`)
        }
    }, [formula])
    
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
        calculateResult();

        if(number.endsWith('.')){
            setPrevNumber(number.slice(0, -1))
        }
        setPrevNumber(number)
        setNumber('0')   
    }
    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    }

    const subtractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.substract;
    }

    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    }

    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.muliply;
    }
    const calculateSubResult = () => {
        const [ firstValue, operator, secondValue] = formula.split(' ');
        const n1 = Number(firstValue)
        const n2 = Number(secondValue)
        if( isNaN(n2) ) return n1;
        switch (operator) {
            case Operator.add:
                return n1 + n2;
            case Operator.divide:
                return n1 / n2;
            case Operator.substract:
                return n1 - n2;
            case Operator.muliply:
                return n1 * n2;
            default:
                throw Error(`Operación invalida: ${operator} `)
        }
    }

    const calculateResult = () => {
        const result = calculateSubResult();
        setFormula(`${result}`);

        lastOperation.current = undefined;
        setPrevNumber('0');
    };


    const buildNumber = (numberString:string) => {
        //verificar si ya existe el punto decimal
        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')){

            if(numberString === '.') return setNumber(number + numberString);
            
            if(numberString === '0' && number.includes('.')) return setNumber(number + numberString);
            
            if(numberString !== '0' && !number.includes('.')) return setNumber(numberString);
            
            if(numberString === '0' && !number.includes('.')) return;
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
        addOperation,
        multiplyOperation,
        subtractOperation,   
        calculateResult,
        calculateSubResult
    }
}