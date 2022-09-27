import { useContext } from 'react';
import { Context } from '../../contexts/Context';
import './List.css';

import format from '../../utils/timeFormat';

export default function List() {
	const { timerList } = useContext(Context);

	return (
		<ul className="list">
			{timerList
				.map((time) => (
					<li key={time} className="list-item">
						{format(time)}
					</li>
				))
				.reverse()}
		</ul>
	);
}
