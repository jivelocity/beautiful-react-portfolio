import { ReactNode } from "react";
interface ButtonNavProps {
  className?:string
  text: string
  icon?:ReactNode
  textPosition?: 'left' | 'right'
}

export const ButtonNav: React.FC<ButtonNavProps> = ({
    className,
    text,
    icon,
    textPosition = "left"
 }) => {
  return (
    <>
        {textPosition === 'left' && (
            <div className={`${className} btn btn-ghost btn-neutral text-lg flex justify-start capitalize rounded-md w-full`}>
                {icon}
                {text}
            </div>
        )}
        {textPosition === 'right' && (
            <div className={`${className} btn btn-ghost btn-neutral text-lg flex justify-end capitalize rounded-md w-full`}>
                {text}
                {icon}
            </div>
        )}
    </>
  )
}
