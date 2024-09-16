import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { mountQuery } from "@/utils/get-category-by-type";
import { useDeferredValue, useEffect, useState } from "react";
import { Job } from "../types/job";

const apiUrl = "http://localhost:3001/job";

const fetcher = (query: string): AxiosPromise<Job[]> => {
	return axios.get(`${apiUrl}${query}`);
};

export const useJobs = () => {

	const [data, setData] = useState<Job[]>([]);
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState<null | string>(null);

	const { type, priority, search } = useFilter();
	const searchDeferred = useDeferredValue(search);
	const query = mountQuery(type, priority);

	useEffect(() => {

		const fetchData = async () => {

			setIsPending(true);

			try {

				const { data: jobs } = await fetcher(query);

				const filteredJobs = jobs?.filter(job =>
					searchDeferred.toLocaleLowerCase()
						? job.name.toLocaleLowerCase().includes(searchDeferred.toLocaleLowerCase())
						: true
				);

				setIsPending(false);
				setData(filteredJobs);
				setError(null);
			} catch (error) {

				setError(`${error} Could not Fetch Data `);
				setIsPending(false);
			}
		};

		fetchData();
	}, [query, searchDeferred]);

	return { data, isPending, error };
};
