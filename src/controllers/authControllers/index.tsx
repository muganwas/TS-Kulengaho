import { passwordRegex } from '../../constants'

const username_check: (u: string) => { msg: string; passed: boolean } = (
  username
) => {
  if (username && username.length > 5) {
    return { msg: 'success', passed: true }
  } else {
    return { msg: 'username too short!', passed: false }
  }
}

const password_check: (u: string) => { msg: string; passed: boolean } = (
  password
) => {
  if (password && password.length > 5) {
    if (password.match(passwordRegex)) {
      return { msg: 'success', passed: true }
    } else {
      return { msg: 'incorrect password format', passed: false }
    }
  } else {
    return { msg: 'password too short!', passed: false }
  }
}

const authControllers = {
  username_check,
  password_check,
}

export default authControllers
