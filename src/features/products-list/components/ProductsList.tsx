import { useSelector } from 'react-redux'
import { type RootState } from '@app'
import { ProductListCard } from "./ProductListCard";

export function ProductsList() {
  const products = useSelector((state: RootState) => state.productsList.products);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductListCard 
          key={product.productId}
          productId={product.productId}
          displayName={product.displayName}
          imageUrl={product.mediaUrls[0]}
          price={product.prices[0].price}
        />
      ))}
    </div>
  );
}   