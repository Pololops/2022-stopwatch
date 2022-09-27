import { useContext } from 'react';
import { Context } from '../../contexts/Context';
import format from '../../utils/timeFormat';
import './Timer.css';

export default function Timer() {
	const { timer } = useContext(Context);

	return (
		<div className="timer" data-testid="Timer">
			{format(timer)}
		</div>
	);
}
