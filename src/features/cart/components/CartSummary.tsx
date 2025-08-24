import { saveAs } from "file-saver";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import type { RootState } from "@app/store/store";
import { resetCart } from "@features/cart/store/cartStoreSlice";
import { ROUTES } from "@app/routing/routes";
import { Button } from "@components/button/Buttton";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@components/button/constants";
import { type ButtonSizesType, type ButtonVariantsType } from "@components/button/types";

export function CartSummary() {
  const { total, subTotal, products } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDownload = () => {
    const cartJson = {
      products,
      total,
      subTotal,
      date: new Date()
    };
    const blob = new Blob([JSON.stringify(cartJson, null, 2)], {
      type: "application/json",
    });
    saveAs(blob, "cart.json");
    dispatch(resetCart());
    navigate(ROUTES.PURCHASE_COMPLETED.route)
  };
  
  return (
    <>
      <div className="bg-white rounded p-4 mb-4">
        <h1 className="text-xl font-semibold">Resumen de la compra</h1>
      </div>
      <div className="bg-white p-4 rounded">
        <p className="flex justify-between"><span>Sub total:</span><span>$ {subTotal.toLocaleString('es-ES')}</span></p>
        <p className="flex justify-between"><span>IVA:</span><span>19%</span></p>

        <div className="border-t border-gray-200 mt-4 pt-4">
          <p className="flex justify-between font-semibold text-xl"><span>Total a pagar:</span><span>$ {total.toLocaleString('es-ES')}</span></p>
        </div>

        <Button
          size={BUTTON_SIZES.MD as ButtonSizesType}
          variant={BUTTON_VARIANTS.SUCCESS as ButtonVariantsType}
          handleClick={handleDownload}
          className="w-full mt-4 font-semibold"
        >
          Comprar
        </Button>
      </div>
    </>
  )
}