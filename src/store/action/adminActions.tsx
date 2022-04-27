import Notiflix from "notiflix";
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { ENDPOINT_ADMIN } from "../../constants";
import api from "../../service/api";

export const getAllUsers = async (setAllUsers: Function) => {
  try {
    Loading.circle();
    const { data } = await api.get(`${ENDPOINT_ADMIN.GET_ALL_USERS}=0`);
    setAllUsers(data.content);
    console.log(data.content);
  } catch (error) {
    console.log(error);
  }
  finally {
    Loading.remove();
  }
};
export const handleProfile = async ( setAllUsers: Function, formik: Function, event: React.FormEvent,id: number,type: string) => {
  event.preventDefault();
  try {
    Loading.circle();
    console.log(type);
    console.log(id);
    
    const { data } = await api.put(
      `${ENDPOINT_ADMIN.ALTER_PROFILE}=${type}&idUser=${id}`
    );
    getAllUsers(setAllUsers);
    Notiflix.Notify.success(
      `Perfil do usuário alterado com sucesso.`
    );
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure(
      `Sinto muito, mas nao foi possivel alterar o perfil desse usuário. ${error}`
    );
  }
  finally {
    Loading.remove();
  }
  formik();
};

