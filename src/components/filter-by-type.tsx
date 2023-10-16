"use client";
import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filter-types";
import styled from "styled-components";

interface FilterItemProps {
	selected: boolean;
}

const FilterList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 40px;
	list-style: none;
`;

const FilterItem = styled.li<FilterItemProps>`
	font-family: inherit;
	font-weight: ${(props) => (props.selected ? "600" : "400")};
	font-size: 16px;
	line-height: 22px;
	text-align: center;
	text-transform: uppercase;
	cursor: pointer;

	color: var(--text-dark);

	border-bottom: ${(props) =>
		props.selected ? "4px solid var(--orange-low);" : ""};
`;

export function FilterByType(props: FilterItemProps) {
	const { type, setType } = useFilter();

	const handleChangeType = (value: FilterType) => {
		setType(value);
	};
	return (
		<FilterList>
			<FilterItem
				selected={type === FilterType.ALL}
				onClick={() => handleChangeType(FilterType.ALL)}
			>
				Todos os serviços
			</FilterItem>
			<FilterItem
				selected={type === FilterType.PROGRAMMING}
				onClick={() => handleChangeType(FilterType.PROGRAMMING)}
			>
				Programação
			</FilterItem>
			<FilterItem
				selected={type === FilterType.DESIGN}
				onClick={() => handleChangeType(FilterType.DESIGN)}
			>
				Design
			</FilterItem>
		</FilterList>
	);
}
