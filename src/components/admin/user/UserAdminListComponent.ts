import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

import {UserService} from '../../../core/service/UserService';
import {UserDto} from '../../../core/dto/UserDto';

@Component({
	selector: 'useradm',
	templateUrl: './components/admin/user/UserAdminListComponent.html',
	viewProviders: [UserService]
})
export class UserAdminListComponent {

	public users: UserDto[];

	constructor(private userSerice: UserService, private router: Router) {
	}

	ngAfterContentInit() {
		this._initModel();
	}

	onSelect(user: UserDto) {
		this.router.navigate(['UserAdminDetail', {id: user.id}]);
	}

	private _initModel() {
		this.userSerice.getUsers().subscribe(res => {
			console.log(JSON.stringify(res));
			this.users = res.users;
		});
	}

}
