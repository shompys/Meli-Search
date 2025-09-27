import { apiService } from "@meli/utils";
import type { Metadata } from "next";
import type { FC } from "react";
import styles from "./items.module.scss";

export const metadata: Metadata = {
	title: "Productos de mercado libre",
	description: "Buscar productos en mercado libre",
	keywords: ["mercado libre", "productos", "buscar"],
	openGraph: {
		title: "Productos de mercado libre",
		description: "Buscar productos en mercado libre",
		images: ["/images/logo_large_plus@2x.webp"],
	},
};

export const getProducts = async (seach: string) => {
	const response = apiService({
		hostname: "http://localhost:3001",
		pathname: "api/items",
		query: {
			q: seach,
		},
	});
	return response;
};

type ItemsPageProps = {
	searchParams: { search?: string };
};

const ItemsPage: FC<ItemsPageProps> = async ({ searchParams }) => {
	console.log("-> ", searchParams?.search);

	const response = await getProducts(searchParams?.search ?? "");
	console.log("log: ", response);
	return (
		<div className={styles.items}>
			<h1>Items</h1>
		</div>
	);
};

export default ItemsPage;
