import { ButtonNav } from "./ButtonNav"
import { AboutIcon, call, email, fire, library, puzzle,location } from "../lib/icons";
import { data } from "../static/data";
import toast from "react-hot-toast";

export const Sidebar= () => {
    const intro = data.intro
    const contact = data.contact


    const handleCopy = (text:string) => {
        navigator.clipboard.writeText(text);
        toast.success('Copied')
    }

  return (
    <div className={`lg:w-[366px] md:w-[306px] fixed min-h-screen bg-base-100 px-4 py-6 border-r-2 border-base-200 md:flex flex-col items-start hidden w-full `}>
       <div className="text-4xl font-extrabold text-center w-full my-10 cursor-pointer">{intro.logoName}</div>
       <div className="flex flex-col space-y-4 flex-grow w-full">

            <ButtonNav to='/#about' text="About" icon={AboutIcon}/>

            <ButtonNav to='/#skills' text="Skills" icon={fire}/>

            <ButtonNav to='/#experience' text="Experience" icon={puzzle}/>

            <ButtonNav to='/#educations' text="Education & Certificate" icon={library}/>

       </div>
       <div className="w-full flex flex-col justify-center space-y-2">
            <div className="flex items-center space-x-2">
                <div onClick={() => handleCopy(contact.email)} className="btn btn-circle btn-ghost">{email}</div>
                <h1>{contact.email}</h1>
            </div>
            <div className="flex items-center space-x-2">
                <div onClick={() => handleCopy(contact.phone)} className="btn btn-circle btn-ghost">{call}</div>
                <h1>{contact.phone}</h1>
            </div>
            <div className="flex items-center space-x-2">
                <div onClick={() => handleCopy(contact.address)} className="btn btn-circle btn-ghost">{location}</div>
                <h1>{contact.address}</h1>
            </div>
       </div>

    </div>
  )
}
