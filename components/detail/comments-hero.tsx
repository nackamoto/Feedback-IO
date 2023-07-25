import { useProps } from "@/context/app-theme";


export const Detail = ({id}:{id:string}) => {

    const {setDatastore, datastore} = useProps()

    const Vote = (addORsub:boolean):void => {


        const upvotePlusOne = datastore.map(ev => (id === ev.id.toString() ?
           {...ev, isToggled: !ev.isToggled, upvotes: addORsub ?  ev.upvotes - 1 : ev.upvotes + 1}:ev))
    
        setDatastore(upvotePlusOne)
      }

    return (
        <>

            {
                datastore.filter(e => e.id.toString() === id).map((obj, i) => {
                        const {upvotes, title, description, category, comments, isToggled} = obj;

                    return (
                        <div key={i}>
                        
                            <header className="hidden tablet:block px-8 py-7 bg-white hover:cursor-pointer rounded-lg">
                                <div className="flex flex-row">
                                    <div className="flex items-start">
                                        <div className={`${isToggled ? "bg-xIndigo-600": "bg-xSiolet-50 hover:bg-indigo-200"} flex-none flex  pb-2 px-3 pt-3.5 cursor-pointer rounded-xl`}>
                                            <div onClick={() => Vote(isToggled)} className="flex flex-col items-center">
                                                <span>
                                                    <svg className={`${isToggled ? 'stroke-white': 'stroke-xIndigo-600'} h-2 w-2 `} viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4"  strokeWidth="2"/></svg>
                                                </span>
                                                <h1 className={`${isToggled ? "text-white": "text-xSlate-600"} font-bold text-13x  leading-35 tracking-closest`}>{upvotes}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ml-10 flex-1 flex flex-col">
                                        <h3 className='leading-26 tracking-closer text-xSlate-600 text-18x font-bold'>{title}</h3>
                                        <p className="mt-1 mb-3 text-16x font-normal text-xSlate-500 leading-23 truncate">{description}</p>
        
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
                                        <span className="text-13x font-bold text-xSlate-600">{comments ? comments.length: 0}</span>
                                    </div>
                                </div>
                            </header>    

                            <header className="px-6 py-6 bg-white rounded-lg flex flex-col tablet:hidden">
                                <h3 className='leading-26 mb-2 tracking-closer text-xSlate-600 text-13x font-bold'>{title}</h3>
                                <p className="mt-1 mb-2.5 text-13x font-normal text-xSlate-500 leading-23 break-words">{description}</p>
                                <div className="flex items-start mb-3.5">
                                    <span className="bg-xSiolet-50 rounded-xl text-xIndigo-600 text-13x font-semibold">
                                        <h6 className="px-4 py-2">{category}</h6>
                                    </span>
                                </div>

                                <div className="flex justify-between items-center">

                                    <div className={`${isToggled ? "bg-xIndigo-600": "bg-xSiolet-50 hover:bg-indigo-200"} flex-none flex  px-4 py-1.5 cursor-pointer rounded-xl`}>
                                        <div onClick={() => Vote(isToggled)} className="flex items-center">
                                            <span>
                                                <svg className={`${isToggled ? 'stroke-white': 'stroke-xIndigo-600'} h-2 w-2 `} viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4"  strokeWidth="2"/></svg>
                                            </span>
                                            <h1 className={`${isToggled ? 'text-white': 'text-xSlate-600'} font-bold text-13x  tracking-closest ml-4`}>{upvotes}</h1>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-2 items-center">
                                            <span>
                                                <svg className="h-4 w-5 fill-slate-300" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" /></svg>
                                            </span>
                                            <span className="text-13x font-bold text-xSlate-600">{comments?.length}</span>
                                    </div>


                                </div>
                            </header>
                        </div>
                    );
                })
            }
        </>
    );
}