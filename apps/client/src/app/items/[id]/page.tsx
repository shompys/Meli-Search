import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Producto",
	description: "El producto que buscas",
	keywords: ["mercado libre", "producto", "buscar"],
	openGraph: {
		title: "Producto de mercado libre",
		description: "Buscar producto en mercado libre",
		images: ["/images/logo_large_plus@2x.webp"],
	},
};

const ItemPage = ({ params }: { params: { id: string } }) => {
	return (
		<div>
			<h1>Item {params?.id}</h1>
		</div>
	);
};

export default ItemPage;
