import PropTypes from 'prop-types';
import './List.css';
import format from '../../middleware/timeFormat';

export default function List({ items }) {
	return (
		<ul className="list">
			{items.map((item) => <li key={item} className="list-item">{format(item)}</li>).reverse()}
		</ul>
	);
}

List.propTypes = {
	items: PropTypes.arrayOf(PropTypes.number).isRequired,
};
