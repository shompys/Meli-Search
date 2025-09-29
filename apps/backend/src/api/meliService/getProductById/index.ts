import { apiService } from "@meli/utils";
import type { ProductResponse } from "./product.interface";

export const getProductById = async (
	productId: string,
): Promise<ProductResponse> => {
	const hostname = process.env.MELI_API ?? "";
	const accessToken = process.env.ACCESS_TOKEN ?? "";
	const headers = { Authorization: `Bearer ${accessToken}` };
	const response = await apiService<ProductResponse>({
		hostname,
		pathname: ["products", productId].join("/"),
		headers,
	});

	if (!response?.children_ids.length) {
		return response;
	}

	const id = response?.children_ids[0];
	return await getProductById(id);
};
