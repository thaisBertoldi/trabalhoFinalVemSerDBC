import api from '../../service/api';
import Notiflix from "notiflix";
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { LoginDTO, RegisterDTO, isLoggedDTO } from "../../models/UserDTO";
import { AppDispatch } from '..';

export const handleLogin = async (values: LoginDTO, dispatch: AppDispatch, navigate: any) => {
  try {    
    Loading.circle();
    const {data} = await api.post("/auth/login", values);
    console.log(data);
    setLogin(dispatch, data);
    navigate('/');
  } catch (error) {
    Notiflix.Notify.failure(
      `Sinto muito, mas nao foi possivel acessar a api. ${error}`
    );
    console.log(error);
  } finally {
    Loading.remove();
  }
}

export const handleRegister = async (values: RegisterDTO, dispatch: AppDispatch, navigate: any) => {
  const ObjRegister = {
    email: values.email,
    fullName: values.user,
    password: values.password
  }
  try {
    Loading.circle();
    const {data} = await api.post("/auth/sign-up", ObjRegister);
    setLogin(dispatch, data);
    navigate('/');
  } catch (error) {
    Notiflix.Notify.failure(
      `Sinto muito, mas nao foi possivel acessar a api. ${error}`
    );
    console.log(error);
  } finally {
    Loading.remove();
  }
}

export const setLogin = (dispatch: AppDispatch, data: isLoggedDTO) => {
  Loading.circle();
  const setLogged = {
    type: 'SET_LOGIN',
    username: data.username,
    token: data.token,
    profile: data.profile,
    profileImage: data.profileImage,
    isLogged: true
  }

  api.defaults.headers.common['Authorization'] = data.token;
  localStorage.setItem('token', JSON.stringify(data));
  dispatch(setLogged);
  Loading.remove();
}

export const handleLogout = (dispatch: AppDispatch, navigate: any) => {
  Loading.circle();
  localStorage.removeItem('token');
  dispatch({type: 'SET_LOGOUT'});
  navigate('/login');
  Loading.remove();
}