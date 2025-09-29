import { BadRequest, getRandomBoolean, getRandomNumber } from "@meli/utils";
import { type Request, type Response, Router } from "express";
import { getCategoriesByDomain } from "../api/meliService/getCategoriesByDomain";
import { getProductById } from "../api/meliService/getProductById";
import { getProductSearch } from "../api/meliService/getProductSearch";
import type {
	ProductPresentationalResponse,
	SearchResultsResponse,
} from "./interfaces";
import { mockDescription } from "./mockData";

const router: Router = Router();

const PATHNAME = "/items";

router.get(PATHNAME, async (req: Request, res: Response) => {
	const { q: search } = req.query || {};

	try {
		if (!search) {
			throw new BadRequest("Something went wrong.");
		}
		console.log("search: ", search);

		const responseSearch = await getProductSearch(`${search}`);

		const responses = await Promise.allSettled(
			responseSearch.results?.map((product) => {
				const id =
					product?.children_ids?.length > 0
						? product?.children_ids[0]
						: product.catalog_product_id || product.id;

				return getProductById(id);
			}),
		);

		const response = responses
			.filter((res) => res.status === "fulfilled")
			.map((res) => res.value);

		const domainsId = response.map((result) => result.domain_id);

		const results = await Promise.allSettled(
			domainsId.map((domainId) => getCategoriesByDomain(domainId)),
		);

		const categories = [];
		for (const result of results) {
			if (result.status === "fulfilled") {
				const [category] = result.value;
				categories.push(category.name);
			}
		}

		const searchResults: SearchResultsResponse = {
			author: {
				name: "Jonathan Oscar",
				lastname: "Molina Gomez",
			},
			categories: [...categories],
			items: response.map((result) => {
				const thumbnail = result.pickers
					?.flatMap((p) => p.products)
					.map((p) => p.thumbnail)
					.find((t) => t);

				const firstPicture = result.pictures[0].url;

				const data = {
					id: result.id,
					title: result.name,
					price: {
						currency: "ARS",
						amount: getRandomNumber(),
						decimals: getRandomNumber(99),
					},
					picture: thumbnail || firstPicture,
					condition: getRandomBoolean() ? "new" : "used",
					free_shipping: getRandomBoolean(),
				};
				return data;
			}),
		};

		res.status(200).json(searchResults);
	} catch (err) {
		if (!(err instanceof Error)) return;
		res.status(500).json({
			statusCode: 500,
			message: err.message,
		});
	}
});

router.get(`${PATHNAME}/:id`, async (req: Request, res: Response) => {
	const id = req.params.id;

	try {
		const response = await getProductById(id);
		const categories = await getCategoriesByDomain(response.domain_id);

		const picture = response.pictures[0]?.url;
		const responsePresentational: ProductPresentationalResponse = {
			author: {
				name: "Jonathan Oscar",
				lastname: "Molina Gomez",
			},
			item: {
				id: response.id,
				title: response.name,
				categories: categories.map((category) => category.name),
				price: {
					currency: "ARS",
					amount: getRandomNumber(),
					decimals: getRandomNumber(99),
				},
				picture,
				condition: getRandomBoolean() ? "new" : "used",
				free_shipping: getRandomBoolean(),
				sold_quantity: getRandomNumber(),
				description: response.short_description.content || mockDescription,
			},
		};

		res.status(200).json(responsePresentational);
	} catch (err) {
		if (!(err instanceof Error)) return;
		res.status(500).json({
			statusCode: 500,
			message: err.message,
		});
	}
});

export { router as productsController };
