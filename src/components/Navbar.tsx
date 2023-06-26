import { menu } from "../lib/icons"
import { SidebarMobile } from "./SidebarMobile";
import { useIsOpenStore } from "../store/useIsOpenStore";
import { AnimatePresence } from "framer-motion";
export const Navbar = () => {
    const menuOpen = useIsOpenStore()
  return (
    <div className="fixed inset-0">
        <div className="bg-base-100">
            <div className="flex md:hidden justify-between items-center py-6 pl-4 pr-2">
              <div className="text-4xl font-extrabold w-1/2">
                <span className="cursor-pointer">J.P</span>
              </div>
              <div className="w-1/2 flex justify-end">
                <span className="btn btn-circle btn-ghost" onClick={() => menuOpen.setIsOpen()}>{menu}</span>
              </div>
            </div>
             <AnimatePresence initial={false}>
                 {menuOpen.isOpen && (
                    <SidebarMobile/>
                 )}
             </AnimatePresence>
        </div>
    </div>
  )
}
