import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {

    const [ storedNumberOne, setStoredNumberOne ] = useState( "0" );
    const [ storedNumberTwo, setStoredNumberTwo ] = useState( "0" );
    const [ storedOperation, setStoredOperation ] = useState( "" );
    const [ isAnswer, setIsAnswer ] = useState( false );

    const [ displayedNumber, setDisplayedNumber ] = useState( "0" );


    const handleNumberClick = ( number ) => {
        let newStoredNumber

        if( isAnswer ) {
            handleAllClearClick()
            setStoredNumberOne( number )
            setDisplayedNumber( number )
        }
        
        else 
        if( storedOperation === ""){
            if( number === "." && !storedNumberOne.includes(".")) {
            newStoredNumber = storedNumberOne
            newStoredNumber += number
            setStoredNumberOne( newStoredNumber )
            setDisplayedNumber( newStoredNumber )
            } else if( number !== "." ){
            newStoredNumber = storedNumberOne
            newStoredNumber += number
            setStoredNumberOne( newStoredNumber )
            setDisplayedNumber( newStoredNumber )
        }
    }
        else{
            if( number === "." && !storedNumberTwo.includes(".")) {
                newStoredNumber = storedNumberTwo
                newStoredNumber += number
                setStoredNumberTwo( newStoredNumber )
                setDisplayedNumber( newStoredNumber )
                } else if( number !== "." ){
                newStoredNumber = storedNumberTwo
                newStoredNumber += number
                setStoredNumberTwo( newStoredNumber )
                setDisplayedNumber( newStoredNumber )
            }
        }
        
        // console.log(newStoredNumber)
    };

    const handleAllClearClick = () => {
        setStoredNumberOne( "0" )
        setStoredNumberTwo( "0" )
        setDisplayedNumber( "0" )
        setStoredOperation( "" )
        setIsAnswer( false )
    };

    const handleDeleteClick = () => {
        if( isAnswer ){
            handleAllClearClick()
        }
        else if( storedOperation === "" ){
            let newStoredNumber = storedNumberOne.slice( 0, -1 )
            //returning the whole string without the last index
            setStoredNumberOne( newStoredNumber )
            setDisplayedNumber( newStoredNumber )
        }else{
            // if( storedNumberTwo === "" ){
            //     handleAllClearClick()
            // }else{
            let newStoredNumber = storedNumberTwo.slice( 0, -1 )
            //returning the whole string without the last index
            setStoredNumberTwo( newStoredNumber )
            setDisplayedNumber( newStoredNumber )
        // }
    }
        
    };

    const handleOperationClick = ( operation ) => {
        if( storedOperation === "" ){
            setStoredOperation( operation )
            // setDisplayedNumber( "" )
        } else{
            handleEqualsClick()
        }  
        setIsAnswer( false )
    };


    const handleEqualsClick = () => {
        if( storedOperation === "+" ){
            let answer = parseFloat( storedNumberOne ) + parseFloat( storedNumberTwo )
            setDisplayedNumber( answer )
            setStoredNumberOne( answer.toString() )
            setStoredNumberTwo( "0" )
        }
        else if( storedOperation === "-" ){
            let answer = parseFloat( storedNumberOne ) - parseFloat( storedNumberTwo )
            setDisplayedNumber( answer )
            setStoredNumberOne( answer.toString() )
            setStoredNumberTwo( "0" )
        }
        else if( storedOperation === "/" ){
            let answer = parseFloat( storedNumberOne ) / parseFloat( storedNumberTwo )
            setDisplayedNumber( answer )
            setStoredNumberOne( answer.toString() )
            setStoredNumberTwo( "0" )
        }
        else if( storedOperation === "*" ){
            let answer = parseFloat( storedNumberOne ) * parseFloat( storedNumberTwo )
            setDisplayedNumber( answer )
            setStoredNumberOne( answer.toString() )
            setStoredNumberTwo( "0" )
        }
        setStoredOperation( "" )
        setIsAnswer( true )
    };

    // const handlePointClick = () => {

    // };

    return(
        <div>

            <p> { +parseFloat(displayedNumber).toFixed( 8 ) } </p>

            <button onClick={ () => handleAllClearClick() }>AC</button>
            <button onClick={ () => handleDeleteClick() }>C</button>
            <button onClick={ () => handleNumberClick("1") }>1</button>
            <button onClick={ () => handleNumberClick("2") }>2</button>
            <button onClick={ () => handleNumberClick("3") }>3</button>
            <button onClick={ () => handleNumberClick("4") }>4</button>
            <button onClick={ () => handleNumberClick("5") }>5</button>
            <button onClick={ () => handleNumberClick("6") }>6</button>
            <button onClick={ () => handleNumberClick("7") }>7</button>
            <button onClick={ () => handleNumberClick("8") }>8</button>
            <button onClick={ () => handleNumberClick("9") }>9</button>
            <button onClick={ () => handleNumberClick("0") }>0</button>
            <button onClick={ () => handleNumberClick(".") }>.</button>
            <button onClick={ () => handleOperationClick("+") }>+</button>
            <button onClick={ () => handleOperationClick("-") }>-</button>
            <button onClick={ () => handleOperationClick("/") }>/</button>
            <button onClick={ () => handleOperationClick("*") }>x</button>
            <button onClick={ () => handleEqualsClick() }>=</button>

        </div>
    )
};

export default Calculator;