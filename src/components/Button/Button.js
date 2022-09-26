import PropTypes from 'prop-types';
import './Button.css';

export default function Button({ label, onClick }) {
	return (
		<button key={label} className={`button ${label.toLowerCase()}-button`} onClick={onClick}>
			{label}
		</button>
	);
}

Button.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};
