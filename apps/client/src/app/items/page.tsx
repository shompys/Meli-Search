import {
	apiService,
	formatPrice,
	getMostFrequent,
	NotFound,
} from "@meli/utils";
import type { Metadata } from "next";
import type { FC } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Catalog } from "@/components/Catalog";
import { Condition, LOGO } from "@/const";

import type { SearchResultsResponse } from "../../../../backend/src/products/interfaces";
import styles from "./items.module.scss";

export const getProducts = async (search: string) => {
	const response = apiService<SearchResultsResponse>({
		hostname: "http://localhost:3001",
		pathname: "api/items",
		query: {
			q: search,
		},
	});
	return response;
};

export const generateMetadata = async ({
	params,
}: {
	params: { id: string };
}): Promise<Metadata> => {
	try {
		const response = await getProducts(params?.id);

		return {
			title: response.categories.join(" | "),
			description: "Buscar productos en mercado libre",
			openGraph: {
				title: response.categories.join(" | "),
				images: [LOGO],
				description: "Buscar productos en mercado libre",
			},
			alternates: {
				canonical: "http://localhost:3000",
			},
			robots: "noindex, follow",
		};
	} catch {
		return {
			title: "Catálogo",
			description: "Buscar productos en mercado libre",
			keywords: ["mercado libre", "productos", "buscar"],
			openGraph: {
				title: "Catálogo",
				description: "Buscar productos en mercado libre",
				images: [LOGO],
			},
			alternates: {
				canonical: "http://localhost:3000",
			},
			robots: "noindex, follow",
		};
	}
};

type ItemsPageProps = {
	searchParams: Promise<{ search?: string }>;
};

const ItemsPage: FC<ItemsPageProps> = async ({ searchParams }) => {
	const params = await searchParams;
	const search = params.search || "";

	if (!search) {
		throw new NotFound(`Dejaste el campo vacio`);
	}
	const response = await getProducts(search);

	if (response?.items.length <= 0) {
		throw new NotFound(`No hay resultados para: ${search}`);
	}

	return (
		<div className={styles.items}>
			<Breadcrumb crumbs={[getMostFrequent(response.categories)]} />
			<h1 className={styles.items__title}>Resultados para: {search}</h1>
			<Catalog>
				{response.items?.map((item) => (
					<Catalog.Card
						key={item.id}
						id={item.id}
						title={item.title}
						picture={item.picture}
						freeShipping={item.free_shipping}
						condition={Condition.NEW === item.condition ? "Nuevo" : "Usado"}
						price={formatPrice({
							currency: item.price.currency,
							amount: item.price.amount,
							decimals: item.price.decimals,
						})}
					/>
				))}
			</Catalog>
		</div>
	);
};

export default ItemsPage;
