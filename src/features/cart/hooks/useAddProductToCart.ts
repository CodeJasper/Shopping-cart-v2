import { useState, type ChangeEvent, type MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { deleteProduct, addProduct, type ProductCart } from "@features";

export type UseAddProductToCartProps = {
  product: ProductCart;
}

export function useAddProductToCart(props: UseAddProductToCartProps) {
  const { product } = props;
  const [ quantity, setQuantity] = useState(product.quantity || 1);
  const dispatch = useDispatch();

  const handleChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if(Number(value) > 0) {
      setQuantity(Number(value))
    }
  }

  const handleOnClickAddButton = () => {
    setQuantity((prevState) => prevState + 1);
  }

  const handleOnClickRemoveButton = () => {
    if(quantity > 1) {
      setQuantity((prevState) => prevState - 1);
    }
  }

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(product))
  }

  const handleAddToCart = (_: MouseEvent<HTMLButtonElement>) => {
    dispatch(addProduct({ ...product, quantity }))
    toast.success("Producto agregado al carro.");  
  }

  return {
    handleChangeQuantity,
    handleDeleteProduct,
    handleOnClickRemoveButton,
    handleOnClickAddButton,
    handleAddToCart,
    quantity
  }
}