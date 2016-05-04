import {Injectable} from 'angular2/core';

import {HttpUtils} from '../utils/HttpUtils';

@Injectable()
export class UserService {

	static BASE_URL: string = 'http://localhost:8080/api/';
	static VERSION: string = 'v1';
	static GET_USER: string = '/users';

	constructor(protected httpUtils: HttpUtils) {
	}

	getUsers() {
		return this.httpUtils.get(`${UserService.BASE_URL}${UserService.VERSION}${UserService.GET_USER}`)
				.map(res => res.json());
	}
}
