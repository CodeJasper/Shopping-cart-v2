import { useSelector } from "react-redux";
import type { RootState } from "@app/store/store";
import { CartProductList} from "@features/cart/components/CartProductList";
import { CartSummary } from "@features/cart/components/CartSummary";

export function CartPage() {
  const { products } = useSelector((state: RootState) => state.cart);

  if (products.length === 0) {
    return <p className="text-center">Aún no hay productos en el carro.</p>
  }

  return (
    <div className="grid grid-cols-12 gap-7">
      <div className="col-span-12 md:col-span-6 lg:col-span-8"><CartProductList /></div>
      <div className="col-span-12 md:col-span-6 lg:col-span-4"><CartSummary /></div>
    </div>
  )
}