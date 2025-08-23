import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { QueryStatus } from '@reduxjs/toolkit/query'
import { setProducts, ProductsList, setIsLoadingProducts } from '@features'
import { useGetProductsQuery } from '@app'

export function ProductsListPage() {
	const response = useGetProductsQuery();
  const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setIsLoadingProducts(response.isLoading));
		if (response.status === QueryStatus.fulfilled && response.data) {
			dispatch(setProducts(response.data));
		}
	}, [response, dispatch]);  

	if(response.isError) {
		return <p className="text-center">Ha ocurrido un error al intentar obtener los productos.</p>
	}

  return <ProductsList />;
}   