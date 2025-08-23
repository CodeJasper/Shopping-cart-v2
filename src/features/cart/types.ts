import type { Product } from "@features";

export type Cart = {
    purchaseDate?: string;
    total: number;
    subTotal: number;
    taxes?: Array<{
        type: string;
        value: number;
    }>
    products: Array<Product & {
        quantity: number;
    }>
}