import path from "node:path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(process.cwd(), "../../.env") });

import express, {
	type Application,
	type Request,
	type Response,
} from "express";
import morgan from "morgan";
import { productsController } from "./products/products.controller";

const app: Application = express();
const port = process.env.PORT || 3001;

app.use(
	morgan(":method :url :status :res[content-length] - :response-time ms"),
);

app.use("/auth/callback", (req: Request, res: Response) => {
	res.json({ message: req.query });
});

app.use("/api", productsController);

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
