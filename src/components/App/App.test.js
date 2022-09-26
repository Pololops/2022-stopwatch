import { render, screen } from '@testing-library/react';
import App from './App';

const setup = () => render(<App />);

describe('Test for App component', () => {
	it('should contain the Button component', () => {
		setup();
		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('should contain the Watch component', () => {
		setup();
		expect(screen.getByTestId('Watch')).toBeInTheDocument();
	});
});
