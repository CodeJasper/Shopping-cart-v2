import { CartPage, ProductDetailPage, ProductsListPage, PurchaseCompletedPage } from "@features";
import { createBrowserRouter } from "react-router";
import { ROUTES } from "@app";
import MainLayout from "../../MainLayout";

export const router = createBrowserRouter([
   {
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.HOME.route,
        Component: ProductsListPage,
      },
      {
        path: ROUTES.PRODUCT_DETAIL.route,
        Component: ProductDetailPage,
      },
      {
        path: ROUTES.CART.route,
        Component: CartPage,
      },
      {
        path: ROUTES.PURCHASE_COMPLETED.route,
        Component: PurchaseCompletedPage,
      },
    ],
  },
]);