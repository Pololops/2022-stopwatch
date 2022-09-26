import PropTypes from 'prop-types';
import './Watch.css';
import format from '../../middleware/timeFormat';

export default function Watch({ timer }) {
	return (
		<div className="watch" data-testid="Watch">
			{format(timer)}
		</div>
	);
}

Watch.propTypes = {
	timer: PropTypes.number.isRequired,
};
