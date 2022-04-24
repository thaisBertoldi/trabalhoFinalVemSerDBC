import { ENDPOINT_TOPICS } from "../../constants";
import api from "../../service/api";

export const getTopics = async (setList: Function) => {
  try {
    const { data } = await api.get(`${ENDPOINT_TOPICS.GET_ALL}=0`);
    setList(data);
  } catch (error) {
    console.log(error);
  }
};