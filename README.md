# Shopping Cart V2

This project is a shopping cart application built with **React**, **Redux Toolkit**, and **Vite**, allowing users to browse products, manage a cart, and download a JSON summary of their purchase.

## Features
- Search products by name.
- Add products to the cart from the product list.
- Delete products from the cart.
- View product details and add products with a selected quantity.
- View cart with a list of products and a summary of the purchase.
- Download a JSON file of the cart contents when completing a purchase.
- Persistent global state using **Redux** and **localStorage**.

## State Management

- The app uses **Redux Toolkit** for global state management.
- Cart operations (add, remove, update quantity, reset) are handled through slices in the store.
- The state is persisted in **localStorage**, so the cart survives page reloads.

## Testing

### Unit Tests

Unit tests are implemented for Redux slices and other functionality.  
Run tests using **Vitest**:

```bash
npx vitest
```

### API Load Test

A performance/load test is implemented for the products API using Autocannon.
Run the load test with:

```bash
node src/tests/performance/productsLoad.cjs
```

This simulates multiple concurrent requests to evaluate API performance and latency.

## Technologies Used

- React 19 with JSX and Vite
- Redux Toolkit for state management
- Tailwind CSS for styling
- TypeScript
- Vitest for unit tests
- Autocannon for load testing
- Vercel for deployment

## Live Demo

[https://shopping-cart-v2-vert.vercel.app/](https://shopping-cart-v2-vert.vercel.app/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/CodeJasper/shopping-cart-v2.git
   cd shopping-cart-v2
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running Locally

```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build for Production

```bash
npm run build
```

### Deployment

This project is deployed on [Vercel](https://vercel.com/).  

## Folder Structure

```
shopping-cart-v2/
├── public/
├── src/
│   ├── components/
│   ├── app/
│   ├── features/
│   ├── tests/
│   ├── main.tsx
├── package.json
├── vite.config.ts
└── README.md
```
