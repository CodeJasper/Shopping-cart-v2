import type { Product } from "@features";

export type ProductDetailsProps = {
  product: Product;
}

export function ProductDetails({product}: ProductDetailsProps) {
  const internetPrice = product.prices.find((price) => price.type === "INTERNET");
  const normalPrice = product.prices.find((price) => price.type === "NORMAL");
  const discount = product.badges.find((badge) => badge.type === "DISCOUNT");

  return (
    <div>
      <p className="text-gray-600">{product.brand}</p>
      <h1 className="text-2xl font-bold">{product.displayName}</h1>
      <p className="mb-4 text-gray-600">Modelo: {product.model || "Sin modelo"}</p>
      {internetPrice && 
        <p className="text-red-600 font-semibold">
          Precio <span>INTERNET</span>: <span className="bg-red-600 text-white px-2">{discount?.value}</span>
        </p>}
      <p className="text-3xl font-semibold">$ {product.prices[0].price}</p>
      {(discount && normalPrice && internetPrice) && (
        <p className="text-2xl text-green-600 mt-2">Ahorra: <span className="font-semibold">$ {(normalPrice.priceWithoutFormatting - internetPrice.priceWithoutFormatting).toLocaleString('es-ES')}</span></p>
      )}
      {normalPrice && internetPrice && (
        <p className="text-lg text-gray-500 line-through">$ {normalPrice.price}</p>
      )}
      {product.multiPurposeIcon && (
        <img className="mt-4" src={product.multiPurposeIcon.iconUrl}/>
      )}
    </div>
  )
}