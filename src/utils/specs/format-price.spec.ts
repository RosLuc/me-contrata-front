import { formatPrice } from '../format-price';

describe('formatPrice', () => {


	it('should return a string with the price formatted', () => {

		const input = 1000;
		const expected = 'R$ 10,00';
		const result = formatPrice(input);
		const normalizedResult = result.replace(/\s+/g, '');
        const normalizedExpected = expected.replace(/\s+/g, '');

        expect(normalizedResult).toEqual(normalizedExpected);
	});
});