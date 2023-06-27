import { AboutIcon,fire, call, close, email, location, puzzle, library } from "../lib/icons"
import { useIsOpenStore } from "../store/useIsOpenStore"
import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { ButtonNav } from "./ButtonNav";
import { data } from "../static/data";
import { toast } from "react-hot-toast";


export const SidebarMobile = () => {
    const menuOpen = useIsOpenStore()
    const contact = data.contact
    const refMenu = useRef<HTMLDivElement>(null)
    const dragX = useMotionValue(0)
    let dragStartX = 0
    const handleDragStart = (event:any,info:any) => {
        event
        dragStartX = info.point.x
    }
    const handleDragEnd = (event:any,info:any) => {
        event
        const dragThreshold = refMenu.current?.offsetWidth
        const dragDistance = info.point.x - dragStartX

        if (dragDistance > (dragThreshold! - 230)) {
            menuOpen.setIsOpen()
        }else{
            dragX.set(0)
        }
    }


    const handleCopy = (text:string) => {
        navigator.clipboard.writeText(text);
        toast.success('Copied')
    }

  return (

        <motion.div className="fixed md:hidden w-full bg-black/25 h-screen left-0 top-0 " onClick={() => menuOpen.setIsOpen()} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{type:"tween", ease:'easeInOut'}}>
           <motion.div
                ref={refMenu}
                className="bg-base-100 absolute right-0 top-0 w-[90%] h-screen pr-2 pl-4 py-6 flex flex-col items-start z-20 text-neutral "
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

                        <ButtonNav icon={AboutIcon} to="/#about" text="About"  textPosition="right"/>

                        <ButtonNav icon={fire} to="/#skills" text="Skills" textPosition="right"/>

                        <ButtonNav icon={puzzle} to="/#experience" text="Experience"  textPosition="right"/>

                        <ButtonNav icon={library} to="/#educations" text="Education & Certificate" textPosition="right"/>

               </div>
               <div className="w-full flex flex-col items-end justify-center space-x-10">
                <div className="flex items-center space-x-2">
                    <h1>{contact.email}</h1>
                    <div onClick={() => handleCopy(contact.email)} className="btn btn-circle btn-ghost">{email}</div>
                </div>
                <div className="flex items-center space-x-2">
                    <h1>{contact.phone}</h1>
                    <div onClick={() => handleCopy(contact.phone)} className="btn btn-circle btn-ghost">{call}</div>
                </div>
                <div className="flex items-center space-x-2">
                    <h1>{contact.address}</h1>
                    <div onClick={() => handleCopy(contact.address)} className="btn btn-circle btn-ghost">{location}</div>
                </div>
              </div>
           </motion.div>
        </motion.div>

  )
}
