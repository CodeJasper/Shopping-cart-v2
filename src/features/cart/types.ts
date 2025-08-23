import type { Product } from "@features";

export type ProductCart = Product & {
    quantity: number;
}

export type Cart = {
    purchaseDate?: string;
    total: number;
    subTotal: number;
    taxes?: Array<{
        type: string;
        value: number;
    }>
    products: ProductCart[]
}