import $api from '../http'

export const clientId = '66974a57-9f28-47e3-a362-ad976d58d0f1'

export default class AuthService {
  static async login(email, password) {
    return $api.post('/auth/sign_in', { email, password })
  }

  static async registration(email, password, firstName, lastName) {
    return $api.post('/auth/sign_up', {
      email,
      password,
      clientId,
      firstName,
      lastName,
    })
  }

  static async checkAuth() {
    return $api.get('/auth')
  }
}
