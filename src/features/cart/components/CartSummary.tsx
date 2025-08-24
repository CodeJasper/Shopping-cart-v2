export type CartSummaryProps = {
  subTotal: number;
}

export function CartSummary(props: CartSummaryProps) {
  const { subTotal } = props;

  const calculateTotalWithIVA = () => {
    const tax = subTotal * 0.19;
    const total = subTotal + tax;
    return total;
  }
  
  return (
    <>
      <div className="bg-white rounded p-4 mb-4">
        <h1 className="text-xl font-semibold">Resumen de la compra</h1>
      </div>
      <div className="bg-white p-4 rounded">
        <p className="flex justify-between"><span>Sub total:</span><span>$ {subTotal.toLocaleString('es-ES')}</span></p>
        <p className="flex justify-between"><span>IVA:</span><span>19%</span></p>

        <div className="border-t border-gray-200 mt-4 pt-4">
          <p className="flex justify-between font-semibold text-xl"><span>Total a pagar:</span><span>$ {calculateTotalWithIVA().toLocaleString('es-ES')}</span></p>
        </div>

        <button className="rounded px-4 py-3 bg-green-600 w-full text-xl font-semibold mt-4 text-white hover:cursor-pointer hover:bg-green-500">Comprar</button>
      </div>
    </>
  )
}