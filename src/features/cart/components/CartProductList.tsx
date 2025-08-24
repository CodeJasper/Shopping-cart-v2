import type { RootState } from "@app";
import { useSelector } from "react-redux";
import { CartProductListItem } from "@features";

export type CartProductListProps = {
  subTotal: number;
}

export function CartProductList(props: CartProductListProps) {
  const { subTotal } = props;
  const { products } = useSelector((state: RootState) => state.cart);

  return (
    <>
      <div className="bg-white rounded p-4 mb-4">
        <h1 className="text-xl font-semibold">Carro de compras</h1>
      </div>
      <div className="space-y-4">
        {products.map((product) => <CartProductListItem product={product} key={product.productId} />)}
        <div>
          <div className="bg-white mt-4 p-4 rounded">
            <p className="text-right font-semibold text-lg">Total: $ {subTotal.toLocaleString('es-ES')}</p>
          </div>
        </div>
      </div>
    </>
  )
}