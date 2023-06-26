import { AboutIcon, call, close, email, fire, library, location, puzzle } from "../lib/icons"
import { useIsOpenStore } from "../store/useIsOpenStore"
import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { ButtonNav } from "./ButtonNav";
export const SidebarMobile = () => {
    const menuOpen = useIsOpenStore()
    const refMenu = useRef<HTMLDivElement>(null)
    const dragX = useMotionValue(0)
    let dragStartX = 0
    const handleDragStart = (event:any,info:any) => {
        dragStartX = info.point.x
    }
    const handleDragEnd = (event:any,info:any) => {
        const dragThreshold = refMenu.current?.offsetWidth
        const dragDistance = info.point.x - dragStartX

        if (dragDistance > (dragThreshold! - 230)) {
            menuOpen.setIsOpen()
        }else{
            dragX.set(0)
        }
    }
  return (

        <motion.div className="fixed md:hidden w-full bg-black/25 h-screen left-0 top-0 z-10" onClick={() => menuOpen.setIsOpen()} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{type:"tween", ease:'easeInOut'}}>
           <motion.div
                ref={refMenu}
                className="bg-base-100 absolute right-0 top-0 w-[90%] h-screen px-1 py-6 flex flex-col items-start"
                onClick={(e) => e.stopPropagation()}
                initial={{
                    x:1000
                }}
                animate={{
                    x:0
                }}
                exit={{
                    x:1000
                }}
                transition={{
                    duration:0.3,
                    type:"tween",
                    ease:'easeInOut'
                }}
                drag="x"
                dragElastic={{
                    left:0,
                    right:0.5
                }}
                dragConstraints={{
                    left:0,
                    right:0
                }}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                style={{
                    x:dragX.get()
                }}

            >
                <div className="flex justify-end mb-12 w-full" >
                    <span className="btn btn-circle btn-ghost" onClick={() => menuOpen.setIsOpen()}>{close}</span>
                </div>
               <div className="space-y-4 flex w-full flex-col flex-grow">
                    <ButtonNav text="About"  textPosition="right"/>
                    <ButtonNav text="Skills"   textPosition="right"/>
                    <ButtonNav text="Experience"  textPosition="right"/>
                    <ButtonNav text="Education & Certificate" textPosition="right"/>
               </div>
               <div className="w-full flex items-center justify-center space-x-10">
                    <div className="btn btn-circle btn-ghost">{email}</div>
                    <div className="btn btn-circle btn-ghost">{call}</div>
                    <div className="btn btn-circle btn-ghost">{location}</div>
              </div>
           </motion.div>
        </motion.div>

  )
}
