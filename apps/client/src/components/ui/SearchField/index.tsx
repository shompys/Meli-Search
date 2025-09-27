// "use client";

import clsx from "clsx";
import { redirect } from "next/navigation";
import type { FC } from "react";
import { SearchAction } from "./SearchAction";
import styles from "./searchField.module.scss";

type Option = {
	label: string;
	value: string;
};

type SearchFieldProps = {
	className?: string;
};
const options = [
	{
		label: "rueda",
		value: "wheel",
	},
	{
		label: "vasos",
		value: "caps",
	},
	{
		label: "celulares",
		value: "phones",
	},
];
export const SearchField: FC<SearchFieldProps> = ({ className }) => {
	// const [isOpen, setIsOpen] = useState(false);

	// const [value, setValue] = useState("");
	// const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
	// const [highlightedIndex, setHighlightedIndex] = useState(-1);
	// const containerRef = useRef<HTMLDivElement>(null);

	// useEffect(() => {
	// 	setHighlightedIndex(-1);
	// }, [filteredOptions]);

	// useEffect(() => {
	// 	const handleClickOutside = (event: MouseEvent) => {
	// 		if (
	// 			containerRef.current &&
	// 			!containerRef.current.contains(event.target as Node)
	// 		) {
	// 			setIsOpen(false);
	// 		}
	// 	};

	// 	document.addEventListener("mousedown", handleClickOutside);
	// 	return () => document.removeEventListener("mousedown", handleClickOutside);
	// }, []);

	// useEffect(() => {
	// 	const filtered = options.filter((option) =>
	// 		option.label.toLowerCase().includes(searching.toLowerCase().trim()),
	// 	);
	// 	setFilteredOptions(filtered);
	// }, [searching, options]);

	// const handleInputFocus = () => {
	// 	console.log("ejecutoo");
	// 	setIsOpen(true);
	// };

	// const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
	// 	if (e.key.toLocaleLowerCase() === "enter") {
	// 		e.preventDefault();
	// 		if (filteredOptions?.[highlightedIndex]) {
	// 			setSearching(filteredOptions?.[highlightedIndex]?.label);
	// 			setValue(filteredOptions?.[highlightedIndex]?.value);
	// 			setIsOpen(false);
	// 		}
	// 	}
	// 	if (e.key.toLocaleLowerCase() === "arrowup") {
	// 		e.preventDefault();
	// 		setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
	// 	}
	// 	if (e.key.toLocaleLowerCase() === "arrowdown") {
	// 		e.preventDefault();
	// 		setHighlightedIndex((prev) =>
	// 			prev < filteredOptions.length - 1 ? prev + 1 : prev,
	// 		);
	// 	}
	// };
	// const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	const value = e.target.value;
	// 	setSearching(value);
	// 	setIsOpen(true);

	// 	const exactMatch = options.find(
	// 		(opt) => opt.label.toLowerCase() === value.toLowerCase(),
	// 	);

	// 	setValue(exactMatch ? exactMatch.value : "");
	// };
	// const [searching, setSearching] = useState("");

	// const handleSubmit = async (formData: FormData) => {
	// 	"use server";
	// 	console.log("hola server");
	// 	const query = formData.get("search") as string;
	// 	router.push(`/items?search=${encodeURIComponent(query)}`);
	// };

	return (
		<form
			className={clsx(styles.autocomplete, className)}
			action="/items"
			method="GET"
		>
			<input
				autoComplete="off"
				placeholder="Buscar productos, marcas y más..."
				type="text"
				name="search"
			/>
			<SearchAction type="submit" />
		</form>
	);
};
