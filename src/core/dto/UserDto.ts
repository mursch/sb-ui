import {BaseDto} from './BaseDto';

export class UserDto extends BaseDto {
	id: number;
	firstname: string;
	lastname: string;
	username: string;
}
