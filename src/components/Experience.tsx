
interface ExperienceProps {
  className?:string
}

export const Experience: React.FC<ExperienceProps> = ({
    className
 }) => {
  return (
    <div className={`${className}`}>
     Experience
    </div>
  )
}
