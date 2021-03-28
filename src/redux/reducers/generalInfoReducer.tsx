import { PUT_DEFAULTS, PUT_SITE_SUB_TITLE } from '../types'
import { genInfoReducer } from '../../sharedTypes'

const defaultState: genInfoReducer = {
  site_subtitle: 'Kulengaho',
}

const generalInfoReducer: (state: genInfoReducer, action: any) => Object = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case PUT_SITE_SUB_TITLE:
      return {
        ...state,
        site_subtitle: action.payload,
      }
    case PUT_DEFAULTS:
      return {
        site_subtitle: 'Kulengaho',
      }
    default:
      return {
        ...state,
      }
  }
}

export default generalInfoReducer
