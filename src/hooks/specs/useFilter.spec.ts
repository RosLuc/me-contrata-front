import { renderHook } from "@testing-library/react";
import { useFilter } from '../useFilter';

describe('useFilter', () => {

	it('should initialize with empty filter', () => {
		const { result } = renderHook(() => useFilter());
		const { page, priority, search, type, setPage, setPriority, setSearch , setType } = result.current;

		expect(page).toBe(0);
		expect(priority).toBe(0);
		expect(search).toBe('');
		expect(type).toBe(0);
		expect(setPage).toBeInstanceOf(Function);
		expect(setPriority).toBeInstanceOf(Function);
		expect(setSearch).toBeInstanceOf(Function);
		expect(setType).toBeInstanceOf(Function);
	});
});