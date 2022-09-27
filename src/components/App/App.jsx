import {  useContext, useReducer } from 'react';
import store from '../../reducer/store';
import reducer from '../../reducer/reducer';
import { Context } from '../../contexts/Context';
import Buttons from '../Buttons/Buttons';
import Timer from '../Timer/Timer';
import List from '../List/List';
import './App.css';

function App() {
	const [state, dispatch] = useReducer(reducer, store);

	const { timerList } = useContext(Context);
	//const { buttons, setButtons } = useContext(ButtonsContext);
//
	//const onClickStartHandler = (event) => {
	//	if (event.target.label === 'Start') {
	//		setButtons('Tour');
	//	} else {
	//		setTimerList((prevState) => [...prevState, timer]);
	//	}
	//};
//
	//const onClickStopHandler = (event) => {
	//	if (event.label === 'Stop' && timer !== 0) {
	//		clearInterval(interval.current);
	//		//setStartButtonLabel('Start');
	//		setTimerList((prevState) => [...prevState, timer]);
	//		//if (timer !== 0) setStopButtonLabel('Reset');
	//	} else {
	//		setTimerList([]);
	//		setTimer(0);
	//		//setStopButtonLabel('Stop');
	//	}
	//};

	return (
		<>
			<div className="watch">
				<Timer />
				<Buttons state={state} dispatch={dispatch} />
			</div>
			{timerList.length > 0 && <List />}
		</>
	);
}

export default App;
