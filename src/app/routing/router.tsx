import { createBrowserRouter } from "react-router";
import { CartPage } from "@features/cart/CartPage";
import { ProductDetailPage } from "@features/product-detail/ProductDetailPage";
import { ProductsListPage } from "@features/products-list/ProductsListPage";
import { PurchaseCompletedPage } from "@features/cart/PurchaseCompletedPage";
import { ROUTES } from "@app/routing/routes";
import MainLayout from "@app/MainLayout";

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