export const getRandomNumber = (maxNumber: number = 1000) => {
	return Math.floor(Math.random() * maxNumber) + 1;
};
