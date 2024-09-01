"use client";

import styles from './styles.module.css';
import { FilterByType } from "../filter-by-type";
import { FilterByPriority } from "../filter-by-priority";

interface FilterBarProps {}

export function FilterBar(props: FilterBarProps) {
	return (
		<div className={styles.filter_bar}>
			<FilterByType />
			<FilterByPriority />
		</div>
	);
}
