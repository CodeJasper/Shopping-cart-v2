import type { RootState } from "@app";
import { useDispatch, useSelector } from "react-redux";
import { saveAs } from "file-saver";
import { resetCart } from "@features";
import { useNavigate } from "react-router";
import { ROUTES } from "@app";

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

        <button
          className="rounded px-4 py-3 bg-green-600 w-full text-xl font-semibold mt-4 text-white hover:cursor-pointer hover:bg-green-500"
          onClick={handleDownload}
        >
          Comprar
        </button>
      </div>
    </>
  )
}