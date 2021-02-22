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
            if( storedNumberOne !== "0" ){
            let newStoredNumber = storedNumberOne.slice( 0, -1 )
            //returning the whole string without the last index
            setStoredNumberOne( newStoredNumber )
            setDisplayedNumber( newStoredNumber )}
        }else{
            // if( storedNumberTwo === "" ){
            //     handleAllClearClick()
            // }else{
            if( storedNumberTwo !== "0" ){
            let newStoredNumber = storedNumberTwo.slice( 0, -1 )
            //returning the whole string without the last index
            setStoredNumberTwo( newStoredNumber )
            setDisplayedNumber( newStoredNumber )}
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
        else if( storedOperation === "÷" ){
            let answer = parseFloat( storedNumberOne ) / parseFloat( storedNumberTwo )
            setDisplayedNumber( answer )
            setStoredNumberOne( answer.toString() )
            setStoredNumberTwo( "0" )
        }
        else if( storedOperation === "x" ){
            let answer = parseFloat( storedNumberOne ) * parseFloat( storedNumberTwo )
            setDisplayedNumber( answer )
            setStoredNumberOne( answer.toString() )
            setStoredNumberTwo( "0" )
        }
        setStoredOperation( "" )
        setIsAnswer( true )
    };

    const limitDisplayToTen = ( displayedNumber ) => {
        let shortenedDisplayNumber = displayedNumber.slice( 0, 10 )
        setDisplayedNumber( shortenedDisplayNumber )
    }

    

    // const handlePointClick = () => {

    // };


    // const limitDisplayToTen = ( ) => {
    // document.getElementById("display").maxLength="10";
    // }

    return(
        <div className="screen">
       
        <div className="calculator-container">
            <div className="calculator-screen">
                
            <p> { storedOperation } </p>
            <p className="calculator-screen-numbers"> { +parseFloat(displayedNumber).toFixed( 8 ) } </p>
            {/* <p id="display"> { limitDisplayToTen(+parseFloat(displayedNumber).toFixed( 8 )) } </p> */}
               
            </div>

            <div className="calculator-digits-container">
            
            <button className="operator-button" onClick={ () => handleOperationClick("+") }>+</button>
            <button className="operator-button" onClick={ () => handleOperationClick("-") }>-</button>
            <button className="operator-button" onClick={ () => handleOperationClick("÷") }>÷</button>
            <button className="operator-button" onClick={ () => handleOperationClick("x") }>x</button>

            <button onClick={ () => handleNumberClick("7") }>7</button>
            <button onClick={ () => handleNumberClick("8") }>8</button>
            <button onClick={ () => handleNumberClick("9") }>9</button>
            <button className="decimal-point-button" onClick={ () => handleNumberClick(".") }>.</button>

            <button onClick={ () => handleNumberClick("4") }>4</button>
            <button onClick={ () => handleNumberClick("5") }>5</button>
            <button onClick={ () => handleNumberClick("6") }>6</button>

            <button onClick={ () => handleNumberClick("1") }>1</button>
            <button onClick={ () => handleNumberClick("2") }>2</button>
            <button onClick={ () => handleNumberClick("3") }>3</button>

            <button className="all-clear-button" onClick={ () => handleAllClearClick() }>AC</button>
            <button onClick={ () => handleDeleteClick() }>del</button>
            <button onClick={ () => handleNumberClick("0") }>0</button>

                        
          
            <button className="equal-sign-button" onClick={ () => handleEqualsClick() }>=</button>
            </div>

        </div>
        </div>
    )
};

export default Calculator;