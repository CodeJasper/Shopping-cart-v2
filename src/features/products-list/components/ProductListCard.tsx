import { NavLink } from "react-router";
import type { MouseEvent } from "react";
import { AddCartButton } from "@components";
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
    <NavLink to={ROUTES.PRODUCT_DETAIL.getRoute(productId)} className="border border-gray-300 p-4 rounded shadow flex flex-col justify-between gap-4 bg-white">
      <div>
        <img src={imageUrl} alt={displayName} className="w-full h-48 object-contain mb-2" />
        <h2 className="text-md mb-1">{displayName}</h2>
        <p className="text-lg font-semibold">$ {price}</p>
      </div>
      <AddCartButton handleAddToCart={handleAddToCart} />
    </NavLink>
  )
}