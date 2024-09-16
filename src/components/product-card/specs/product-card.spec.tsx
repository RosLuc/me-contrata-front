import { render, screen } from '@testing-library/react';
import { formatPrice } from '@/utils/format-price';
import { ProductCard } from '../index';

jest.mock('../../../utils/format-price', () => ({
    formatPrice: jest.fn((price) => `$${price.toFixed(2)}`),
}));

describe('ProductCardProps', () => {

    it('should render product details correctly', () => {

        const props = {
            image: 'https://example.com/image.jpg',
            title: 'Test Product',
            price: 19.99,
        };

        render(<ProductCard {...props} />);

        const image = screen.getByRole('img');
        const title = screen.getByText(props.title);
        const price = screen.getByText(formatPrice(props.price));

        expect(image).toHaveProperty('src', props.image);
        expect(title).not.toBeNull();
        expect(price).not.toBeNull();
    });
});
