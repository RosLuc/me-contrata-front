"use client";

import styles from "./styles.module.css";
import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInputWSearch } from "../primary-input";
import { ProfileControl } from "../profile-control";
import { useFilter } from "@/hooks/useFilter";

const sairaStencil = Saira_Stencil_One({
	weight: ["400"],
	subsets: ["latin"],
});

interface HeaderProps {}

export function Header(props: HeaderProps) {
	const { search, setSearch } = useFilter();
	return (
		<header className={styles.tag_header}>
			<a className={`${sairaStencil.className}, ${styles.logo}`}>MeContrata</a>
			<div>
				<PrimaryInputWSearch
					value={search}
					changeValue={setSearch}
					placeholder="Procurando por algo específico?"
				/>
				<ProfileControl />
			</div>
		</header>
	);
}
