import { apiService } from "@meli/utils";
import type { SearchProducts } from "./searchProducts.interfaces";

export const getProductSearch = async (search: string) => {
	const hostname = process.env.MELI_API ?? "";
	const accessToken = process.env.ACCESS_TOKEN ?? "";
	const headers = { Authorization: `Bearer ${accessToken}` };
	const SITE_ID = process.env.SITE_ID ?? "";

	const response = await apiService<SearchProducts>({
		hostname,
		headers,
		pathname: ["products", "search"].join("/"),
		query: {
			site_id: SITE_ID,
			q: search,
			limit: 4,
		},
	});

	return response;
};
