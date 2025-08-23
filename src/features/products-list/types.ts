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
    brand: string;
    model: string;
    badges: Array<{
        type: string;
        value: string;
    }>;
    events: Array<{
        description: string;
        value: string;
    }>;
    multiPurposeIcon: {
        iconUrl: string;
    }
};

export type ProductsListState = {
    products: Product[];
    productsFiltered: Product[];
    areProductsFiltered: boolean,
    isLoading: boolean;
};