type FormatPrice = {
	amount: number;
	decimals: number;
	currency: string;
};

// output: xxx,xx
export const formatPrice = (price: FormatPrice) => {
	const full = price.amount + price.decimals / 100;
	return new Intl.NumberFormat("es-AR", {
		style: "currency",
		currency: price.currency,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(full);
};
