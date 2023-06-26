
interface SkillsProps {
  className?:string
}

export const Skills: React.FC<SkillsProps> = ({
    className
 }) => {
  return (
    <div className="bg-red-200 max-w-7xl min-h-screen flex w-full flex-col">
        <section className={`${className} bg-yellow-200 w-full`}>
        About

        </section>
    </div>
  )
}
