import Image from "next/image";
import { SearchField } from "@/components/ui/SearchField";
import styles from "./header.module.scss";

export const Header = () => {
	return (
		<header className={styles.header}>
			<nav>
				<Image
					src="/images/logo_large_plus@2x.webp"
					alt="logo"
					width={134}
					height={34}
					priority
				/>
				<SearchField className={styles.searchField} />
			</nav>
		</header>
	);
};
