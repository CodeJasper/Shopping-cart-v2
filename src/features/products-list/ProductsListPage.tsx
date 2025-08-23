import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { QueryStatus } from '@reduxjs/toolkit/query'
import { setProducts, ProductsList } from '@features'
import { useGetProductsQuery } from '@app'

export function ProductsListPage() {
	const response = useGetProductsQuery();
  const dispatch = useDispatch();

	useEffect(() => {
		if (response.status === QueryStatus.fulfilled && response.data) {
			dispatch(setProducts(response.data));
		}
	}, [response.data, dispatch]);  

  return <ProductsList />;
}   