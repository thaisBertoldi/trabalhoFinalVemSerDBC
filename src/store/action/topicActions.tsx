import { useState } from "react";
import { ENDPOINT_TOPICS } from "../../constants";
import api from "../../service/api";

export const getTopics = async (
  setListTopics: Function,
  setAllPages: Function,
  page: number,
) => {
  try {
    const { data } = await api.get(`${ENDPOINT_TOPICS.GET_ALL}=${page}`);
    console.log(`${ENDPOINT_TOPICS.GET_ALL}=${page}`)
    setAllPages(data.totalPages);
    setListTopics(data);
  } catch (error) {
    console.log(error);
  }
};
