export type Product = {
    productId: string;
    displayName: string;
    prices: Array<{
        label: string;
        type: string;
        symbol: string;
        price: string;
        unit: string;
        priceWithoutFormatting: number;
    }>;
    mediaUrls: string[];
};

export type ProductsListState = {
    products: Product[];
};