import api from '../../service/api';
import { LoginDTO, RegisterDTO } from "../../models/UserDTO";
import { AppDispatch } from '..';

export const handleLogin = async (values: LoginDTO, dispatch: AppDispatch, navigate: any) => {
  try {    
    const {data} = await api.post("/auth/login", values);
    api.defaults.headers.common['Authorization'] = data.token;
    localStorage.setItem('token', JSON.stringify(data));
    const setLogged = {
      type: 'SET_LOGIN',
      username: data.username,
      token: data.token,
      profile: data.profile,
      isLogged: true
    }

    dispatch(setLogged);
    navigate('/');
  } catch (error) {
    console.log(error);
  }
}

export const handleRegister = async (values: RegisterDTO, dispatch: AppDispatch, navigate: any) => {
  console.log(values);
  
}