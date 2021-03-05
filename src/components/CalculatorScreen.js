import React from 'react';
import './CalculatorScreen.css';

const CalculatorScreen = ({ storedOperation, displayedNumber, isAnswer }) => {
	
	const formatDisplayedNumber = () => {
		//removing extra 0's from the start of the string
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

		let index = formattedDisplayedNumber.indexOf('.');
		if (index >= 0) {
			formattedDisplayedNumber = formattedDisplayedNumber.substring(0, index + 8);
			if (!formattedDisplayedNumber.toString().includes('.')) {
				formattedDisplayedNumber = formattedDisplayedNumber.toString().concat('.');
			}
		}
		//removing 0's from the end of the displayed number which is still a string
		let endZeroCounter = 0
		if ( formattedDisplayedNumber.includes( "." ) && isAnswer ){ 
			for ( let i = formattedDisplayedNumber.length - 1; i > index; i-- ) {
				if ( formattedDisplayedNumber.charAt( i ) === '0' ) {
					endZeroCounter += 1;
				} else {
					break
				}
			}
			formattedDisplayedNumber = formattedDisplayedNumber.substring( 0, formattedDisplayedNumber.length - endZeroCounter)
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
