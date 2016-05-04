import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {UserAdminListComponent} from './UserAdminListComponent';
import {UserAdminDetailComponent} from './UserAdminDetailComponent';

@Component({
	selector: 'useradm',
	templateUrl: './components/admin/user/UserAdminComponent.html',
  directives: [RouterOutlet]
})
@RouteConfig([
  {path:'/',         name: 'UserAdminList', component: UserAdminListComponent, useAsDefault: true},
  {path:'/:id',      name: 'UserAdminDetail', component: UserAdminDetailComponent}
])
export class UserAdminComponent {

}
