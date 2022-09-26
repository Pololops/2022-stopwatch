import PropTypes from 'prop-types';
import './Watch.css';
import format from '../../middleware/timeFormat';

export default function Watch({ time }) {
	return (
		<div className="watch" data-testid="Watch">
			{format(time)}
		</div>
	);
}

Watch.propTypes = {
	time: PropTypes.number.isRequired,
};
