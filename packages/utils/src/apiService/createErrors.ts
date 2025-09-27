const HttpResponses = {
	BadRequest: "Bad Request",
	Unauthorized: "Unauthorized",
	Forbidden: "Forbidden",
	NotFound: "Not Found",
	UnprocessableEntity: "Unprocessable Entity",
	Unknown: "Unknown",
} as const;

export class BadRequest extends Error {
	constructor(message: string = HttpResponses.BadRequest) {
		super(message);
		this.name = HttpResponses.BadRequest;
	}
}
export class Unauthorized extends Error {
	constructor(message: string = HttpResponses.Unauthorized) {
		super(message);
		this.name = HttpResponses.Unauthorized;
	}
}
export class Forbidden extends Error {
	constructor(message: string = HttpResponses.Forbidden) {
		super(message);
		this.name = HttpResponses.Forbidden;
	}
}
export class NotFound extends Error {
	constructor(message: string = HttpResponses.NotFound) {
		super(message);
		this.name = HttpResponses.NotFound;
	}
}
export class UnprocessableEntity extends Error {
	constructor(message: string = HttpResponses.UnprocessableEntity) {
		super(message);
		this.name = HttpResponses.UnprocessableEntity;
	}
}
export class Unknown extends Error {
	constructor(message: string = HttpResponses.Unknown) {
		super(message);
		this.name = HttpResponses.Unknown;
	}
}
