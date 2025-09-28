import {
	BadRequest,
	Forbidden,
	NotFound,
	Unauthorized,
	Unknown,
	UnprocessableEntity,
} from "./createErrors";

type Methods = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
type QueryString = Record<
	string,
	number | string | string[] | boolean | undefined
>;

type ApiService = {
	hostname: string;
	pathname?: string;
	method?: Methods;
	query?: QueryString;
	body?: Record<string, unknown>;
	headers?: Record<string, unknown>;
	parseAs?: "text" | "json";
};

const composeQueryParams = (query?: QueryString) => {
	if (!query) {
		return "";
	}

	const parsedQuery2 = Object.fromEntries(
		Object.entries(query).filter(([_, value]) => !!value),
	) as Record<string, any>;

	return `?${new URLSearchParams(parsedQuery2).toString()}`;
};

const parseResponse = async <T>(
	response: Response,
	parseAs: "text" | "json",
): Promise<T> => {
	try {
		const data = await response[parseAs]();

		if (!response.ok) {
			if (response.status === 400) {
				throw new BadRequest(data?.response?.message);
			}
			if (response.status === 401) {
				throw new Unauthorized(data?.response?.message);
			}
			if (response.status === 403) {
				throw new Forbidden(data?.response?.message);
			}
			if (response.status === 404) {
				throw new NotFound(data?.response?.message);
			}
			if (response.status === 422) {
				throw new UnprocessableEntity(data?.response?.message);
			}
			throw new Unknown(data?.response?.message);
		}

		if (data.success === false) {
			throw new NotFound();
		}

		return data;
	} catch (error) {
		if (error instanceof Error) {
			throw error;
		}
		throw new Unknown();
	}
};

export async function apiService<T>({
	hostname,
	pathname,
	query,
	method = "GET",
	body,
	headers,
	parseAs = "json",
}: ApiService): Promise<T> {
	const qString = composeQueryParams(query);

	const path = `${hostname}/${pathname}${qString}`;

	const options = {
		method,
		body: body ? JSON.stringify(body) : undefined,
		headers: {
			"Content-Type": "application/json",
			...headers,
		},
	};

	const response = await fetch(path, options);

	return parseResponse<T>(response, parseAs);
}
