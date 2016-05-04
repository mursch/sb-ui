import {Injectable} from 'angular2/core';
import {RequestOptionsArgs, Http, Response, Headers} from 'angular2/http';

import {AuthHttp} from 'angular2-jwt';

import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/subject/ReplaySubject';

import {AuthUtils} from './AuthUtils';
import {Notification} from '../dto/Notification';
import {NotificationType} from '../dto/NotificationType';


@Injectable()
export class HttpUtils {

	requestNotifier = new ReplaySubject<Notification>(1);

	constructor(private http: Http, private authHttp: AuthHttp) {
	}

	/*get(url: string, options?: RequestOptionsArgs): Observable<Response> {
		return this._request('get', url, options);
	}*/

	get(url: string): Observable<Response> {
		this._notify({ type: NotificationType.START });
		if (AuthUtils.tokenNotExpired()) {
			return this.authHttp.get(url, { headers: this._getDefaultHeaders() }).do(
				res => this._notify({ type: NotificationType.DONE }),
				err => this._notify({ type: NotificationType.ERROR, data: err }),
				() => this._notify({ type: NotificationType.COMPLETE })
			);
		} else {
			return this.http.get(url, { headers: this._getDefaultHeaders() }).do(
				res => this._notify({ type: NotificationType.DONE }),
				err => this._notify({ type: NotificationType.ERROR, data: err }),
				() => this._notify({ type: NotificationType.COMPLETE })
			);
		}
	}

	post(url: string, body: string, withoutJwt?: boolean): Observable<Response> {
		this._notify({ type: NotificationType.START });
		if (AuthUtils.tokenNotExpired()) {
			return this.authHttp.post(url, body, { headers: this._getDefaultHeaders() }).do(
				res => this._notify({ type: NotificationType.DONE }),
				err => this._notify({ type: NotificationType.ERROR, data: err }),
				() => this._notify({ type: NotificationType.COMPLETE }));
		} else {
			return this.http.post(url, body, { headers: this._getDefaultHeaders() }).do(
				res => this._notify({ type: NotificationType.DONE }),
				err => this._notify({ type: NotificationType.ERROR, data: err }),
				() => this._notify({ type: NotificationType.COMPLETE }));
		}
	}

	put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
		return this._request('put', url, body, options);
	}

	delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
		return this._request('delete', url, options);
	}

	patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
		return this._request('patch', url, body, options);
	}

	head(url: string, options?: RequestOptionsArgs): Observable<Response> {
		return this._request('head', url, options);
	}

	private _request(method: string, ...httpParams: any[]): Observable<Response> {
		this._notify({ type: NotificationType.START });
		return this.http[method].apply(httpParams)
			.do((res: any) => this._notify({ type: NotificationType.DONE }),
			(err: any) => this._notify({ type: NotificationType.ERROR, data: err }),
			() => this._notify({ type: NotificationType.COMPLETE }));
	}

	private _notify(notification: Notification) {
		this.requestNotifier.next(notification);
	}

	private _getDefaultHeaders() {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Access-Control-Allow-Origin', '*');
		//headers.append('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
		return headers;
	}
}
