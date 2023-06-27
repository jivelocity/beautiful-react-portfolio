import { data } from "../static/data"
import { Divider } from "./Divider"


export const EduAndCertificate= () => {
    const title = data.educationCertificate.title
    const datas = data.educationCertificate.lists
  return (
    <div id="educations" className='max-w-7xl min-h-screen flex w-full flex-col p-4'>
       <Divider title={title}/>
       <div>
            <div className="grid lg:grid-cols-fluidCardExp gap-12 mt-12">
                {datas.map((data,i) => (
                    <div key={i} className="p-4 bg-white rounded shadow flex flex-col items-start w-full">
                        <div className="flex flex-col justify-center text-center w-full mb-4">
                            <h1 className="text-lg font-semibold">{data.school}</h1>
                            <p>{data.location}</p>
                        </div>
                        <p className="prose flex-grow">{data.description}</p>
                        <p className="text-end mt-3 w-full text-sm font-semibold">{data.degree}</p>
                    </div>
                ))}
            </div>
       </div>
    </div>
  )
}
