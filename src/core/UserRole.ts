
export class UserRole {

	static USER: UserRole = new UserRole('USER', 'User');
	static ADMIN: UserRole = new UserRole('ADMIN', 'Admin');

	constructor (private id: string, private name: string) {
	}
}
