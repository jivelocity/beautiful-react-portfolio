import { data } from "../static/data"
import {Divider} from "./Divider"
import { Marquee } from "./Marquee"

export const Skills = () => {
    const title = data.skills.title
  return (
        <div id="skills" className=" max-w-7xl py-14 flex w-full flex-col items-center ">
                <Divider title={title}/>
            <div className="w-full flex flex-col justify-center items-center mt-12">
                <Marquee/>
            </div>
        </div>
  )
}
