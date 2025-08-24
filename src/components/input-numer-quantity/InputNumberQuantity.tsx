import type { ChangeEvent } from "react";

export type InputNumberQuantityProps = {
  handleOnClickRemoveButton: () => void;
  handleOnClickAddButton: () => void;
  handleChangeQuantity: (e: ChangeEvent<HTMLInputElement>) => void;
  quantity: number;
  inputClassName?: string;
}

export function InputNumberQuantity(props: InputNumberQuantityProps) {
  const { handleChangeQuantity, handleOnClickAddButton, handleOnClickRemoveButton, quantity, inputClassName = "" } = props;
  return (
    <div className="flex">
      <button className="border border-gray-200 text-2xl h-[48px] w-[48px] hover:cursor-pointer flex justify-center items-center" onClick={handleOnClickRemoveButton}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
      <input className={`border border-x-0 border-gray-200 px-2 sm:px-4 ${inputClassName}`} type="number" min={1} value={quantity} onChange={handleChangeQuantity} />
      <button className="border border-gray-200 text-2xl h-[48px] w-[48px] hover:cursor-pointer flex justify-center items-center" onClick={handleOnClickAddButton}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
    </div>
  )
}