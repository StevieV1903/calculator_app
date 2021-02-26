import React from 'react';
import './OperatorButton.css';

const OperatorButton = ({ storedOperation, setStoredOperation, setIsAnswer, operation, handleEqualsClick }) => {
	const handleOperationClick = () => {
		if (storedOperation === '') {
			setStoredOperation(operation);
		} else {
			handleEqualsClick();
		}
		setIsAnswer(false);
	};

	return (
		<button className="operator-button" onClick={() => handleOperationClick()}>
			{operation}
		</button>
	);
};
export default OperatorButton;
