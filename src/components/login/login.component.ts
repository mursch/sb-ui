import {Component} from 'angular2/core';

import {LoginService} from '../../core/service/LoginService';
import {LoginDto} from '../../core/dto/LoginDto';
import {LoginResponseDto} from '../../core/dto/LoginResponseDto';

@Component({
	selector: 'login',
	templateUrl: './components/login/login.component.html',
	styleUrls: ['./components/login/login.component.css'],
	viewProviders: [LoginService]
})
export class LoginComponent {

	model = new LoginDto();

	submitted = false;

	constructor(private loginService: LoginService) {
	}

	onSubmit() {
		console.log('Login form submitted.');
		//this.submitted = true;
		this.loginService.performLogin(this.model).subscribe((res: LoginResponseDto) => {
			console.log(JSON.stringify(res));
		});
	}

	resetModel() {
		this.model = new LoginDto();
	}
}
