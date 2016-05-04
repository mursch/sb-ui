import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {UserService} from '../../../core/service/UserService';
//import {UserDto} from '../../../core/dto/UserDto';

@Component({
	selector: 'useradm',
	templateUrl: './components/admin/user/UserAdminDetailComponent.html',
	viewProviders: [UserService]
})
export class UserAdminDetailComponent {

	constructor(private userSerice: UserService, private router: Router, private routeParams: RouteParams) {
	}

	ngOnInit() {
		let id = this.routeParams.get('id');
		console.log('loading user with id '+id);
		//this.userService.load
	}
}
