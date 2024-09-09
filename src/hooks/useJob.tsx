import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { mountQuery } from "@/utils/get-category-by-type";
import { useDeferredValue } from "react";
import { Job } from "../types/job";

const apiUrl = "http://localhost:3000/job";

const fetcher = (query: string): AxiosPromise<Job[]> => {

	return axios.get(`${apiUrl}${query}`);
};

export function useJobs() {

	const { type, priority, search } = useFilter();
	const searchDeferred = useDeferredValue(search)
	const query = mountQuery(type, priority);
	const { data } = useQuery({
		queryFn: () => fetcher(query),
		queryKey: ["jobs", type, priority],
	});

	const jobs = data?.data;
	const filteredJobs = jobs?.filter(job => searchDeferred.toLocaleLowerCase() ? job.name.toLocaleLowerCase().includes(searchDeferred.toLocaleLowerCase()) : true)

	return {
		data: filteredJobs
	};
}
