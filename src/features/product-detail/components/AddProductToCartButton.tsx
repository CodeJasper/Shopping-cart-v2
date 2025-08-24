import { Button, InputNumberQuantity, BUTTON_SIZES, BUTTON_VARIANTS, type ButtonSizesType, type ButtonVariantsType } from "@components";
import { useAddProductToCart } from "@features";
import type { Product } from "@features";

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