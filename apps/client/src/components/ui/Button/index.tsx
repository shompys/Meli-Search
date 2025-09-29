import clsx from "clsx";
import type { ButtonHTMLAttributes, FC } from "react";
import styles from "./button.module.scss";

type ButtonProps = {
	children: React.ReactNode;
	className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
	return (
		<button className={clsx(styles.button, className)} {...props}>
			{children}
		</button>
	);
};
