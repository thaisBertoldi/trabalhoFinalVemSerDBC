import api from '../../service/api';
import { LoginDTO, RegisterDTO, isLoggedDTO } from "../../models/UserDTO";
import { AppDispatch } from '..';

export const handleLogin = async (values: LoginDTO, dispatch: AppDispatch, navigate: any) => {
  try {    
    const {data} = await api.post("/auth/login", values);
    setLogin(dispatch, navigate, data);
  } catch (error) {
    console.log(error);
  }
}

export const handleRegister = async (values: RegisterDTO, dispatch: AppDispatch, navigate: any) => {
  const ObjRegister = {
    email: values.email,
    fullName: values.user,
    password: values.password
  }
  try {
    const {data} = await api.post("/auth/sign-up", ObjRegister);
    setLogin(dispatch, navigate, data);
  } catch (error) {
    console.log(error);
  }
}

const setLogin = (dispatch: AppDispatch, navigate: any, data: isLoggedDTO) => {
  const setLogged = {
    type: 'SET_LOGIN',
    username: data.username,
    token: data.token,
    profile: data.profile,
    isLogged: true
  }

  api.defaults.headers.common['Authorization'] = data.token;
  localStorage.setItem('token', JSON.stringify(data));
  dispatch(setLogged);
  navigate('/');
}
