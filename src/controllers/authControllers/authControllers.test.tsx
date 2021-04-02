import AuthControllers from './index'
const { password_check, username_check } = AuthControllers

const correctPass = 'Tkewe21!'
const wrongPass = 'tkewe21!'
const shortPass = 'tk'

const shortUsername = 'uk'
const goodUsername = 'Ukamanve'

describe('password_check method tests', () => {
  it('password_check method exists', () => {
    expect(password_check).toBeDefined()
  })
  it('picks good password format', () => {
    expect(password_check(correctPass)).toStrictEqual({
      msg: 'success',
      passed: true,
    })
  })
  it('picks bad password format', () => {
    expect(password_check(wrongPass)).toStrictEqual({
      msg: 'incorrect password format',
      passed: false,
    })
  })
  it('picks short password', () => {
    expect(password_check(shortPass)).toStrictEqual({
      msg: 'password too short!',
      passed: false,
    })
  })
})

describe('username_check method tests', () => {
  it('username_check method exists', () => {
    expect(username_check).toBeDefined()
  })
  it('picks short username', () => {
    expect(username_check(shortUsername)).toStrictEqual({
      msg: 'username too short!',
      passed: false,
    })
  })
  it('picks good username', () => {
    expect(username_check(goodUsername)).toStrictEqual({
      msg: 'success',
      passed: true,
    })
  })
})
