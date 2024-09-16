import { FilterType } from '../../types/filter-types';
import { PriorityTypes } from '../../types/priority-types';
import { getCategoryByType, getFieldByPriority, mountQuery } from '../get-category-by-type';

describe('getCategoryByType', () => {

	it.each([
		{ title: 'ALL', input: FilterType.ALL, expected: '' },
		{ title: 'PROGRAMMING', input: FilterType.PROGRAMMING, expected: 'PROGRAMMING' },
		{ title: 'DESIGN', input: FilterType.DESIGN, expected: 'DESIGN' },
	])('returns the correct category for $title filter type', ({ input, expected }) => {

		const result = getCategoryByType(input);
		expect(result).toEqual(expected);
	});
});

describe('getFieldByPriority', () => {

	it.each([
		{ title: 'BIGGEST_PRICE', input: PriorityTypes.BIGGEST_PRICE, expected: { field: "price", order: "DESC" } },
		{ title: 'MINOR_PRICE', input: PriorityTypes.MINOR_PRICE, expected: { field: "price", order: "ASC" } },
		{ title: 'NEWS', input: PriorityTypes.NEWS, expected: { field: "created_at", order: "ASC" } },
		{ title: 'DEFAULT', input: 'DEFAULT', expected: { field: "created_at", order: "ASC" } },
	])('returns the correct category for $title filter type', ({ input, expected }) => {

		const result = getFieldByPriority(input as PriorityTypes);
		expect(result).toEqual(expected);
	});
});

describe('mountQuery', () => {

	it('returns the correct category for $title filter type', () => {

		const typeInput = FilterType.PROGRAMMING;
		const priorityInput = PriorityTypes.BIGGEST_PRICE;
		const result = mountQuery(typeInput, priorityInput);
		const expected = '?category=PROGRAMMING&orderBy=price&order=DESC';

		expect(result).toEqual(expected);
	});
});