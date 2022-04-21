import { AnyAction } from "redux";
import { isLoggedDTO } from '../../models/UserDTO'

const INITIAL_STATE = {
  username: '',
  token: '',
  profile: '',
  isLogged: false
};

const authReducer = ( state: isLoggedDTO = INITIAL_STATE, action: AnyAction ) => {
  if(action.type === 'SET_LOGIN') {
    return {
      ...state,
      username: action.username,
      token: action.token,
      profile: action.profile
    }
  }

  if(action.type === 'SET_LOGOUT') {
    state = INITIAL_STATE;
    return state;
  }

  return state;
}

export default authReducer;