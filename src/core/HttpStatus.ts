
export class HttpStatus {

	public static HTTP_401 = new HttpStatus(401, 'Unauthorized', 'request.unauthorized');

	status: number;
	message: string;
	key: string;

	constructor(status: number, message: string, key: string) {
		this.status = status;
		this.message = message;
		this.key = key;
	}

	eq(status: number): boolean {
		return this.status === status;
	}
}
