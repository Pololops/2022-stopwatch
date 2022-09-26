import { render, screen } from '@testing-library/react';
import Watch from './Watch';

const setup = () => render(<Watch />);

describe('Test for App component', () => {
	it('should contain a container with data-TestId = Watch', () => {
		setup();
		expect(screen.getByTestId('Watch')).toBeInTheDocument();
	});
});
