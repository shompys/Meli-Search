import { getRandomNumber } from "./getRandomNumber";

export const getRandomBoolean = () => {
	return getRandomNumber() % 2 === 0;
};
