import { About } from "./About"
import { Skills } from "./Skills"

export const Contents = () => {
  return (
    <div className={`lg:w-[calc(100%-366px)] md:w-[calc(100%-306px)] w-full bg-green-200 md:ml-auto flex items-center flex-col pt-24 md:pt-0`}>
            <About/>
            <Skills/>
    </div>
  )
}
