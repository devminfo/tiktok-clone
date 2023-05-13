import { User } from './user.type'

export type Login = {
  password: string
  email: string
}

export type Register = Login & Pick<User, 'fullName' | 'dateOfBirth' | 'gender'>

export type AuthToken = {
  accessToken: {
    token: string
    iat: number
  }
  refreshToken: {
    token: string
    iat: number
  }
}

export type AuthUser = AuthToken & {
  user?: User
}
