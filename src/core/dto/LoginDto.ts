import {BaseDto} from './BaseDto';

export class LoginDto extends BaseDto {

	username: string;
	password: string;
	rememberMe: boolean;

}
