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

export const getProducts = async (search: string) => {
	const response = apiService({
		hostname: "http://localhost:3001",
		pathname: "api/items",
		query: {
			q: search,
		},
	});
	return response;
};

type ItemsPageProps = {
	searchParams: { search?: string };
};

const ItemsPage: FC<ItemsPageProps> = async ({ searchParams }) => {
	const search = searchParams?.search || "";
	const response = await getProducts(search);
	console.log(response);
	return (
		<div className={styles.items}>
			<pre>{JSON.stringify(response)}</pre>
		</div>
	);
};

export default ItemsPage;
