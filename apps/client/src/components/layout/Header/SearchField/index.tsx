"use client";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import { type FC, useState } from "react";
import { Routes } from "@/const";
import { SearchAction } from "./SearchAction";
import styles from "./searchField.module.scss";

type SearchFieldProps = {
	className?: string;
};
const fieldName = "search";

export const SearchField: FC<SearchFieldProps> = ({ className }) => {
	const searchParams = useSearchParams();

	const [searchState, setSearchState] = useState(
		searchParams.get(fieldName) ?? "",
	);

	return (
		<form
			className={clsx(styles.autocomplete, className)}
			action={Routes.ITEMS}
			method="GET"
		>
			<input
				autoComplete="off"
				placeholder="Buscar productos, marcas y más..."
				type="text"
				name={fieldName}
				onChange={(e) => setSearchState(e.target.value)}
				value={searchState}
			/>
			<SearchAction type="submit" />
		</form>
	);
};
