import { PUT_SITE_NAME } from '../types'

export const updateSiteName: (name: String) => Object = (name) => {
  return {
    type: PUT_SITE_NAME,
    payload: name,
  }
}
