import styles from "./styles.module.css";
import { formatPrice } from "@/utils/format-price";

interface ProductCardProps {
	image: string;
	title: string;
	price: number;
}

export function ProductCard(props: ProductCardProps) {  
  const price = formatPrice(props.price)
	return (
		<div className={styles.card}>
			<img src={props.image} />
			<div>
				<h3>{props.title}</h3>
				<div></div>
				<p>{price}</p>
			</div>
		</div>
	);
}
