import type { RootState } from "@app/store";
import { CartProductList, CartSummary } from "@features";
import { useSelector } from "react-redux";

export function CartPage() {
  const { products } = useSelector((state: RootState) => state.cart);

  const getTotal = () => {
    return products.reduce((acc, product) => acc + product.prices[0].priceWithoutFormatting * product.quantity, 0);
  }
  return (
    <div className="grid grid-cols-12 gap-7">
      <div className="col-span-12 md:col-span-6 lg:col-span-8"><CartProductList subTotal={getTotal()} /></div>
      <div className="col-span-12 md:col-span-6 lg:col-span-4"><CartSummary subTotal={getTotal()} /></div>
    </div>
  )
}