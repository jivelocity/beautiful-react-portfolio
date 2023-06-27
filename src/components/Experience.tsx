import { data } from "../static/data"
import { Divider } from "./Divider"

export const Experience= () => {
    const datas = data.experience.lists
    const title = data.experience.title

  return (
    <div id="experience" className='max-w-7xl flex w-full flex-col mb-12 p-4 '>
       <Divider title={title}/>
       <div className="grid md:grid-cols-fluidCardExp gap-12 mt-12">
           {datas.map((data,i) => (
                <div key={i} className=" bg-white rounded shadow">
                    <img className="rounded-t" src={data.image} alt={data.title} />
                    <div className="flex flex-col p-4">
                        <p className="text-xs">{data.duration}</p>
                        <div className="flex justify-between items-baseline mb-3">
                            <h1 className="text-lg font-semibold text-neutral">{data.title}</h1>
                            <p className="text-sm text-neutral-500 text-end">{data.type}</p>
                        </div>
                        <div className="flex items-baseline text-sm justify-between mb-2">
                            <p>{data.company}</p>
                            <p className="text-end">{data.location}</p>
                        </div>
                        <ul className="list-disc prose-ul:prose-neutral ml-4">
                        {data.achievements.map((item,i) => (
                            <li key={i} className="prose-li:prose-neutral">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

           ))}
       </div>
    </div>
  )
}
