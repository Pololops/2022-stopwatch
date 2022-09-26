import { render, screen } from '@testing-library/react';
import App from './App';

const setup = () => render(<App />);

describe('Test for App component', () => {
	it('should contain a Start Button component', () => {
		setup();
		expect(screen.getByRole('button', {name: /Start/i})).toBeInTheDocument();
	});

	it('should contain a Stop Button components', () => {
		setup();
		expect(screen.getByRole('button', { name: /Stop/i })).toBeInTheDocument();
	});

	it('should contain the Watch component', () => {
		setup();
		expect(screen.getByTestId('Watch')).toBeInTheDocument();
	});
});
