import { Outlet } from 'react-router'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { QueryStatus } from '@reduxjs/toolkit/query';
import { Toaster } from "react-hot-toast";
import { Navbar } from '@components/navbar/Navbar'
import { setIsLoadingProducts, setProducts } from '@features/products-list/productsListStore';
import { useGetProductsQuery } from '@app/api';

function MainLayout() {  
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
  
  return (
    <>
      <Navbar />
      <Toaster 
        toastOptions={{
          success: {
            duration: 1000,
            style: {
              background: '#9aeab7ff',
              color: '#000',
            }
          },
        }}
      />
      <div className="container mx-auto p-4 pt-[100px] lg:max-w-7xl">
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout
