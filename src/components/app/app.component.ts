import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {HttpUtils} from '../../core/utils/HttpUtils';
import {HttpStatus} from '../../core/HttpStatus';
import {Notification} from '../../core/dto/Notification';
import {NotificationType} from '../../core/dto/NotificationType';
import {LoginService} from '../../core/service/LoginService';

import {HomeComponent}  from '../home/home.component';
import {LoginComponent} from '../login/login.component';

import {AdminComponent} from '../admin/AdminComponent';
import {ProfileComponent} from '../profile/ProfileComponent';

@Component({
    selector: 'app',
    templateUrl: './components/app/app.component.html',
    styleUrls: ['./components/app/app.component.css'],
	viewProviders: [LoginService],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/login', name: 'Login', component: LoginComponent },

	{ // profile child route
      path: '/profile/...',
      name: 'Profile',
      component: ProfileComponent
    },

    { // administration child route
      path: '/admin/...',
      name: 'Admin',
      component: AdminComponent
    },
])
export class App {

	constructor(private loginService: LoginService, private httpUtils: HttpUtils, private router: Router) {
	}

	ngOnInit() {
		this.httpUtils.requestNotifier.subscribe((notification: Notification) => {

			if (notification.type === NotificationType.START) {
				console.log('http request - started');
			} else if (notification.type === NotificationType.COMPLETE) {
				console.log('http request - completed');
			} else if (notification.type === NotificationType.ERROR) {
				console.log('http request - error status: '+notification.data.status+' '+notification.data.statusText);
				if (HttpStatus.HTTP_401.eq(notification.data.status)) {
					this.router.navigateByUrl('/login');
				}
			}

		});
	}

	onLogout() {
		this.loginService.logout();
		this.router.navigateByUrl('/home');
	}
}
