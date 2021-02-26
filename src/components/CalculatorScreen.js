import React from 'react';
import './CalculatorScreen.css';

const CalculatorScreen = ({ storedOperation, displayedNumber }) => {
	const formatDisplayedNumber = () => {
		let zeroCounter = 0;
		for (let i = 0; i < displayedNumber.length; i++) {
			if (displayedNumber.charAt(i) === '0' && displayedNumber.charAt(i + 1) !== '.') {
				zeroCounter += 1;
			} else {
				break;
			}
		}
		let formattedDisplayedNumber = '';
		if (displayedNumber.slice(zeroCounter).length === 0) {
			formattedDisplayedNumber = '0';
		} else {
			formattedDisplayedNumber = displayedNumber.slice(zeroCounter);
		}

		return formattedDisplayedNumber;
	};

	return (
		<div className="calculator-screen">
			<p> {storedOperation} </p>
			<p className="calculator-screen-numbers"> {formatDisplayedNumber()} </p>
		</div>
	);
};

export default CalculatorScreen;
