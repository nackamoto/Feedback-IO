import { useProps } from "@/context/app-theme";
import { useRouter } from "next/navigation";

export interface RoadmapProps {
    [x: string]: any;
    id: number,
    status: string,
    upvotes: number,
    title: string,
    description: string,
    category: string,
    comment: string,
    isToggled: boolean
}


export const RoadmapPage = ({id, upvotes, title, description, category, comment, status, isToggled}:RoadmapProps) => {

    const {datastore, setDatastore} = useProps();
    const router = useRouter()



    const Vote = (addORsub:boolean):void => {
        
        
        const upvotePlusOne = datastore.map(ev => (id === ev.id ?
            {...ev, isToggled: !ev.isToggled, upvotes: addORsub ?  ev.upvotes - 1 : ev.upvotes + 1}:ev))
            
            setDatastore(upvotePlusOne)

        }


        let STATUS:string = status;
        let class_border_t:string = ""
        let class_bg:string = ""

        switch(STATUS){
            case 'planned':
                STATUS =  "Planned";
                class_border_t = "border-xOrange-300"
                class_bg = 'bg-xOrange-300'
                break;

            case 'in-progress':
                STATUS = "In-Progress";
                class_border_t = "border-xFuchisia-600";
                class_bg = 'bg-xFuchisia-600'
                break;

            case 'live':        
                STATUS = "Live";
                class_border_t = "border-xBlue-400";
                class_bg = 'bg-xBlue-400'
                break;
        }


    return (
    <div className={`flex flex-col p-8 bg-white border-t-4  ${class_border_t} rounded-lg`}>
        <div className="flex flex-row items-center space-x-4 mb-2">
            <span className={`h-2 w-2 rounded-full ${class_bg}`}></span>
            <span className="flex-1 font-normal text-13x desktop:text-16x text-xSlate-500">{STATUS}</span>
        </div>
        <div className="mb-4">
            <h1 onClick={() => router.push(`/detail/${id}`)} className="leading-26 tracking-closer font-bold text-13x desktop:text-18x text-xSlate-600 cursor-pointer hover:text-xIndigo-600">{title}</h1>
            <p className="text-13x desktop:text-16x font-normal text-xSlate-500">{description}</p>
        </div>
        <div className="flex flex-row items-center mb-4">
            <span className="rounded-lg text-center bg-xSiolet-50">
                <h5 className="text-xIndigo-600 font-semibold text-13x leading-19 py-1.5 px-4">{category}</h5>
            </span>
        </div>
        <div className="flex flex-row items-center">
            <div onClick={() => Vote(isToggled)}className="flex-1 flex items-center">
                <span  className={`${isToggled ? "bg-xIndigo-600": "bg-xSiolet-50 hover:bg-indigo-200"} flex items-center cursor-pointer px-4 py-1.5 desktop:py-2.5 rounded-xl`}>
                    <span>
                        <svg className={`${isToggled ? "stroke-white": "stroke-xIndigo-600"}`} width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                    </span>
                    <h1 className={` ${isToggled ? "text-white": "text-xSlate-600"} ml-2 font-bold text-13x desktop:text-15x leading-19 tracking-close`}>{upvotes}</h1>
                </span>
            </div>

            <span className="flex space-x-2 items-center">
                <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" fill="#CDD2EE" fillRule="nonzero"/></svg>
                <h1 className="leading-26 tracking-closer font-bold text-xSlate-600 text-13x desktop:text-15x">{comment}</h1>
            </span>
        </div>
    </div>

    );
}