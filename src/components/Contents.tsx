import { About } from "./About"
import { EduAndCertificate } from "./EduAndCertificate"
import { Experience } from "./Experience"
import { Skills } from "./Skills"

export const Contents = () => {
  return (
    <div className={`lg:w-[calc(100%-366px)] md:w-[calc(100%-306px)] w-full md:ml-auto flex items-center flex-col pt-24 md:pt-0`}>
            <About/>
            <Skills/>
            <Experience/>
            <EduAndCertificate/>
    </div>
  )
}
