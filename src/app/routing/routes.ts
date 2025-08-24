export const ROUTES = {
  HOME: {
    route: "/"
  },
  PRODUCT_DETAIL: {
    route: "/product/:id",
    getRoute: (id: string) => `/product/${id}`
  },
  CART: {
   route: "/cart" 
  },
  PURCHASE_COMPLETED: {
    route: "/cart/purchase-completed"
  },
};