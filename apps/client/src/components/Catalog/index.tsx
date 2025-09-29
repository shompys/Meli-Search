import clsx from "clsx";
import type { FC } from "react";
import { CardComponent } from "./Card";
import styles from "./catalog.module.scss";

type Catalog = {
	children: React.ReactNode;
	className?: string;
};

const CatalogComponent: FC<Catalog> = ({ children, className }) => {
	return <div className={clsx(styles.catalog, className)}>{children}</div>;
};

const Catalog = Object.assign(CatalogComponent, {
	Card: CardComponent,
});
export { Catalog };
