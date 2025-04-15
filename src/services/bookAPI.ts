import axios, { AxiosResponse } from "axios";

export const getBook = async (): Promise<AxiosResponse> => {
  return await axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=AIzaSyAXgulCS7V54aMe_KqML2VYSaG81Xf5ayI`,
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
