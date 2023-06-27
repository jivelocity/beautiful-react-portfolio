
interface DividerProps {
title:string
}

export const Divider: React.FC<DividerProps> = ({
    title
 }) => {
  return (
    <>
        <div className="flex flex-col w-full border-opacity-50">
            <div className="divider after:bg-base-200 before:bg-base-200 text-lg font-medium text-neutral">{title}</div>
        </div>
    </>
  )
}
