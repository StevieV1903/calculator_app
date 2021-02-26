import React from 'react';

const NumberButton = ({
	isAnswer,
	setStoredNumberOne,
	setStoredNumberTwo,
	storedNumberOne,
	storedNumberTwo,
	handleAllClearClick,
	setDisplayedNumber,
	storedOperation,
	number
}) => {
	const handleNumberClick = () => {
		let newStoredNumber;

		if (isAnswer) {
			handleAllClearClick();
			setStoredNumberOne(number);
			setDisplayedNumber(number);
		} else if (storedOperation === '') {
			if (number === '.' && !storedNumberOne.includes('.')) {
				newStoredNumber = storedNumberOne;
				newStoredNumber += number;
				setStoredNumberOne(newStoredNumber);
				setDisplayedNumber(newStoredNumber);
			} else if (number !== '.') {
				newStoredNumber = storedNumberOne;
				newStoredNumber += number;
				setStoredNumberOne(newStoredNumber);
				setDisplayedNumber(newStoredNumber);
			}
		} else {
			if (number === '.' && !storedNumberTwo.includes('.')) {
				newStoredNumber = storedNumberTwo;
				newStoredNumber += number;
				setStoredNumberTwo(newStoredNumber);
				setDisplayedNumber(newStoredNumber);
			} else if (number !== '.') {
				newStoredNumber = storedNumberTwo;
				newStoredNumber += number;
				setStoredNumberTwo(newStoredNumber);
				setDisplayedNumber(newStoredNumber);
			}
		}
	};

	return <button onClick={() => handleNumberClick()}>{number}</button>;
};
export default NumberButton;
