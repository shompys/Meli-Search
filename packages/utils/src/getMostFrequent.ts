export const getMostFrequent = (list: string[]) => {
	if (list.length <= 0) return "";

	const counts: Record<string, number> = {};

	for (const el of list) {
		counts[el] = (counts[el] || 0) + 1;
	}
	let maxCount = 0;
	let mostRepeated = "";

	for (const key in counts) {
		if (counts[key] > maxCount) {
			maxCount = counts[key];
			mostRepeated = key;
		}
	}
	return mostRepeated;
};
