'use client'

import { RoadmapPage, RoadmapProps } from "@/components/roadmap/roadmap-page";
import { useProps } from "@/context/app-theme";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Roadmap(){

    const {datastore, statics: {nLive, nProgress, nPlanned}} = useProps()
    const router = useRouter()

    const [mobileView, setMobileView] = useState<{currentView: string, heading: string, description: string, count:number}>({
        currentView:'planned',
        heading: 'Planned',
        description: 'Ideas prioritized for research',
        count: nPlanned
    });


    const  SprintsFor = (value:any) => {

        const cards:JSX.Element = datastore.map((card:RoadmapProps, i:number) => card.status === value ? 

                <RoadmapPage key={i}
                    id={card.id}
                    upvotes={card.upvotes} 
                    title={card.title} 
                    description={card.description} 
                    category={card.category} 
                    comment={card.comments ? card.comments.length : 0}
                    status={card.status}
                    isToggled={card.isToggled}

                />   
                : null
                
            
        )
        return cards 
    }    

    function SwitchViewTo(newView:string){

        
        switch(newView){
            case 'planned':
                setMobileView({currentView:'planned', heading: 'Planned', description: 'Ideas prioritized for research', count: nPlanned})
                    break;
            case 'in-progress':
                setMobileView({currentView:'in-progress', heading: 'In-Progress', description: 'Currently being developed', count: nProgress})
                    break;
            case 'live':
                setMobileView({currentView:'live', heading: 'Live', description: 'Released features', count: nLive})
                    break;
            }

    }
    
    return (
        <main className="flex flex-col pt-0 px-0 pb-24 tablet:pt-14 tablet:px-10 tablet:pb-28 desktop:px-40 desktop:pt-20 desktop:pb-20 space-y-0 tablet:space-y-12 h-screen w-screen overflow-auto">
            <header className="flex flex-row bg-xSlate-700 px-8 py-6 rounded-none tablet:rounded-xl">
                <div className="flex-1 flex flex-col text-white">
                    <button onClick={() => router.back()} className="flex items-center hover:underline hover:decoration-white">
                        <span className="-mt-1">
                            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#CDD2EE" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                        </span>
                        <span className='ml-4 leading-20 tracking-close text-14x font-bold mb-1'>Go Back</span>
                    </button>

                    <h1 className="leading-35 tracking-closest font-bold text-24x">Roadmap</h1>

                </div>

                <button onClick={() => router.push("/add")} className="flex items-center bg-xFuchisia-600 hover:bg-fuchsia-500 hover:cursor-pointer  rounded-lg">
                    <h2 className="font-bold text-14x text-xSiolet-50 leading-20 tracking-closest px-6 py-3">+ Add Feedback</h2>
                </button>
            </header>

            <section className="mobile:hidden flex-1 tablet:flex overflow-hidden space-x-8">

                <div className="flex flex-col w-1/3">
                    <span className="mb-8 relative">
                        <h1 className="font-bold text-14x desktop:text-18x leading-26 tracking-closer text-xSlate-600">Planned&nbsp;({nPlanned})</h1>
                        <p className="font-normal text-14x desktop:text-16x text-xSlate-500">Ideas prioritized for research</p>
                    </span>

                    <div className="flex flex-col space-y-6 overflow-y-auto">
                        {SprintsFor("planned")}
                    </div>
                </div>

                <div className="flex flex-col  w-1/3">
                    <span className="mb-8 relative">
                        <h1 className="font-bold text-14x desktop:text-18x leading-26 tracking-closer text-xSlate-600">In-Progress&nbsp;({nProgress})</h1>
                        <p className="font-normal text-14x desktop:text-16x text-xSlate-500">Currently being developed</p>
                    </span>

                    <div className="flex flex-col space-y-6  overflow-y-auto">
                        {SprintsFor("in-progress")}
                    </div>
                </div>

                <div className="w-1/3 flex flex-col">
                    <span className="mb-8">
                        <h1 className="font-bold text-14x desktop:text-18x leading-26 tracking-closer text-xSlate-600">Live&nbsp;({nLive})</h1>
                        <p className="font-normal text-14x desktop:text-16x text-xSlate-500">Released features</p>
                    </span>

                    <div className="flex flex-col space-y-6 overflow-y-auto">
                        {SprintsFor("live")}
                    </div>
                </div>

            </section>


            <nav className="flex border-b tablet:hidden">
                <ul className="flex-1 flex text-13x text-xSlate-500 font-bold tracking-close">
                    <li onClick={() => SwitchViewTo("planned")} className={`${mobileView.currentView === 'planned' ? "border-b-2 border-xFuchisia-600 text-xSlate-600":"" } flex-1  py-5`}>
                        <h5 className="text-center">Planned&nbsp;({nPlanned})</h5>
                    </li>
                    <li onClick={() => SwitchViewTo("in-progress")} className={`${mobileView.currentView === 'in-progress' ? "border-b-2 border-xFuchisia-600 text-xSlate-600":"" } py-5 flex-1`}>
                        <h5 className="text-center">In-Progress&nbsp;({nProgress})</h5>
                    </li>
                    <li onClick={() => SwitchViewTo("live")} className={`${mobileView.currentView === 'live' ? "border-b-2 border-xFuchisia-600 text-xSlate-600":"" } flex-1 py-5  hover:`}>
                        <h5 className="text-center">Live&nbsp;({nLive})</h5>
                    </li>
                    
                </ul>
            </nav>


            <div className="flex px-6 pt-6 flex-col tablet:hidden overflow-hidden">
                <span className="relative mb-8">
                    <h1 className="font-bold text-18x leading-26 tracking-closer text-xSlate-600">{mobileView.heading}&nbsp;({mobileView.count})</h1>
                    <p className="font-normal text-16x text-xSlate-500">{mobileView.description}</p>
                </span>

                <div className="flex flex-col space-y-6 overflow-y-auto">
                    {SprintsFor(mobileView.currentView)}
                </div>
            </div>




        </main>

    );
}