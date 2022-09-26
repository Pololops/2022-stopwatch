import './App.css';
import Button from '../Button/Button';
import Watch from '../Watch/Watch';
import { useEffect, useRef, useState } from 'react';

function App() {
	const [milliSeconds, setMilliSeconds] = useState(0);
	const [buttonAction, setButtonAction] = useState(false);

	const interval = useRef();

	const onClickHandler = (event) => {
		setButtonAction(() => !buttonAction);
	};

	useEffect(() => {
		if (buttonAction) {
			interval.current = setInterval(() => {
				setMilliSeconds((ms) => ms + 1);
			}, 10);
		} else {
			clearInterval(interval.current);
		}
	}, [buttonAction]);

	return (
		<div className="app">
			<Watch time={milliSeconds} />
			<Button onClick={onClickHandler} buttonAction={buttonAction} />
		</div>
	);
}

export default App;
