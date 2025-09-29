import Link from "next/link";
import { Routes } from "@/const";

import styles from "./not-found.module.scss";

export default function NotFound() {
	return (
		<div className={styles.notFound}>
			<div className={styles.notFound__content}>
				<h2>404</h2>
				<p>Esta ruta no existe. 🤕</p>
				<Link href={Routes.ROOT}>Volver al inicio</Link>
			</div>
		</div>
	);
}
