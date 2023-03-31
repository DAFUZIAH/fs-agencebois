export default function ProjectContent({ name, img, category, date, lieu }){
    return (
        <div className="project-item opacity-0 flex flex-col-reverse md:flex-col-reverse md:items-end lg:flex-row md:flex-wrap justify-end w-full translate-x-20 gap-x-8">
        <div className="flex justify-first items-end flex-col-reverse">
            <h3 className="font-bold text-xl md:text-3xl lg:text-4xl">➔</h3>
            {/* <p>{lieu}</p>
            <h4 className="">{date}</h4> */}
        </div>
        <img className="project-image md:max-w-3/4 lg:max-w-1/2" src={`img/${img}`} alt="" />
    </div>
    )
}