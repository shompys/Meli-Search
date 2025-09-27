export const findBy = <T extends Record<string, any>>(
	key: keyof T,
	value: T[keyof T],
	array: T[],
) => {
	return array.find((item) => item[key] === value);
};
