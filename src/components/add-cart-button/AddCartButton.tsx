import type { MouseEvent } from "react"

export type AddCartButtonProps = {
  handleAddToCart: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export function AddCartButton(props: AddCartButtonProps) {
  const { handleAddToCart, className = '' } = props;
  return (
     <button 
        className={`${className} border border-red-600 text-red-600 rounded hover:cursor-pointer hover:bg-red-700 hover:border-red-700 hover:text-white px-4 py-1`}
        onClick={handleAddToCart}
      >
        Agregar al carro
      </button>
  )
}