import dotenv from "dotenv";

dotenv.config();

import { test } from "@meli/utils";
import express, {
	type Application,
	type Request,
	type Response,
} from "express";
import morgan from "morgan";
import { productsController } from "./products/products.controller";

const app: Application = express();
const port = process.env.PORT || 3001;
console.log(process.env.MELI_API);
interface User {
	id: number;
	name: string;
}

app.use(
	morgan(":method :url :status :res[content-length] - :response-time ms"),
);

app.use("/auth/callback", (req: Request, res: Response) => {
	console.log("req: ", req);
	console.log("req: ", req.query);
	res.json({ message: req.query });
});

app.use("/api", productsController);

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
