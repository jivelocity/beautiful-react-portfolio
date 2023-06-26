import { create } from "zustand";
import { persist } from "zustand/middleware";

interface useIsOpenStoreProps {
  isOpen: boolean
  setIsOpen: () => void
}
export const useIsOpenStore = create<useIsOpenStoreProps>()(
    persist(
        (set) => ({
            isOpen:false,
            setIsOpen: () => set((state) => ({
                isOpen:!state.isOpen
            }))
        }),
        {name:"open-menu",}
    )
)
