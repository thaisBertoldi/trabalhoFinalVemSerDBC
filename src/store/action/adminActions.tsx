import Notiflix from "notiflix";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { ENDPOINT_ADMIN } from "../../constants";
import api from "../../service/api";

export const getAllUsers = async (
  setAllUsers: Function,
  page: number,
  setAllPagesPrincipal: Function,
) => {
  
  try {
    Loading.circle();
    const { data } = await api.get(`${ENDPOINT_ADMIN.GET_ALL_USERS}=${page}`);
    setAllPagesPrincipal(data.totalPages);
    setAllUsers(data.content);
    console.log(data.content);
  } catch (error) {
    console.log(error);
  } finally {
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
    console.log(data.content);
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
) => {
  event.preventDefault();
  console.log(page, "pagina que veio no handleProfile")
  try {
    Loading.circle();
    console.log(type);
    console.log(id);

    const { data } = await api.put(
      `${ENDPOINT_ADMIN.ALTER_PROFILE}=${type}&idUser=${id}`
    );
    getAllUsers(setAllUsers, page, setAllPages);
    setUserSearch('')
    Notiflix.Notify.success(`Perfil do usuário alterado com sucesso.`);
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure(
      `Sinto muito, mas nao foi possivel alterar o perfil desse usuário. ${error}`
    );
  } finally {
    Loading.remove();
  }
  formik();
};
