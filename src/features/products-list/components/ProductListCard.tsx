import { NavLink } from "react-router";
import type { MouseEvent } from "react";
import { Button, BUTTON_SIZES, BUTTON_VARIANTS, type ButtonSizesType, type ButtonVariantsType } from "@components";
import { ROUTES } from "@app";

export type ProductListCardProps = {
  productId: string;
  imageUrl: string;
  displayName: string;
  price: string;
  handleAddToCart: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function ProductListCard(props: ProductListCardProps) {
  const { productId, imageUrl, displayName, price, handleAddToCart } = props;
  return (
    <div className="border border-gray-300 p-4 rounded shadow flex flex-col justify-between gap-4 bg-white">
      <div>
        <NavLink to={ROUTES.PRODUCT_DETAIL.getRoute(productId)}>
          <img src={imageUrl} alt={displayName} className="w-full h-48 object-contain mb-2" />
          <h2 className="text-md mb-1">{displayName}</h2>
        </NavLink>
        <p className="text-lg font-semibold">$ {price}</p>
      </div>
      <Button
        handleClick={handleAddToCart}
        size={BUTTON_SIZES.MD as ButtonSizesType}
        variant={BUTTON_VARIANTS.PRIMARY as ButtonVariantsType}
        >
          Agregar al carro
      </Button>
    </div>
  )
}