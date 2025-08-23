import { useSelector } from 'react-redux'
import { type RootState } from '@app'
import { ProductListCard } from "@features";
import { Loading } from '@components';

export function ProductsList() {
  const { 
    products,
    productsFiltered,
    areProductsFiltered,
    isLoading
  } = useSelector((state: RootState) => state.productList);

  if(isLoading) {
    return <Loading />;
  }

  if((areProductsFiltered && productsFiltered.length === 0) || products.length === 0) {
    return <p className="text-center col-span-3">No se encontraron productos</p>;
  }

  const productsToShow = productsFiltered.length ? productsFiltered : products;
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {productsToShow.map((product) => (
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