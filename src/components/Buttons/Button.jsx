import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Context } from '../../contexts/Context';
import './Buttons.css';

export default function Button({ label }) {
	const { timer, setTimerList, dispatch } = useContext(Context);

	const handleClick = () => {
		if (label === 'Turn') {
			setTimerList((prevState) => [...prevState, timer]);
		}

		if (label === 'Start' || timer !== 0) {
			dispatch({ type: 'CHANGE_BUTTON_LABEL', payload: label });
		}
	};

	return (
		<button
			type="button"
			className={`button ${label.toLowerCase()}-button`}
			onClick={handleClick}
		>
			{label}
		</button>
	);
}

Button.propTypes = {
	label: PropTypes.string.isRequired,
};
