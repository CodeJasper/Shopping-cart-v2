import { ProductsListPage } from "@features";
import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout";

export const router = createBrowserRouter([
   {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        Component: ProductsListPage,
      },
    ],
  },
]);