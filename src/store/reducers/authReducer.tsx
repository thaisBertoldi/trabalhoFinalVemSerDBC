import { AnyAction } from "redux";
import { isLoggedDTO } from '../../models/UserDTO'

const INITIAL_STATE = {
  username: '',
  fullName: '',
  token: '',
  profile: '',
  isLogged: false,
  profileImage: ''
};

const authReducer = ( state: isLoggedDTO = INITIAL_STATE, action: AnyAction ) => {
  if(action.type === 'SET_LOGIN') {
    return {
      ...state,
      username: action.username,
      fullName: action.fullName,
      token: action.token,
      profile: action.profile,
      profileImage: action.profileImage,
      isLogged: action.isLogged
    }
  }

  if(action.type === 'SET_LOGOUT') {
    state = INITIAL_STATE;
    return state;
  }

  return state;
}

export default authReducer;