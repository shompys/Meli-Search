import { apiService } from "@meli/utils";

export const getCategoriesByDomain = async (domainId: string) => {
	const hostname = process.env.MELI_API ?? "";
	const accessToken = process.env.ACCESS_TOKEN ?? "";
	const headers = { Authorization: `Bearer ${accessToken}` };
	const response = await apiService<{ id: string; name: string }[]>({
		hostname,
		headers,
		pathname: ["catalog_domains", domainId, "categories"].join("/"),
	});
	return response;
};
