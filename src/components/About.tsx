import { data } from "../static/data"
interface AboutProps {
  className?:string
}
export const About: React.FC<AboutProps> = ({
    className
}) => {
    const intro = data.intro
  return (
    <div className={` ${className} bg-red-200 max-w-7xl min-h-screen flex w-full flex-col`}>
        <section className={`bg-yellow-200 w-full px-4 md:px-0 flex pt-16 lg:py-20 lg:mt-16 md:py-16 md:mt-10`}>
            <div className="bg-teal-200 w-1/2 flex flex-col justify-center items-center">
               <div className="bg-red-200 w-full">
                    <h1 className="text-7xl font-extrabold">{intro.name}</h1>
                    <h4 className="text-xl text-neutral/70">{intro.title}</h4>
                    <p className="text-base whitespace-pre-line leading-5">{intro.summary}</p>
               </div>
            </div>
            <div className="bg-orange-200 w-1/2 flex justify-center items-center">
                <img src={intro.pic} alt="profile" />
            </div>
        </section>
    </div>
  )
}
