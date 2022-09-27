import { createContext, useState, useReducer, useRef, useEffect } from 'react';
import store from '../reducer/store';
import reducer from '../reducer/reducer';

export const Context = createContext();

const ContextProvider = ({ children }) => {
	const [timer, setTimer] = useState(0);
	const [timerList, setTimerList] = useState([]);
	const [buttonsState, dispatch] = useReducer(reducer, store);

	const interval = useRef();

	useEffect(() => {
		if (buttonsState[0].label !== 'Start') {
			interval.current = setInterval(() => {
				setTimer((ms) => ms + 1);
			}, 10);
		} else {
			clearInterval(interval.current);
		}

		if (buttonsState[1].label === 'Reset' && timer !== 0) {
			setTimerList((prevState) => [...prevState, timer]);
		} else {
			setTimerList([]);
			setTimer(0);
		}
	}, [buttonsState]);

	return (
		<Context.Provider
			value={{
				timer,
				setTimer,
				timerList,
				setTimerList,
				dispatch,
				buttonsState,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;
