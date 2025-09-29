import clsx from "clsx";
import Image from "next/image";
import type { FC } from "react";
import { Button } from "../ui/Button";
import styles from "./productDetail.module.scss";

type ProductDetail = {
	title: string;
	price: string[];
	picture: string;
	condition: string;
	freeShipping: boolean;
	soldQuantity: number;
	description: string;
	className?: string;
};

export const ProductDetail: FC<ProductDetail> = ({
	className,
	title,
	price,
	picture,
	condition,
	freeShipping,
	soldQuantity,
	description,
}) => {
	const [currencyWithAmount, decimals] = price;
	return (
		<section className={clsx(styles.productDetail, className)}>
			<div className={styles.productDetail__firstSection}>
				<div className={styles.productDetail__firstSection__image}>
					<Image
						src={picture}
						alt={title}
						fill
						priority
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				</div>

				<div className={styles.productDetail__firstSection__detail}>
					{/* line1 */}
					<p className={styles.productDetail__firstSection__detail__condition}>
						<span>{condition}</span>
						<span>|</span>
						<span>{soldQuantity} vendidos</span>
					</p>
					{/* line2 */}
					<h1 className={styles.productDetail__firstSection__detail__title}>
						{title}
					</h1>
					{/* line3 */}
					<p className={styles.productDetail__firstSection__detail__price}>
						<span>{currencyWithAmount}</span>
						<span>{decimals}</span>
					</p>
					{/* line4 */}
					{freeShipping && (
						<p
							className={
								styles.productDetail__firstSection__detail__freeShipping
							}
						>
							Envío gratis
						</p>
					)}
					<Button type="button">Comprar</Button>
				</div>
			</div>

			<div className={styles.productDetail__secondSection}>
				<h2 className={styles.productDetail__secondSection__titleDescription}>
					Descripción del producto
				</h2>
				<p className={styles.productDetail__secondSection__description}>
					{description}
				</p>
			</div>
		</section>
	);
};
