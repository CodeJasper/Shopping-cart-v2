import { CartPage, ProductDetailPage, ProductsListPage, PurchaseCompletedPage } from "@features";
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
      {
        path: "/product/:id",
        Component: ProductDetailPage,
      },
      {
        path: "/cart",
        Component: CartPage,
      },
      {
        path: "/cart/purchase-completed",
        Component: PurchaseCompletedPage,
      },
    ],
  },
]);