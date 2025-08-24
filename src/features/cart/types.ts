import type { Product } from "@features";

export type ProductCart = Product & {
    quantity: number;
}

export type Cart = {
    total: number;
    subTotal: number;
    products: ProductCart[]
}