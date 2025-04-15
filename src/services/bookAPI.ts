import axios, { AxiosResponse } from "axios";

export const getBooks = async (): Promise<AxiosResponse> => {
  const response = await axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return response.data;
};
