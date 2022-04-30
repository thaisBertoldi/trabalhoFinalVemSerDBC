import Notiflix from "notiflix";
import api from "../../service/api";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { ENDPOINT_ADMIN } from "../../constants";

export const getAllUsers = async (
  setAllUsers: Function,
  page: number,
  setAllPagesPrincipal: Function,
  setIsSearchUser: Function
) => {
  
  try {
    Loading.circle();
    const { data } = await api.get(`${ENDPOINT_ADMIN.GET_ALL_USERS}=${page}`);
    setAllPagesPrincipal(data.totalPages);
    setAllUsers(data.content);
  } catch (error) {
    console.log(error);
  } finally {
    setIsSearchUser(false);
    Loading.remove();
  }
};

export const getUserSearch = async (
  page: number,
  setAllPagesSearch: Function,
  nameSearch: string,
  setUserFind: Function,
) => {
  
  try {
    const { data } = await api.get(`${ENDPOINT_ADMIN.GET_USER}fullname=${nameSearch}&page=${page}`);
    setAllPagesSearch(data.totalPages);
    setUserFind(data.content);
  } catch (error) {
    console.log(error);
  }
};

export const handleProfile = async (
  setAllUsers: Function,
  formik: Function,
  event: React.FormEvent,
  id: number,
  type: string,
  page: number,
  setAllPages: Function,
  setUserSearch: Function,
  setIsSearchUser: Function
) => {
  try {
    event.preventDefault();
    Loading.circle();
    const { data } = await api.put(
      `${ENDPOINT_ADMIN.ALTER_PROFILE}=${type}&idUser=${id}`
    );
    Notiflix.Notify.success(`Perfil do usuário alterado com sucesso.`);
  } catch (error) {
    Notiflix.Notify.failure(`Sinto muito, mas nao foi possivel alterar o perfil desse usuário.`);
  } finally {
    getAllUsers(setAllUsers, page, setAllPages, setIsSearchUser);
    setIsSearchUser(false);
    setUserSearch('');
    Loading.remove();
    formik();
  }
};
