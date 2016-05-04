import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';
import {JwtHelper} from 'angular2-jwt';

import {AuthUtils} from '../utils/AuthUtils';
import {HttpUtils} from '../utils/HttpUtils';

import {LoginDto} from '../dto/LoginDto';
import {LoginResponseDto} from '../dto/LoginResponseDto';
import {StorageKey} from '../StorageKey';

@Injectable()
export class LoginService {

	static VERSION: string = 'v1';
	static LOGIN: string = '/login';

	url: string;
	jwtHelper: JwtHelper = new JwtHelper();

	constructor(private httpUtils: HttpUtils, private router: Router) {
		this.url = `http://localhost:8080/auth/${LoginService.VERSION}`;
	}

	performLogin(loginDto: LoginDto) {
		console.log('perform login');
		var response = this.httpUtils.post(`${this.url}${LoginService.LOGIN}`, JSON.stringify(loginDto), true).map(res => res.json());
		response.subscribe((res: LoginResponseDto) => {
			this._login(res);
		});
		return response;
	}

	logout() {
		localStorage.removeItem(StorageKey.ID_TOKEN);
	}

	isLoggedIn() : boolean {
		return AuthUtils.tokenNotExpired(StorageKey.ID_TOKEN);
	}

	private _login(loginResponse: LoginResponseDto) {
		localStorage.setItem(StorageKey.ID_TOKEN, loginResponse.token);
		console.log(
			this.jwtHelper.decodeToken(loginResponse.token),
			this.jwtHelper.getTokenExpirationDate(loginResponse.token),
			this.jwtHelper.isTokenExpired(loginResponse.token)
		);
		this.router.navigateByUrl('/home');
	}
}
