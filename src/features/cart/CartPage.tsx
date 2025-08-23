import type { RootState } from "@app";
import { useSelector } from "react-redux";

export function CartPage() {
  const { products } = useSelector((state: RootState) => state.cart);
  console.log(products)
  return <p>Cart</p>
}