import { ProductsListPage } from "@features";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: ProductsListPage,
  },
]);