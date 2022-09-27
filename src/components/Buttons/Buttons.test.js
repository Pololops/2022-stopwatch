import { render, screen } from '@testing-library/react';
import Buttons from './Buttons';

const setup = () => render(<Buttons />);

describe('Test for App component', () => {
	it('should contain the Button component', () => {
		setup();
		expect(screen.getByRole('button')).toBeInTheDocument();
	});
});
