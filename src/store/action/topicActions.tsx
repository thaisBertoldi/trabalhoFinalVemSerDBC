import { useState } from "react";
import { ENDPOINT_TOPICS } from "../../constants";
import api from "../../service/api";

export const getTopics = async (
  setList: Function,
  listTopics: any,
  setAllPages: Function,
  allPages: number,
  currentPage: number,
  pageCount: number,
  setpageCount: Function
) => {
  try {
    const { data } = await api.get(`${ENDPOINT_TOPICS.GET_ALL}=${currentPage}`);
    console.log(`${ENDPOINT_TOPICS.GET_ALL}=${currentPage}`)
    setpageCount(Math.ceil(data.totalElements / data.size));
    setAllPages(data.totalPages);
    setList(data);
  } catch (error) {
    console.log(error);
  }
};
