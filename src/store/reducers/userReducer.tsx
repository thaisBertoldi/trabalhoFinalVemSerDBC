import { AnyAction } from "redux";

const INITIAL_STATE = {
  isLoggedIn: false,
}


const userReducer = ( state: any = INITIAL_STATE, action: AnyAction ) => {
  if(action.type === 'SET_LOGIN') {
    return {
      ...state,

    }
  }

  if(action.type === 'SET_LOGOUT') {
    return {
      ...state,

    }
  }

  if(action.type === 'CREATE_USER') {
    return {
      ...state,

    }
  }
}

export default userReducer;