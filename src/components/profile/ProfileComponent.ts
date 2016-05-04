import {Component} from 'angular2/core';
import {RouteConfig, CanActivate, ROUTER_DIRECTIVES} from 'angular2/router';

import {PasswordChangeComponent} from './password/PasswordChangeComponent';
import {UserRole} from '../../core/UserRole';
import {AuthUtils} from '../../core/utils/AuthUtils';

@Component({
    selector: 'profile',
    templateUrl: './components/profile/ProfileComponent.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { // user admin child route
    path:'/password',
    name: 'PasswordChange',
    component: PasswordChangeComponent,
    useAsDefault: true
  }
])
@CanActivate(() => AuthUtils.hasUserRole(UserRole.USER))
export class ProfileComponent {

}
