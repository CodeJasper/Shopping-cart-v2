import { ROUTES } from "@app";
import { CartIcon } from "@components";
import { selectCartTotalProductsQuanitiy } from "@features";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";

export function NavbarCart() {
  const totalProductsQuantity = useSelector(selectCartTotalProductsQuanitiy);

  return(
    <NavLink to={ROUTES.CART.route} className="relative">
      <div className="bg-red-500 px-2 rounded-lg text-white font-bold absolute -top-1 -right-5 text-xs">{totalProductsQuantity}</div>
      <CartIcon />
    </NavLink>
  )
}