import { AddCartButton } from "@components";
import { useState } from "react";
import type { ChangeEvent } from "react";
import type { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "@features";
import type { Product } from "@features";

export type AddProductToCartButtonProps = {
  product: Product
}

export function AddProductToCartButton(props: AddProductToCartButtonProps) {
  const { product} = props;
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useDispatch();

  const handleChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuantity(Number(value))
  }

  const handleOnClickAddButton = () => {
    setQuantity((prevState) => prevState + 1);
  }

  const handleOnClickRemoveButton = () => {
    setQuantity((prevState) => prevState - 1);
  }

  const handleAddToCart = (_: MouseEvent<HTMLButtonElement>) => {
    dispatch(addProduct({...product, quantity }))
  }

  return (
    <div className="flex gap-4">
      <div className="flex">
        <button className="border border-gray-200 text-2xl h-[48px] w-[48px] hover:cursor-pointer flex justify-center items-center" onClick={handleOnClickRemoveButton}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <input className="border border-x-0 border-gray-200 px-2 sm:px-4 max-w-[60px] md:max-w-[60px] lg:max-w-[100px]" type="number" min={1} value={quantity} onChange={handleChangeQuantity} />
        <button className="border border-gray-200 text-2xl h-[48px] w-[48px] hover:cursor-pointer flex justify-center items-center" onClick={handleOnClickAddButton}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
      <AddCartButton className="grow" handleAddToCart={handleAddToCart} />
    </div>
  )
}