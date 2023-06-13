import { useProps } from "@/context/app-theme";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export interface sugProps {
  [x: string]: any;
  id:number,
  key?:any;
  title: string,
  description: string,
  upvotes:number,
  category: string,
  comment?: number,
  status:string,
  isToggled: boolean
}


export const CardTabletPlus = ({id, upvotes, title, description, category, comment, isToggled}:sugProps) =>{

  const {datastore, setDatastore} = useProps();
  const router = useRouter();




const Vote = (addORsub:boolean):void => {


    const upvotePlusOne = datastore.map(ev => (id === ev.id ?
       {...ev, isToggled: !ev.isToggled, upvotes: addORsub ?  ev.upvotes - 1 : ev.upvotes + 1}:ev))

    setDatastore(upvotePlusOne)
  }



    return (
      <div className="px-8 py-7 bg-white hover:cursor-pointer rounded-lg">
        <div className="flex flex-row">
          <div>
            <div onClick={() => Vote(isToggled)}  className={`${isToggled ? "bg-xIndigo-600": "bg-xSiolet-50 hover:bg-indigo-200"} shrink-0 flex cursor-pointer px-3 pb-2 pt-3.5  rounded-xl`}>
              <div className={`flex flex-col items-center`}>
                <span>
                  <svg className={`h-2 w-2 ${isToggled ? "stroke-white": "stroke-xIndigo-600"}`} viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4"  strokeWidth="2"/></svg>
                </span>
                <h1 className={`${isToggled ? "text-white": "text-xSlate-600"} font-bold text-15x  leading-35 tracking-closest`}>{upvotes}</h1>
              </div>
            </div>
          </div>
          <div onClick={() => router.push(`/details/${id}`)} className="ml-10 flex-1 flex flex-col">
              <h3 className='leading-26 tracking-closer text-xSlate-600 hover:text-xIndigo-600 text-26x font-bold'>{title}</h3>
              <p className="mt-1 mb-3 text-16x font-normal text-xSlate-500 leading-23">{description}</p>

              <div className="flex items-start">
                <span className="bg-xSiolet-50 rounded-xl text-xIndigo-600 text-13x font-semibold">
                  <h6 className="px-4 py-2">{category}</h6>
                </span>
              </div>
          </div>
          <div className="flex flex-row space-x-2 items-center">
            <span>
              <svg className="h-4 w-5 fill-slate-300" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" /></svg>
            </span>
            <span className="text-16x font-bold text-xSlate-600">{comment}</span>
          </div>
        </div>
      </div>
    );
}

