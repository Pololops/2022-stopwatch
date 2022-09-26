import { render, screen } from '@testing-library/react';
import Button from './Button';

const setup = () => render(<Button />);

describe('Test for App component', () => {
	it('should contain the Button component', () => {
		setup();
		expect(screen.getByRole('button')).toBeInTheDocument();
	});
});
