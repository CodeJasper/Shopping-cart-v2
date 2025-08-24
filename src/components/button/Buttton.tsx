import type { MouseEvent, PropsWithChildren } from "react"
import { BUTTON_SIZES, BUTTON_VARIANTS, type ButtonSizesType, type ButtonVariantsType } from "@components";

export type ButtonProps = PropsWithChildren<{
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  variant: ButtonVariantsType;
  size: ButtonSizesType;
}>

export function Button(props: ButtonProps) {
  const { handleClick, className = '' , variant, size, children } = props;

  const getClassName = () => {
    const classes = ['border', 'rounded', 'hover:cursor-pointer']

    if (variant === BUTTON_VARIANTS.PRIMARY) {
      classes.push('border-red-600 text-red-600 hover:bg-red-700 hover:border-red-700 hover:text-white')
    }

    if (variant === BUTTON_VARIANTS.SUCCESS) {
      classes.push('border-green-600 bg-green-600 hover:bg-green-500 hover:green-500 text-white')
    }

    if (size === BUTTON_SIZES.MD) {
      classes.push('px-4 py-1')
    }

    if (size === BUTTON_SIZES.LG) {
      classes.push('px-4 py-3')
    }

    return classes.join(' ');
  }

  return (
     <button 
        className={`${className} ${getClassName()}`}
        onClick={handleClick}
      >
        {children}
      </button>
  )
}