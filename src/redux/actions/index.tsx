import { PUT_SITE_SUB_TITLE } from '../types'

export const updateSiteName: (name: String) => Object = (name) => {
  return {
    type: PUT_SITE_SUB_TITLE,
    payload: name,
  }
}
