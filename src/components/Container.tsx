import { FunctionComponent } from "react";
import { getBooks } from "../services/bookAPI";

export const Container: FunctionComponent = () => {
  const books = getBooks();
  return <>{books}</>;
};
