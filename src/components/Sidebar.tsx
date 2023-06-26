import { ButtonNav } from "./ButtonNav"
import { AboutIcon, call, email, fire, library, puzzle,location } from "../lib/icons";

export const Sidebar= () => {
  return (
    <div className={`lg:w-[366px] fixed min-h-screen bg-base-100 px-4 py-6 border-r md:flex flex-col items-start hidden `}>
       <div className="text-4xl font-extrabold text-center w-full my-10 cursor-pointer">J.P</div>
       <div className="space-y-4 flex-grow w-full">
           <ButtonNav text="About" icon={AboutIcon}/>
           <ButtonNav text="Skills" icon={fire}/>
           <ButtonNav text="Experience" icon={puzzle}/>
           <ButtonNav text="Education & Certificate" icon={library}/>
       </div>
       <div className="w-full flex items-center justify-center space-x-10">
            <div className="btn btn-circle btn-ghost">{email}</div>
            <div className="btn btn-circle btn-ghost">{call}</div>
            <div className="btn btn-circle btn-ghost">{location}</div>
       </div>
    </div>
  )
}
