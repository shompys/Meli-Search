"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import styles from "./error.module.scss";

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className={styles.error}>
			<div className={styles.error__content}>
				<h2>Algo salió mal. 🤕</h2>
				<p>Error description: {error.message}</p>
				<Button onClick={reset}>Intentar nuevamente</Button>
			</div>
		</div>
	);
}
