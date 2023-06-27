import { motion,AnimatePresence } from "framer-motion";
import { data } from "../static/data";
export const Marquee = () => {
    const skills = data.skills.lists
    return (

          <AnimatePresence>
              <div className="w-full -z-10 flex justify-center items-center">
                  <div className="flex max-w-[1200px] w-full relative overflow-hidden select-none ">
                          <div>
                              <motion.div
                                   animate={{
                                      x:["0%","-100%"],
                                  }}
                                  transition={{
                                      repeat: Infinity,
                                      duration:20,
                                      type:"tween",
                                      ease:"linear"
                                  }}
                              >
                                  <div
                                      className="flex-shrink-0 w-full flex items-center whitespace-nowrap space-x-12"
                                      >
                                      {skills.map((skill) => (
                                      <div key={skill.name} className="grid grid-cols-fluidSkills first:ml-12 ">
                                          <div className="flex items-center justify-between bg-white rounded p-2 ">
                                            <img src={skill.icon} alt={skill.name} />
                                            <h1 className="text-center w-full">{skill.name}</h1>
                                          </div>
                                      </div>
                                      ))}
                                  </div>
                              </motion.div>
                          </div>
                          <div>
                              <motion.div
                                   animate={{
                                      x:["0%","-100%"],
                                  }}
                                  transition={{
                                      repeat: Infinity,
                                      duration:20,
                                      type:"tween",
                                      ease:"linear"
                                  }}
                              >
                                  <div
                                      className="flex-shrink-0 w-full flex items-center whitespace-nowrap space-x-12"
                                      >
                                      {skills.map((skill) => (
                                      <div key={skill.name} className="grid grid-cols-fluidSkills first:ml-12 ">
                                          <div className="flex items-center justify-between bg-white rounded p-2 ">
                                            <img src={skill.icon} alt={skill.name} />
                                            <h1 className="text-center w-full">{skill.name}</h1>
                                          </div>
                                      </div>
                                      ))}
                                  </div>
                              </motion.div>
                          </div>
                          <div>
                              <motion.div
                                   animate={{
                                      x:["0%","-100%"],
                                  }}
                                  transition={{
                                      repeat: Infinity,
                                      duration:20,
                                      type:"tween",
                                      ease:"linear"
                                  }}
                              >
                                  <div
                                      className="flex-shrink-0 w-full flex items-center whitespace-nowrap space-x-12"
                                      >
                                      {skills.map((skill) => (
                                      <div key={skill.name} className="grid grid-cols-fluidSkills first:ml-12 ">
                                          <div className="flex items-center justify-between bg-white rounded p-2 ">
                                            <img src={skill.icon} alt={skill.name} />
                                            <h1 className="text-center w-full">{skill.name}</h1>
                                          </div>
                                      </div>
                                      ))}
                                  </div>
                              </motion.div>
                          </div>
                          <div className="absolute inset-0" style={{backgroundImage:'linear-gradient(to right, #FAF7F5 10%, transparent 30%, transparent 70% , #FAF7F5 90%)'}}></div>
                  </div>
              </div>
          </AnimatePresence>
    )
  }
