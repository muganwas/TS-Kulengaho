import { PUT_SITE_SUB_TITLE, PUT_USER_NAME, PUT_PASSWORD } from '../types'
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

export const updateUserPassowrd: (pw: String) => generic_action_object = (
  password
) => {
  return {
    type: PUT_PASSWORD,
    payload: password,
  }
}
