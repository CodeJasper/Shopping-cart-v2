import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import { ROUTES } from "@app/routing/routes";
import { CartIcon } from "@components/icons/CartIcon";
import { selectCartTotalProductsQuanitiy } from "@features/cart/store/cartStoreSelectors";

export function NavbarCart() {
  const totalProductsQuantity = useSelector(selectCartTotalProductsQuanitiy);

  return(
    <NavLink to={ROUTES.CART.route} className="relative">
      <div className="bg-red-500 px-2 rounded-lg text-white font-bold absolute -top-1 -right-5 text-xs">{totalProductsQuantity}</div>
      <CartIcon />
    </NavLink>
  )
}