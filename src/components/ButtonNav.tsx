import { ReactNode } from "react";
import { HashLink } from "react-router-hash-link";
import { useIsOpenStore } from "../store/useIsOpenStore";


interface ButtonNavProps {
  text: string
  icon?:ReactNode
  textPosition?: 'left' | 'right'
  to: string
}

export const ButtonNav: React.FC<ButtonNavProps> = ({

    text,
    icon,
    textPosition = "left",
    to
 }) => {
    const toggleMenu = useIsOpenStore()
  return (
    <>
        {textPosition === 'left' && (
            <HashLink smooth to={to}>
                <div onClick={() => toggleMenu.setIsOpen()} className={` btn btn-ghost btn-neutral text-lg flex justify-start capitalize rounded w-full`}>
                    {icon}
                    {text}
                </div>
            </HashLink>
        )}
        {textPosition === 'right' && (
            <HashLink smooth to={to}>
                <div onClick={() => toggleMenu.setIsOpen()} className={` btn btn-ghost btn-neutral text-lg flex justify-end capitalize rounded w-full`}>
                    {text}
                    {icon}
                </div>
            </HashLink>
        )}
    </>
  )
}
