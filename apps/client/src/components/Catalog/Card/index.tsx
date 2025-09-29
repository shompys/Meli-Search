import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { Routes } from "@/const";
import styles from "./card.module.scss";

type CardComponentProps = {
	id: string;
	picture: string;
	price: string[];
	title: string;
	className?: string;
	condition: string;
	freeShipping: boolean;
};
export const CardComponent: FC<CardComponentProps> = ({
	id,
	picture,
	price,
	title,
	className,
	condition,
	freeShipping,
}) => {
	const [currencyWithAmount, decimals] = price;
	return (
		<Link
			href={`${Routes.ITEMS}/${id}`}
			className={clsx(styles.card, className)}
		>
			<div className={styles.card__image}>
				<Image
					src={picture}
					fill
					alt={title}
					priority={false}
					sizes="(max-width: 768px) 160px, 284px"
				/>
			</div>
			<div className={styles.card__details}>
				<div className={styles.card__details__topSection}>
					<p className={styles.card__details__topSection__price}>
						<span>{currencyWithAmount}</span>
						<span>{decimals}</span>
					</p>

					{freeShipping && (
						<p className={styles.card__details__topSection__freeShipping}>
							Envío gratis
						</p>
					)}
				</div>

				<p className={styles.card__details__condition}>{condition}</p>

				<h2 className={styles.card__details__title}>{title}</h2>
			</div>
		</Link>
	);
};

CardComponent.displayName = "Catalog.Card";
