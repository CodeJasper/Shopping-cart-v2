import { type ButtonSizesType, type ButtonVariantsType } from "@components/button/types";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@components/button/constants";
import { InputNumberQuantity } from "@components/input-numer-quantity/InputNumberQuantity";
import { Button } from "@components/button/Buttton";
import { useAddProductToCart } from "@features/cart/hooks/useAddProductToCart";
import type { Product } from "@features/products-list/types";

export type AddProductToCartButtonProps = {
  product: Product
}

export function AddProductToCartButton(props: AddProductToCartButtonProps) {
  const { product} = props;
  const { 
    quantity,
    handleChangeQuantity,
    handleOnClickAddButton,
    handleOnClickRemoveButton,
    handleAddToCart
  } = useAddProductToCart({ product: { ...product, quantity: 1 }});

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