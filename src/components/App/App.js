import './App.css';
import Button from '../Button/Button';
import Watch from '../Watch/Watch';
import { useEffect, useRef, useState } from 'react';

function App() {
	const [timer, setTimer] = useState(0);
	const [timerList, setTimerList] = useState([]);
	const [startButtonLabel, setStartButtonLabel] = useState('Start');
	const [stopButtonLabel, setStopButtonLabel] = useState('Stop');

	const interval = useRef();

	const onClickStartHandler = () => {
		if (startButtonLabel === 'Start') {
			setStartButtonLabel('Tour');
		} else {
			setTimerList([...timerList, timer]);
		}
	};

	const onClickStopHandler = () => {
		if (stopButtonLabel === 'Stop') {
			clearInterval(interval.current);
			setTimerList([...timerList, timer]);
			setStartButtonLabel('Start');
			if (timer !== 0) setStopButtonLabel('Reset');
		} else {
			setTimerList([]);
			setTimer(0);
			setStopButtonLabel('Stop');
		}
	};

	useEffect(() => {
		if (startButtonLabel === 'Tour') {
			setStopButtonLabel('Stop');
			interval.current = setInterval(() => {
				setTimer((ms) => ms + 1);
			}, 10);
		}
	}, [startButtonLabel]);

	return (
		<div className="app">
			<Watch timer={timer} />
			<div className="buttons">
				<Button onClick={onClickStartHandler} label={startButtonLabel} />
				<Button onClick={onClickStopHandler} label={stopButtonLabel} />
			</div>
		</div>
	);
}

export default App;
