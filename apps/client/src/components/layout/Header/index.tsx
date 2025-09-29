import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Routes } from "@/const";
import styles from "./header.module.scss";
import { SearchField } from "./SearchField";

export const Header = () => {
	return (
		<header className={styles.header}>
			<nav>
				<Link href={Routes.ROOT}>
					<Image
						src="/images/logo_large_plus@2x.webp"
						alt="logo"
						width={134}
						height={34}
						priority
					/>
				</Link>
				<Suspense fallback={null}>
					<SearchField className={styles.searchField} />
				</Suspense>
			</nav>
		</header>
	);
};
