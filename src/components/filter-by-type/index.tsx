"use client";

import styles from "./styles.module.css";
import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filter-types";

export function FilterByType() {
	const { type, setType } = useFilter();

	const handleChangeType = (value: FilterType) => {
		setType(value);
	};
	return (
		<ul className={styles.filter_list}>
			<li 
				className={type === FilterType.ALL ? styles.selected : ""}
				onClick={() => handleChangeType(FilterType.ALL)}
			>
				Todos os serviços
			</li>
			<li 
				className={type === FilterType.PROGRAMMING ? styles.selected : ""}
				onClick={() => handleChangeType(FilterType.PROGRAMMING)}
			>
				Programação
			</li>
			<li 
				className={type === FilterType.DESIGN ? styles.selected : ""}
				onClick={() => handleChangeType(FilterType.DESIGN)}
			>
				Design
			</li>
		</ul>
	);
}
