import styles from "./styles.module.css";
import { SearchIcon } from "../icons/search-icon";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	value: string,
	changeValue: (value: string) => void
}

export function PrimaryInputWSearch({ value, changeValue, ...rest }: InputProps) {
	return (
		<div className={styles.input_container}>
			<input className={styles.primary_input} onChange={(event) => changeValue(event.target.value)} {...rest} />
			<SearchIcon />
		</div>
	);
}
