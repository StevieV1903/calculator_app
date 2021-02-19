import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {

    const [ storedNumberOne, setStoredNumberOne ] = useState( "" );
    const [ storedNumberTwo, setStoredNumberTwo ] = useState( "" );
    const [ storedOperation, setStoredOperation ] = useState( "" );

    const [ displayedNumber, setDisplayedNumber ] = useState( "" );


    const handleNumberClick = ( number ) => {
        let newStoredNumber
        if( storedOperation === ""){
            newStoredNumber = storedNumberOne
            newStoredNumber += number
            setStoredNumberOne( newStoredNumber )
            setDisplayedNumber( newStoredNumber )
        }
        else{
            newStoredNumber = storedNumberTwo
            newStoredNumber += number
            setStoredNumberTwo( newStoredNumber )
            setDisplayedNumber( newStoredNumber )
            // console.log(storedNumberTwo)
            // console.log(newStoredNumber)
        }
        
        // console.log(newStoredNumber)
    };

    const handleAllClearClick = () => {
        setStoredNumberOne( "" )
        setStoredNumberTwo( "" )
        setDisplayedNumber( "" )
        setStoredOperation( "" )
    };

    const handleDeleteClick = () => {
        let newStoredNumber = storedNumberOne.slice( 0, -1 )
        //returning the whole string without the last index
        setStoredNumberOne( newStoredNumber )
        setDisplayedNumber( newStoredNumber )
    };

    const handleAddClick = ( ) => {
        setStoredOperation( "+" )
        setDisplayedNumber( "" )
    };

    const handleEqualsClick = () => {
        if( storedOperation === "+" ){
            setDisplayedNumber( parseFloat( storedNumberOne ) + parseFloat( storedNumberTwo ) )
        }
    }

    return(
        <div>

            <p> { displayedNumber } </p>

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
            <button onClick={ () => handleAddClick() }>+</button>
            <button>-</button>
            <button>/</button>
            <button>x</button>
            <button onClick={ () => handleEqualsClick() }>=</button>

        </div>
    )
};

export default Calculator;