import { ProductsFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { mountQuery } from "@/utils/get-category-by-type";
import { useDeferredValue } from "react";

const apiUrl = "http://localhost:3000/";

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {

	return axios.post(apiUrl, {
		query,
	});
};

export function useProducts() {

	const { type, priority, search } = useFilter();
	const searchDeferred = useDeferredValue(search)
	const query = mountQuery(type, priority);
	const { data } = useQuery({
		queryFn: () => fetcher(query),
		queryKey: ["products", type, priority],
	});

	const products = data?.data.data?.allProducts
	const filteredProducts = products?.filter(product => product.name.toLocaleLowerCase().includes(searchDeferred.toLocaleLowerCase()))

	return {
		data: filteredProducts
	};
}
