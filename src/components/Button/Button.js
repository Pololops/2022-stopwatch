import PropTypes from 'prop-types';
import './Button.css';

export default function Button({ buttonAction, onClick }) {
	return (
		<button className="button" onClick={onClick}>
			{(!buttonAction) ? 'Start' : 'Pause'}
		</button>
	);
}

Button.defaultProps = {
	buttonAction: true,
};

Button.propTypes = {
	buttonAction: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
};
