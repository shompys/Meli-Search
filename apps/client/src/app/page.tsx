import type { Metadata } from "next";
import Image from "next/image";
import { LOGO } from "@/const";
import styles from "./home.module.scss";

export const metadata: Metadata = {
	title: "Mercadolibre",
	description: "Buscar productos en mercado libre",
	keywords: ["mercado libre", "productos", "buscar"],
	openGraph: {
		title: "Mercadolibre",
		description: "Buscar productos en mercado libre",
		images: [LOGO],
	},
	alternates: {
		canonical: "http://localhost:3000",
	},
};

export default function Home() {
	return (
		<div className={styles.home}>
			<div className={styles.home__content}>
				<h1 className={styles.visuallyHidden}>Mercadolibre</h1>
				<Image
					src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/logo_homecom_v2.png"
					alt="logo"
					fill
					sizes="400px"
				/>
			</div>
		</div>
	);
}
