import { data } from "../static/data"

export const About = () => {
    const intro = data.intro
  return (
    <div id="about" className='max-w-7xl flex w-full flex-col mb-12'>
        <section className='w-full md:px-0 flex py-16 lg:py-20 lg:my-16 md:py-16 md:my-10 relative -z-30'>
            <div className="md:w-1/2 w-full flex lg:justify-center lg:items-center items-end">
               <div className="absolute lg:static -bottom-6 -z-10 bg-base-200 d lg:bg-transparent p-4">
                    <h1 className="md:text-7xl text-5xl font-extrabold max-w-md">{intro.name}</h1>
                    <h4 className="md:text-xl text-base text-neutral/70 mt-2">{intro.title}</h4>
                    <p className="text-base whitespace-pre-line max-w-sm leading-relaxed mt-1">{intro.summary}</p>
               </div>
            </div>
            <div className="md:w-1/2 w-full flex justify-center items-center px-4 md:pr-4">
                <div className="w-[300px] h-[456px] relative -z-20">
                    <img className="absolute object-cover min-h-[456px] w-full" src={intro.pic} alt="profile" />
                </div>
            </div>
        </section>
    </div>
  )
}
