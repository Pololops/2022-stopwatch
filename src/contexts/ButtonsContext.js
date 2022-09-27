import { createContext, useState, useRef, useEffect, useContext } from 'react';

export const ButtonsContext = createContext();

const ButtonsContextProvider = ({ children }) => {
	const [buttons, setButtons] = useState([
		{ id: 'startButton', label: 'Start' },
		{ id: 'stopButton', label: 'Stop' },
	]);

	return (
		<ButtonsContext.Provider value={{buttons, setButtons}}>
			{children}
		</ButtonsContext.Provider>
	);
};

export default ButtonsContextProvider;
