import { ENDPOINT_ADMIN } from "../../constants";
import api from "../../service/api";

export const getAllUsers = async (setAllUsers: Function) => {
  try {
    const { data } = await api.get(`${ENDPOINT_ADMIN.GET_ALL_USERS}=0`);
    setAllUsers(data.content);
    console.log(data.content);
  } catch (error) {
    console.log(error);
  }
};
export const handleProfile = async ( setAllUsers: Function, formik: Function, event: React.FormEvent,id: number,type: string) => {
  event.preventDefault();
  try {
    const { data } = await api.put(
      `${ENDPOINT_ADMIN.ALTER_PROFILE}=${type}&idUser=${id}`
    );
    getAllUsers(setAllUsers);
  } catch (error) {
    console.log(error);
  }
  formik();
};

