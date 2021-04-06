import {
	PUT_USER_NAME,
	PUT_PASSWORD,
	RESET_USER_INFO,
	SET_USER_NAME_ERROR,
	SET_USER_PASSWORD_ERROR,
	SET_USER_LOGIN_STATUS,
} from '../types'
import { usrInfoReducer } from '../../sharedTypes'

const defaultState: usrInfoReducer = {
	user_name: '',
	user_name_error: '',
	user_password: '',
	user_password_error: '',
	is_logged_in: false,
}

const userInfoReducer: (state: usrInfoReducer, action: any) => Object = (
	state = defaultState,
	action
) => {
	switch (action.type) {
		case PUT_USER_NAME:
			return {
				...state,
				user_name: action.payload,
				user_name_error: '',
			}
		case SET_USER_NAME_ERROR:
			return {
				...state,
				user_name_error: action.payload,
			}
		case PUT_PASSWORD:
			return {
				...state,
				user_password: action.payload,
				user_password_error: '',
			}
		case SET_USER_PASSWORD_ERROR:
			return {
				...state,
				user_password_error: action.payload,
			}
		case SET_USER_LOGIN_STATUS:
			return {
				...state,
				is_logged_in: action.payload,
			}
		case RESET_USER_INFO:
			return {
				...defaultState,
			}
		default:
			return {
				...state,
			}
	}
}

export default userInfoReducer
