import {
  AUTH_CHANGE_EMAIL_TEXT,
  AUTH_CHANGE_PASSWORD_TEXT
} from '../types'

const defaultState = {
  email: 'email',
  password: 'password'
}

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case AUTH_CHANGE_EMAIL_TEXT:
      return {
        ...state,
        email: action.payload
      }
    case AUTH_CHANGE_PASSWORD_TEXT:
      return {
        ...state,
        password: action.payload
      }
  }

  return state
}