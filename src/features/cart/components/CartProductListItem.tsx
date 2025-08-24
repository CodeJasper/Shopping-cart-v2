import { DeleteIcon, InputNumberQuantity } from "@components";
import { deleteProduct, setProductQuantity, type ProductCart } from "@features";
import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router";

export type CartProductListItemProps = {
  product: ProductCart;
}

export function CartProductListItem(props: CartProductListItemProps) {
  const { product } = props;
  const [ quantity, setQuantity] = useState(product.quantity);
  const productTotal = product.quantity * product.prices[0].priceWithoutFormatting;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProductQuantity({...product, quantity}));
  }, [quantity, product])

  const handleChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if(Number(value) > 0) {
      setQuantity(Number(value))
    }
  }

  const handleOnClickAddButton = () => {
    setQuantity((prevState) => prevState + 1);
  }

  const handleOnClickRemoveButton = () => {
    if(quantity > 1) {
      setQuantity((prevState) => prevState - 1);
    }
  }

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(product))
  }

  return (
    <div className="p-4 rounded bg-white">
      <div className="grid grid-cols-12 gap-3 relative">
        <button 
          className="lg:hidden border border-gray-700 rounded p-1 text-gray-700 hover:cursor-pointer hover:bg-gray-200 absolute right-0 top-0"
          onClick={handleDeleteProduct}
        >
          <DeleteIcon />
        </button>
        <NavLink className="col-span-2" to={`/product/${product.productId}`}>
          <img src={product.mediaUrls[0]} />
        </NavLink>
        <div className="col-span-10 lg:col-span-4 pr-7 mr-7 lg:pr-0 lg:mr-0">
          <p className="text-gray-600">{product.brand}</p>
          <h2 className="font-semibold"><NavLink to={`/product/${product.productId}`}>{product.displayName}</NavLink></h2>
          <p className="text-gray-600">Modelo: {product.model || "Sin modelo"}</p>
        </div>
        <div className="col-span-8 lg:col-span-4">
          <InputNumberQuantity
            handleChangeQuantity={handleChangeQuantity}
            handleOnClickAddButton={handleOnClickAddButton}
            handleOnClickRemoveButton={handleOnClickRemoveButton}          
            quantity={quantity}
            inputClassName="max-w-[100px]"
          />
        </div>
        <div className="flex flex-col justify-between items-end col-span-4 lg:col-span-2">
          <p className="text-lg font-semibold">$ {product.prices[0].price}</p>
          <button
            className="hidden lg:block border border-gray-700 rounded p-2 text-gray-700 hover:cursor-pointer hover:bg-gray-200"
            onClick={handleDeleteProduct}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-4 pt-4">
        <p className="text-right font-semibold text-lg">Total Producto: $ {productTotal.toLocaleString('es-ES')}</p>
      </div>
    </div>
  )
}