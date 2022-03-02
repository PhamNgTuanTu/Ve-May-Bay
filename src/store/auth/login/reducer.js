import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
  SAVE_USER
} from "./actionTypes"

const initialState = {
  error: "",
  response:"",
  loading: false,
  user: {}
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      state = {
        ...state,
        loading: true,
      }
      break
    case LOGIN_SUCCESS:
      state = {
        ...state,
        response: action.payload,
      }
      break
    case SAVE_USER:
      state = {
        ...state,
        user: action.payload,
      }
      break
    case LOGOUT_USER:
      state = {
        ...state,
        response: action.payload,
      }
      break
    case LOGOUT_USER_SUCCESS:
      state = { ...state }
      break
    case API_ERROR:
      state = { ...state, error: action.payload, loading: false }
      break
    default:
      state = { ...state }
      break
  }
  return state
}

export default login
