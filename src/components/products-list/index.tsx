"use client";

import styles from "./styles.module.css";
import { useJobs } from "@/hooks/useJob";
import { ProductCard } from "../product-card";

export function ProductsList() {
	const { data } = useJobs();
	return (
		<div className={styles.list_container}>
			{data?.map((job) => (
				<ProductCard
					key={job.id}
					title={job.name}
					price={job.price}
					image="https://via.placeholder.com/150"
				/>
			))}
		</div>
	);
}
