"use client";

import styles from "./styles.module.css";
import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "../product-card";

export function ProductsList() {
	const { data } = useProducts();
	return (
		<div className={styles.list_container}>
			{data?.map((product) => (
				<ProductCard
					key={product.id}
					title={product.name}
					price={product.price_in_cents}
					image={product.image_url}
				/>
			))}
		</div>
	);
}
