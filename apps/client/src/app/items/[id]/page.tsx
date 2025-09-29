import { apiService, formatPrice, getMostFrequent } from "@meli/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { FC } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductDetail } from "@/components/ProductDetail";
import { Condition, LOGO, Routes } from "@/const";
import type { ProductPresentationalResponse } from "../../../../../backend/src/products/interfaces";

export const getProduct = async (id: string) => {
	try {
		const response = await apiService<ProductPresentationalResponse>({
			hostname: "http://localhost:3001",
			pathname: ["api", "items", id].join("/"),
		});
		return response;
	} catch (_err) {
		notFound();
	}
};
type ItemPageProps = {
	params: Promise<{ id?: string }>;
};
export const generateMetadata = async ({
	params,
}: ItemPageProps): Promise<Metadata> => {
	try {
		const id = (await params).id || "";

		const response = await getProduct(id);

		return {
			title: response.item.title,
			description: response.item.description,
			openGraph: {
				title: response.item.title,
				images: [response.item.picture],
				description: response.item.description,
			},
			alternates: {
				canonical: `http://localhost:3000${Routes.ITEMS}/${id}`,
			},
		};
	} catch {
		return {
			title: "Detalles de producto",
			description: "Buscar productos en mercado libre",
			openGraph: {
				title: "Detalles de producto",
				description: "Buscar productos en mercado libre",
				images: [LOGO],
			},
			alternates: {
				canonical: `http://localhost:3000`,
			},
		};
	}
};
const ItemPage: FC<ItemPageProps> = async ({ params }) => {
	const id = (await params).id || "";

	const response = await getProduct(id);

	return (
		<>
			<Breadcrumb
				crumbs={[
					getMostFrequent(response?.item.categories || []),
					response?.item.title,
				]}
			/>
			<ProductDetail
				picture={response.item.picture}
				condition={
					Condition.NEW === response.item.condition ? "Nuevo" : "Usado"
				}
				title={response.item.title}
				freeShipping={response.item.free_shipping}
				description={response.item.description || ""}
				soldQuantity={response.item.sold_quantity || 0}
				price={formatPrice({
					currency: response.item.price.currency,
					amount: response.item.price.amount,
					decimals: response.item.price.decimals,
				}).split(",")}
			/>
		</>
	);
};

export default ItemPage;
