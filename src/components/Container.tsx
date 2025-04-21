import { FunctionComponent } from "react";
import { getBooks } from "../services/bookAPI";

const books = JSON.stringify(getBooks().toString());

export const Container: FunctionComponent = () => {
  console.log(`books: ${books}`);
  return <>{books}</>;
};
