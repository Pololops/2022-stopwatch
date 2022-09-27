import { useContext } from 'react';
import { Context } from '../../contexts/Context';
import Button from '../Buttons/Button';
import './Buttons.css';

export default function Buttons() {
	const { buttonsState } = useContext(Context);

	return (
		<div className="buttons">
			{buttonsState.map(({ id, label }) => (
				<Button key={id} label={label} />
			))}
		</div>
	);
}
