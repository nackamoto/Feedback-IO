import { RoadmapCard } from "@/components/roadmap/roadmap-card";

export default function Roadmap(){

    const GenerateCards = () =>{
        const cards: any[] = [];
        for(let i = 1; i <= 8; i++){
            cards.push(
                    <RoadmapCard key={i}/>
                );
        }

        return cards;
    }

    
    return (
        <main className="flex flex-col pt-0 px-0 pb-24 tablet:pt-14 tablet:px-10 tablet:pb-28 desktop:px-40 desktop:pt-20 desktop:pb-20 space-y-0 tablet:space-y-12 h-screen w-screen overflow-auto">
            <header className="flex flex-row bg-xSlate-700 px-8 py-6 rounded-none tablet:rounded-xl">
                <div className="flex-1 flex flex-col text-white">
                    <button className="flex items-center hover:underline hover:decoration-white">
                        <span className="-mt-1">
                            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#CDD2EE" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                        </span>
                        <span className='ml-4 leading-20 tracking-close text-14x font-bold mb-1'>Go Back</span>
                    </button>

                    <h1 className="leading-35 tracking-closest font-bold text-24x">Roadmap</h1>

                </div>

                <button className="flex items-center bg-xFuchisia-600 hover:bg-fuchsia-500 hover:cursor-pointer  rounded-lg">
                    <h2 className="font-bold text-14x text-xSiolet-50 leading-20 tracking-closest px-6 py-3">+ Add Feedback</h2>
                </button>
            </header>

            <section className="mobile:hidden flex-1 tablet:flex overflow-hidden space-x-8">

                <div className="flex flex-col w-1/3">
                    <span className="mb-8 relative">
                        <h1 className="font-bold text-14x desktop:text-18x leading-26 tracking-closer text-xSlate-600">Planned (4)</h1>
                        <p className="font-normal text-14x desktop:text-16x text-xSlate-500">Ideas prioritized for research</p>
                    </span>

                    <div className="flex flex-col space-y-6 overflow-y-auto">
                        {GenerateCards()}
                    </div>
                </div>

                <div className="flex flex-col  w-1/3">
                    <span className="mb-8 relative">
                        <h1 className="font-bold text-14x desktop:text-18x leading-26 tracking-closer text-xSlate-600">In-Progress (3)</h1>
                        <p className="font-normal text-14x desktop:text-16x text-xSlate-500">Currently being developed</p>
                    </span>

                    <div className="flex flex-col space-y-6  overflow-y-auto">
                        {GenerateCards()}
                    </div>
                </div>

                <div className="w-1/3 flex flex-col">
                    <span className="mb-8">
                        <h1 className="font-bold text-14x desktop:text-18x leading-26 tracking-closer text-xSlate-600">Live (1)</h1>
                        <p className="font-normal text-14x desktop:text-16x text-xSlate-500">Released features</p>
                    </span>

                    <div className="flex flex-col space-y-6 overflow-y-auto">
                        {GenerateCards()}
                    </div>
                </div>

            </section>


            <nav className="flex border-b tablet:hidden">
                <ul className="flex-1 flex text-13x text-xSlate-500 font-bold tracking-close">
                    <li className="flex-1 hover:border-b-2 py-5 border-xFuchisia-600 hover:text-xSlate-600">
                        <h5 className="text-center">Planned (4)</h5>
                    </li>
                    <li className="flex-1 hover:border-b-2 py-5 border-xFuchisia-600 hover:text-xSlate-600">
                        <h5 className="text-center">In-Progress (2)</h5>
                    </li>
                    <li className="flex-1 hover:border-b-2 py-5 border-xFuchisia-600 hover:text-xSlate-600">
                        <h5 className="text-center">Live (4)</h5>
                    </li>
                    
                </ul>
            </nav>


            <div className="flex px-6 pt-6 flex-col tablet:hidden overflow-hidden">
                <span className="relative mb-8">
                    <h1 className="font-bold text-18x leading-26 tracking-closer text-xSlate-600">Live (1)</h1>
                    <p className="font-normal text-16x text-xSlate-500">Released features</p>
                </span>

                <div className="flex flex-col space-y-6 overflow-y-auto">
                    {GenerateCards()}
                </div>
            </div>




        </main>

    );
}