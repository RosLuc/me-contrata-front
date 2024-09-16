import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Job } from '../../types/job';
import { useJobs } from '../useJob';


describe('useJobs', () => {

	let mockAxios: MockAdapter;

	beforeAll(() => {

		mockAxios = new MockAdapter(axios);
	});

	afterAll(() => {

		mockAxios.restore();
	});

	it('should fetch jobs and update state', async () => {

		const mockJobs: Job[] = [
			{ id: '1', name: 'Job 1', price: 120 },
			{ id: '2', name: 'Job 2', price: 12000 },
		];

		mockAxios.onGet().reply(200, mockJobs);

		const { result } = renderHook(() => useJobs());

		expect(result.current.isPending).toBe(true);

		await waitFor(() => {
			expect(result.current.isPending).toBe(false);
			expect(result.current.data).toEqual(mockJobs);
			expect(result.current.error).toBe(null);
		});
	});

	it('should handle errors', async () => {
		mockAxios.onGet().networkError();

		const { result } = renderHook(() => useJobs());

		await waitFor(() => {
			expect(result.current.isPending).toBe(false);
			expect(result.current.data).toEqual([]);
			expect(result.current.error).toBe('Error: Network Error Could not Fetch Data ');
		});
	});
});