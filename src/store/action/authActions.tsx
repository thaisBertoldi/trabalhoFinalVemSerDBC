import api from '../../service/api';
import { LoginDTO } from "../../models/UserDTO";

export const handleLogin = async (values: LoginDTO, dispatch: any, navigate: any) => {
  try {    
    const {data} = await api.post("/auth/login", values);
    api.defaults.headers.common['Authorization'] = data.token;
    localStorage.setItem('token', JSON.stringify(data));
    const setLogged = {
      type: 'SET_LOGIN',
      username: data.username,
      token: data.token,
      profile: data.profile
    }

    dispatch(setLogged);
    navigate('/');
  } catch (error) {
    console.log(error);
  }
}