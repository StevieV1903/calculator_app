import React, { useState } from 'react';
import './Calculator.css';
import CalculatorScreen from './components/CalculatorScreen.js';
import OperatorButton from './components/OperatorButton.js';
import NumberButton from './components/NumberButton.js';

const Calculator = () => {
	const [ storedNumberOne, setStoredNumberOne ] = useState('0');
	const [ storedNumberTwo, setStoredNumberTwo ] = useState('0');
	const [ storedOperation, setStoredOperation ] = useState('');
	const [ isAnswer, setIsAnswer ] = useState(false);

	const [ displayedNumber, setDisplayedNumber ] = useState('0');

	const handleAllClearClick = () => {
		setStoredNumberOne('0');
		setStoredNumberTwo('0');
		setDisplayedNumber('0');
		setStoredOperation('');
		setIsAnswer(false);
	};

	const handleDeleteClick = () => {
		if (isAnswer) {
			handleAllClearClick();
		} else if (storedOperation === '') {
			if (storedNumberOne !== '0') {
				let newStoredNumber = storedNumberOne.slice(0, -1);
				//returning the whole string without the last index
				setStoredNumberOne(newStoredNumber);
				setDisplayedNumber(newStoredNumber);
			}
		} else {
			if (storedNumberTwo !== '0') {
				let newStoredNumber = storedNumberTwo.slice(0, -1);
				//returning the whole string without the last index
				setStoredNumberTwo(newStoredNumber);
				setDisplayedNumber(newStoredNumber);
			}
		}
	};

	const handleEqualsClick = () => {
		if (storedOperation === '+') {
			let answer = parseFloat(storedNumberOne) + parseFloat(storedNumberTwo);
			setDisplayedNumber(answer.toString());
			setStoredNumberOne(answer.toString());
			setStoredNumberTwo('0');
		} else if (storedOperation === '-') {
			let answer = parseFloat(storedNumberOne) - parseFloat(storedNumberTwo);
			setDisplayedNumber(answer.toString());
			setStoredNumberOne(answer.toString());
			setStoredNumberTwo('0');
		} else if (storedOperation === '÷') {
			let answer = parseFloat(storedNumberOne) / parseFloat(storedNumberTwo);
			setDisplayedNumber(answer.toString());
			setStoredNumberOne(answer.toString());
			setStoredNumberTwo('0');
		} else if (storedOperation === 'x') {
			let answer = parseFloat(storedNumberOne) * parseFloat(storedNumberTwo);
			setDisplayedNumber(answer.toString());
			setStoredNumberOne(answer.toString());
			setStoredNumberTwo('0');
		}
		setStoredOperation('');
		setIsAnswer(true);
	};

	return (
		<div className="screen">
			<div className="calculator-container">
				<CalculatorScreen storedOperation={storedOperation} displayedNumber={displayedNumber} />

				<div className="calculator-digits-container">
					<OperatorButton
						storedOperation={storedOperation}
						setStoredOperation={setStoredOperation}
						setIsAnswer={setIsAnswer}
						handleEqualsClick={handleEqualsClick}
						operation={'+'}
					/>

					<OperatorButton
						storedOperation={storedOperation}
						setStoredOperation={setStoredOperation}
						setIsAnswer={setIsAnswer}
						handleEqualsClick={handleEqualsClick}
						operation={'-'}
					/>

					<OperatorButton
						storedOperation={storedOperation}
						setStoredOperation={setStoredOperation}
						setIsAnswer={setIsAnswer}
						handleEqualsClick={handleEqualsClick}
						operation={'x'}
					/>

					<OperatorButton
						storedOperation={storedOperation}
						setStoredOperation={setStoredOperation}
						setIsAnswer={setIsAnswer}
						handleEqualsClick={handleEqualsClick}
						operation={'÷'}
					/>

					<NumberButton
						isAnswer={isAnswer}
						handleAllClearClick={handleAllClearClick}
						setStoredNumberOne={setStoredNumberOne}
						setStoredNumberTwo={setStoredNumberTwo}
						setDisplayedNumber={setDisplayedNumber}
						storedOperation={storedOperation}
						storedNumberOne={storedNumberOne}
						storedNumberTwo={storedNumberTwo}
						number={'7'}
					/>

					<NumberButton
						isAnswer={isAnswer}
						handleAllClearClick={handleAllClearClick}
						setStoredNumberOne={setStoredNumberOne}
						setStoredNumberTwo={setStoredNumberTwo}
						setDisplayedNumber={setDisplayedNumber}
						storedOperation={storedOperation}
						storedNumberOne={storedNumberOne}
						storedNumberTwo={storedNumberTwo}
						number={'8'}
					/>

					<NumberButton
						isAnswer={isAnswer}
						handleAllClearClick={handleAllClearClick}
						setStoredNumberOne={setStoredNumberOne}
						setStoredNumberTwo={setStoredNumberTwo}
						setDisplayedNumber={setDisplayedNumber}
						storedOperation={storedOperation}
						storedNumberOne={storedNumberOne}
						storedNumberTwo={storedNumberTwo}
						number={'9'}
					/>

					<NumberButton
						isAnswer={isAnswer}
						handleAllClearClick={handleAllClearClick}
						setStoredNumberOne={setStoredNumberOne}
						setStoredNumberTwo={setStoredNumberTwo}
						setDisplayedNumber={setDisplayedNumber}
						storedOperation={storedOperation}
						storedNumberOne={storedNumberOne}
						storedNumberTwo={storedNumberTwo}
						number={'.'}
					/>

					<NumberButton
						isAnswer={isAnswer}
						handleAllClearClick={handleAllClearClick}
						setStoredNumberOne={setStoredNumberOne}
						setStoredNumberTwo={setStoredNumberTwo}
						setDisplayedNumber={setDisplayedNumber}
						storedOperation={storedOperation}
						storedNumberOne={storedNumberOne}
						storedNumberTwo={storedNumberTwo}
						number={'4'}
					/>

					<NumberButton
						isAnswer={isAnswer}
						handleAllClearClick={handleAllClearClick}
						setStoredNumberOne={setStoredNumberOne}
						setStoredNumberTwo={setStoredNumberTwo}
						setDisplayedNumber={setDisplayedNumber}
						storedOperation={storedOperation}
						storedNumberOne={storedNumberOne}
						storedNumberTwo={storedNumberTwo}
						number={'5'}
					/>

					<NumberButton
						isAnswer={isAnswer}
						handleAllClearClick={handleAllClearClick}
						setStoredNumberOne={setStoredNumberOne}
						setStoredNumberTwo={setStoredNumberTwo}
						setDisplayedNumber={setDisplayedNumber}
						storedOperation={storedOperation}
						storedNumberOne={storedNumberOne}
						storedNumberTwo={storedNumberTwo}
						number={'6'}
					/>

					<NumberButton
						isAnswer={isAnswer}
						handleAllClearClick={handleAllClearClick}
						setStoredNumberOne={setStoredNumberOne}
						setStoredNumberTwo={setStoredNumberTwo}
						setDisplayedNumber={setDisplayedNumber}
						storedOperation={storedOperation}
						storedNumberOne={storedNumberOne}
						storedNumberTwo={storedNumberTwo}
						number={'1'}
					/>

					<NumberButton
						isAnswer={isAnswer}
						handleAllClearClick={handleAllClearClick}
						setStoredNumberOne={setStoredNumberOne}
						setStoredNumberTwo={setStoredNumberTwo}
						setDisplayedNumber={setDisplayedNumber}
						storedOperation={storedOperation}
						storedNumberOne={storedNumberOne}
						storedNumberTwo={storedNumberTwo}
						number={'2'}
					/>

					<NumberButton
						isAnswer={isAnswer}
						handleAllClearClick={handleAllClearClick}
						setStoredNumberOne={setStoredNumberOne}
						setStoredNumberTwo={setStoredNumberTwo}
						setDisplayedNumber={setDisplayedNumber}
						storedOperation={storedOperation}
						storedNumberOne={storedNumberOne}
						storedNumberTwo={storedNumberTwo}
						number={'3'}
					/>

					<button className="all-clear-button" onClick={() => handleAllClearClick()}>
						AC
					</button>
					<button onClick={() => handleDeleteClick()}>del</button>

					<NumberButton
						isAnswer={isAnswer}
						handleAllClearClick={handleAllClearClick}
						setStoredNumberOne={setStoredNumberOne}
						setStoredNumberTwo={setStoredNumberTwo}
						setDisplayedNumber={setDisplayedNumber}
						storedOperation={storedOperation}
						storedNumberOne={storedNumberOne}
						storedNumberTwo={storedNumberTwo}
						number={'0'}
					/>

					<button className="equal-sign-button" onClick={() => handleEqualsClick()}>
						=
					</button>
				</div>
			</div>
		</div>
	);
};

export default Calculator;
