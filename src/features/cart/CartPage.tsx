import type { RootState } from "@app";
import { useSelector } from "react-redux";
import { CartProductList } from "@features";

export function CartPage() {
  const { products } = useSelector((state: RootState) => state.cart);
  
  return (
    <div className="grid grid-cols-12 gap-7">
      <div className="col-span-12 md:col-span-9"><CartProductList  /></div>
      {/* <div className="col-span-12 md:col-span-6"><ProductDetails product={product}/></div>  */}
    </div>
  )
}