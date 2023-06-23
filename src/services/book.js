import { axiosForLibraryAPI } from "./axios";

export const searchBook = async (params) => {
  const { data } = await axiosForLibraryAPI
    .request({
      method: "get",
      url: "/v1/book",
      params: params,
    })
    .then((res) => res.data);
  return data;
};
export const getBook = async (id) => {
  const { data } = await axiosForLibraryAPI
    .request({
      method: "get",
      url: `/v1/book/${id}`,
    })
    .then((res) => res.data);
  return data;
};
