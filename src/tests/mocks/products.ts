import type { Product } from "@features/products-list/types";

export const mockProducts: Product[] = [
  {
    productId: "chair-001",
    displayName: "Silla ergonómica de oficina",
    prices: [
      {
        label: "Precio Regular",
        type: "regular",
        symbol: "$",
        price: "$120.00",
        unit: "unidad",
        priceWithoutFormatting: 120,
      },
    ],
    mediaUrls: ["https://example.com/images/chair-001.jpg"],
    brand: "ErgoBrand",
    model: "E-OfficeX",
    badges: [
      { type: "new", value: "Nuevo" },
      { type: "eco", value: "Eco-Friendly" },
    ],
    events: [
      { description: "Descuento especial", value: "10%" },
    ],
    multiPurposeIcon: {
      iconUrl: "https://example.com/icons/chair.png",
    },
  },
  {
    productId: "stool-002",
    displayName: "Banco alto de cocina",
    prices: [
      {
        label: "Precio Regular",
        type: "regular",
        symbol: "$",
        price: "$75.00",
        unit: "unidad",
        priceWithoutFormatting: 75,
      },
    ],
    mediaUrls: ["https://example.com/images/stool-002.jpg"],
    brand: "KitchenStyle",
    model: "KS-High",
    badges: [
      { type: "best-seller", value: "Más vendido" },
    ],
    events: [],
    multiPurposeIcon: {
      iconUrl: "https://example.com/icons/stool.png",
    },
  },
  {
    productId: "ladder-003",
    displayName: "Escalera de aluminio 6 peldaños",
    prices: [
      {
        label: "Precio Regular",
        type: "regular",
        symbol: "$",
        price: "$95.00",
        unit: "unidad",
        priceWithoutFormatting: 95,
      },
    ],
    mediaUrls: ["https://example.com/images/ladder-003.jpg"],
    brand: "SafeStep",
    model: "SS-6A",
    badges: [
      { type: "safety", value: "Certificada" },
    ],
    events: [
      { description: "Oferta limitada", value: "15%" },
    ],
    multiPurposeIcon: {
      iconUrl: "https://example.com/icons/ladder.png",
    },
  },
  {
    productId: "chair-004",
    displayName: "Silla plegable ligera",
    prices: [
      {
        label: "Precio Regular",
        type: "regular",
        symbol: "$",
        price: "$35.00",
        unit: "unidad",
        priceWithoutFormatting: 35,
      },
    ],
    mediaUrls: ["https://example.com/images/chair-004.jpg"],
    brand: "EventEase",
    model: "FoldLight",
    badges: [],
    events: [],
    multiPurposeIcon: {
      iconUrl: "https://example.com/icons/folding-chair.png",
    },
  },
  {
    productId: "stool-005",
    displayName: "Banco bajo de madera",
    prices: [
      {
        label: "Precio Regular",
        type: "regular",
        symbol: "$",
        price: "$50.00",
        unit: "unidad",
        priceWithoutFormatting: 50,
      },
    ],
    mediaUrls: ["https://example.com/images/stool-005.jpg"],
    brand: "WoodCraft",
    model: "WC-Low",
    badges: [
      { type: "handmade", value: "Hecho a mano" },
    ],
    events: [],
    multiPurposeIcon: {
      iconUrl: "https://example.com/icons/wood-stool.png",
    },
  },
];
