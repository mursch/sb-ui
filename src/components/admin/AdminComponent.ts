import {Component} from 'angular2/core';
import {RouteConfig, CanActivate, ROUTER_DIRECTIVES} from 'angular2/router';

import {UserAdminComponent} from './user/UserAdminComponent';
import {UserRole} from '../../core/UserRole';
import {AuthUtils} from '../../core/utils/AuthUtils';

@Component({
    selector: 'admin',
    templateUrl: './components/admin/AdminComponent.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { // user admin child route
    path:'/user/...',
    name: 'UserAdmin',
    component: UserAdminComponent,
    useAsDefault: true
  }
])
@CanActivate(() => AuthUtils.hasUserRole(UserRole.ADMIN))
export class AdminComponent {

}
