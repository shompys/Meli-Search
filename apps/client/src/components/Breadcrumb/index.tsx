import clsx from "clsx";
import Link from "next/link";
import type { FC } from "react";
import { Routes } from "@/const";
import styles from "./breadcrumb.module.scss";

type BreadcrumbProps = {
	className?: string;
	crumbs: string[];
};
export const Breadcrumb: FC<BreadcrumbProps> = ({ className, crumbs }) => {
	return (
		<div className={clsx(styles.breadcrumb, className)}>
			<Link href={Routes.ROOT} className={styles.breadcrumb__crumbLink}>
				Inicio
			</Link>

			{crumbs.length > 0 && <span>&gt;</span>}

			{crumbs?.map((crumb, index) => (
				<div key={crumb}>
					<span className={styles.breadcrumb__crumb}>{crumb}</span>
					{index < crumbs.length - 1 && <span> &gt;</span>}
				</div>
			))}
		</div>
	);
};
