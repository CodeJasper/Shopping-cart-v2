import { Button, InputNumberQuantity, BUTTON_SIZES, BUTTON_VARIANTS, type ButtonSizesType, type ButtonVariantsType } from "@components";
import { useState } from "react";
import type { ChangeEvent } from "react";
import type { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "@features";
import type { Product } from "@features";
import { toast } from "react-hot-toast";

export type AddProductToCartButtonProps = {
  product: Product
}

export function AddProductToCartButton(props: AddProductToCartButtonProps) {
  const { product} = props;
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useDispatch();

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

  const handleAddToCart = (_: MouseEvent<HTMLButtonElement>) => {
    dispatch(addProduct({...product, quantity }))
    toast.success("Producto agregado al carro.");  
  }

  return (
    <div className="flex sm:flex-row md:flex-col lg:flex-row flex-col gap-4">
      <InputNumberQuantity
        handleChangeQuantity={handleChangeQuantity}
        handleOnClickAddButton={handleOnClickAddButton}
        handleOnClickRemoveButton={handleOnClickRemoveButton}
        quantity={quantity}
        inputClassName="w-full sm:max-w-[60px] md:max-w-full lg:max-w-[100px]"
      />
      <Button
        className="grow"
        handleClick={handleAddToCart}
        size={BUTTON_SIZES.MD as ButtonSizesType}
        variant={BUTTON_VARIANTS.PRIMARY as ButtonVariantsType}
        >
          Agregar al carro
        </Button>
    </div>
  )
}