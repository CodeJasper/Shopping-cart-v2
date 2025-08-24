import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Product } from '@features/products-list/types/types'

export const api = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://apim-dev-proxy.sodhc.co/test-jasson/api/category' }),
  endpoints: (build) => ({
    getProducts: build.query<Product[], void>({
      query: () => '',
      transformResponse: (response: any) => {
        return response.data.results as Product[];
      },
    })
  }),
})

export const { useGetProductsQuery } = api