import { render, screen } from '@testing-library/react';
import { ProductsList } from '../index';
import { useJobs } from '../../../hooks/useJob';

jest.mock('../../../hooks/useJob', () => ({
	useJobs: jest.fn()
}));

describe('ProductsList', () => {

	it('renders products and handles loading state', async () => {

		const mockData = [
			{ id: 1, name: 'Product 1', price: 100 },
			{ id: 2, name: 'Product 2', price: 200 },
		];

		(useJobs as jest.Mock).mockReturnValue({
			data: mockData,
			isPending: false,
		});

		render(<ProductsList />);

		expect(screen.getByText('Product 1')).not.toBeNull();
		expect(screen.getByText('Product 2')).not.toBeNull();
		expect(screen.getByText('R$ 1,00')).not.toBeNull();
		expect(screen.getByText('R$ 2,00')).not.toBeNull();
	});

	it('shows loading state while pending', () => {

		(useJobs as jest.Mock).mockReturnValue({
			data: [],
			isPending: true,
		});

		render(<ProductsList />);

		expect(screen.queryByText('Product 1')).toBeNull();
		expect(screen.queryByText('Product 2')).toBeNull();
	});
});
