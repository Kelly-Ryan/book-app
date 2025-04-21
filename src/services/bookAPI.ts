import axios, { AxiosResponse } from "axios";

export const getBooks = async (): Promise<AxiosResponse> => {
  const response = await axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=AIzaSyAXgulCS7V54aMe_KqML2VYSaG81Xf5ayI`,
    )
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
};
