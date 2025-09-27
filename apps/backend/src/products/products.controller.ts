import { apiService } from "@meli/utils";
import { type Request, type Response, Router } from "express";

const router: Router = Router();

const PATHNAME = "/items";

router.get(PATHNAME, async (req: Request, res: Response) => {
	const hostname = process.env.MELI_API ?? "";
	const accessToken = process.env.ACCESS_TOKEN ?? "";
	const SITE_ID = process.env.SITE_ID ?? "";

	const { q } = req.query || {};
	const search = typeof q === "string" ? q : undefined;

	const response = await apiService({
		hostname,
		headers: { Authorization: `Bearer ${accessToken}` },
		pathname: ["products", "search"].join("/"),
		query: {
			site_id: SITE_ID,
			...(search ? { q: search } : {}),
		},
	});

	res.status(200).json(response);
});

router.get(`${PATHNAME}/:id`, (_req, res) => {
	res.json({ message: "Hello World" });
});

export { router as productsController };
