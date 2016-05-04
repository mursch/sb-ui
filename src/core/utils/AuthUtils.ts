import {Injectable} from 'angular2/core';
import {JwtHelper} from 'angular2-jwt';

import {UserRole} from '../UserRole';
import {StorageKey} from '../StorageKey';

@Injectable()
export class AuthUtils {

	public static tokenNotExpired(tokenName?: string, jwt?: string) {

		var authToken: string = tokenName || 'id_token';
		var token: string;

		if (jwt) {
			token = jwt;
		} else {
			token = localStorage.getItem(authToken);
		}

		var jwtHelper = new JwtHelper();

		if (!token || jwtHelper.isTokenExpired(token, null)) {
			return false;
		} else {
			return true;
		}
	}

	public static hasUserRole(userRole: UserRole): boolean {
		if (!this.tokenNotExpired(StorageKey.ID_TOKEN)) {
			return false;
		}
		return true;
	}
}
