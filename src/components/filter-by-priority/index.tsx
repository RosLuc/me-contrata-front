import styles from "./styles.module.css";
import { ArrowIcon } from "../icons/arrow-icon";
import { useEffect, useRef, useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "@/types/priority-types";

export function FilterByPriority() {
	const [isOpen, setIsOpen] = useState(false);
	const { setPriority } = useFilter();
	const menuRef = useRef<HTMLUListElement>(null);

	const handleOpen = () => setIsOpen((prev) => !prev);
	const handleUpdatePriority = (value: PriorityTypes) => {
		setPriority(value);
		setIsOpen(false);
	};
	const handleClickOutside = (event: MouseEvent) => {
		if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('click', handleClickOutside);
		} else {
			document.removeEventListener('click', handleClickOutside);
		}

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [isOpen]);

	return (
		<div className={styles.filter_container}>
			<button onClick={handleOpen}>
				Organizar por
				<ArrowIcon />
			</button>
			{isOpen && (
				<ul ref={menuRef} className={styles.priority_filter}>
					<li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>
						Novidades
					</li>
					<li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>
						Preço Maior - Menor
					</li>
					<li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>
						Preço Menor - Maior
					</li>
				</ul>
			)}
		</div>
	);
}
