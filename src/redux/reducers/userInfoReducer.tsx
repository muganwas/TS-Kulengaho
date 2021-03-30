import { PUT_USER_NAME, PUT_PASSWORD, RESET_USER_INFO } from '../types'
import { usrInfoReducer } from '../../sharedTypes'

const defaultState: usrInfoReducer = {
  user_name: '',
  user_password: '',
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
      }
    case PUT_PASSWORD:
      return {
        user_password: action.payload,
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
