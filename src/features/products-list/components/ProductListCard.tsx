import { NavLink } from "react-router";

export type ProductListCardProps = {
  productId: string;
  imageUrl: string;
  displayName: string;
  price: string;
}

export function ProductListCard(props: ProductListCardProps) {
  const { productId, imageUrl, displayName, price } = props;
  return (
    <NavLink to={`product/${productId}`} className="border border-gray-300 p-4 rounded shadow">
      <img src={imageUrl} alt={displayName} className="w-full h-48 object-contain mb-2" />
      <h2 className="text-md mb-1">{displayName}</h2>
      <p className="text-lg font-semibold">$ {price}</p>
    </NavLink>
  )
}