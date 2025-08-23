import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '@app'
import { addProduct, ProductListCard, type Product } from "@features";
import { Loading } from '@components';
import type { MouseEvent } from 'react';

export function ProductsList() {
  const { 
    products,
    productsFiltered,
    areProductsFiltered,
    isLoading
  } = useSelector((state: RootState) => state.productList);
  const dispatch = useDispatch();

  if(isLoading) {
    return <Loading />;
  }

  if((areProductsFiltered && productsFiltered.length === 0) || products.length === 0) {
    return <p className="text-center col-span-3">No se encontraron productos</p>;
  }

  const handleAddToCart = (e: MouseEvent<HTMLButtonElement>, product: Product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addProduct({...product, quantity: 1}))
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
          handleAddToCart={(e: MouseEvent<HTMLButtonElement>) => handleAddToCart(e, product)}
        />
      ))}
    </div>
  );
}   