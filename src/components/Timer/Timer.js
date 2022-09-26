import PropTypes from 'prop-types';
import './Timer.css';
import format from '../../middleware/timeFormat';

export default function Timer({ timer }) {
	return (
		<div className="timer" data-testid="Timer">
			{format(timer)}
		</div>
	);
}

Timer.propTypes = {
	timer: PropTypes.number.isRequired,
};
