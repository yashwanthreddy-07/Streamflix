import {cva,VariantProps} from "class-variance-authority"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import React from "react"
export const buttonStyles = cva(["hover:bg-secondary-hover","transition-colors"],{
    variants:{
        variant:{
            default:["bg-secondary","hover:bg-secondary-hover"],
            ghost:["hover:bg-gray-100"],
            dark: [
                "bg-secondary-dark",
                "hover:bg-secondary-dark-hover",
                "text-secondary",
              ],
        },
        defaultVariants:{
            variant:"default",
            size:"default"
        },
        size:{
        default:["rounded","p-2"],
        icon:[
            "rounded-full","w-10","h-10","flex","items-center","justify-center","p-2.5",
        ]
    }
}
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">
const Button = ({variant,size,className,...props}:ButtonProps) => {
  return (
      <button {...props} className={twMerge(buttonStyles({variant,size,className}))}></button>
  )
}

export default Button
