import type { Product } from "@features/products-list/types/types";

export type ProductCart = Product & {
    quantity: number;
}

export type Cart = {
    total: number;
    subTotal: number;
    products: ProductCart[]
}