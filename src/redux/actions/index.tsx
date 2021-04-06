import {
	PUT_SITE_SUB_TITLE,
	PUT_USER_NAME,
	PUT_PASSWORD,
	SET_USER_NAME_ERROR,
	SET_USER_PASSWORD_ERROR,
	SET_USER_LOGIN_STATUS,
} from '../types'
import { generic_action_object } from '../../sharedTypes'

export const updateSiteName: (nm: String) => generic_action_object = (name) => {
	return {
		type: PUT_SITE_SUB_TITLE,
		payload: name,
	}
}

export const updateUsername: (nm: String) => generic_action_object = (name) => {
	return {
		type: PUT_USER_NAME,
		payload: name,
	}
}

export const updateUserPassword: (pw: String) => generic_action_object = (
	password
) => {
	return {
		type: PUT_PASSWORD,
		payload: password,
	}
}

export const setUserNameError: (err: String) => generic_action_object = (
	error
) => {
	return {
		type: SET_USER_NAME_ERROR,
		payload: error,
	}
}

export const setUserLogInStatus: (ls: boolean) => generic_action_object = (
	loggedIn
) => {
	return {
		type: SET_USER_LOGIN_STATUS,
		payload: loggedIn,
	}
}

export const setUserPasswordError: (err: String) => generic_action_object = (
	error
) => {
	return {
		type: SET_USER_PASSWORD_ERROR,
		payload: error,
	}
}
