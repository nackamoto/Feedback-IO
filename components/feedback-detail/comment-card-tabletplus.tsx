import Image from "next/image";

export default function CommentCardTabletplus(){
    return (
    <div className="relative ml-6 py-8">           
        <ol className="border-l border-l-slate-100">

            <div className="flex relative">
                <span className="absolute -ml-5  bg-white ring-8 rounded-full ring-white">
                    <Image className="bg-white rounded-full mb-4" width={40} height={40} alt="Elijah" src={`/assets/user-images/image-elijah.jpg`} />
                </span>                            
                <li className="flex flex-col">
                    <div className="flex ml-20">
                        <span className="flex-1">
                            <h4 className="font-bold leading-20 tracking-close text-14x text-xSlate-600">Elijah Moss</h4>
                            <p className="text-14x font-normal text-xSlate-500">@hexagon.pentagon</p>
                        </span>
                        <h6 className="font-semibold text-13x leading-19 cursor-pointer text-xIndigo-600 hover:underline hover:decoration-xIndigo-600">Reply</h6>                                
                    </div>                            

                    <p className="ml-10 mb-6 mt-4 leading-22 text-15x text-xSlate-500 font-normal"> 
                        Also, please allow styles to be applied based on system preferences. 
                        I would love to be able to browse Frontend Mentor in the evening after my device’s dark 
                        mode turns on without the bright background it currently has.
                    </p>

                {/* reply start */}

                    <div className="flex justify-between space-x-4">
                        <div className="flex-1 h-20 rounded-md mb-2 pl-14">
                            <textarea id="message" rows={4} className="resize-none w-full h-full placeholder-slate-400  text-15x bg-xSiolet-50 rounded-xl px-6 py-4 outline-none focus:ring-xIndigo-600 focus:border focus:border-xIndigo-600 text-xSlate-600" placeholder="Type Your comment here"></textarea>
                        </div>

                        <div className="flex items-start">
                            <button className='flex px-6 py-3 bg-xFuchisia-600 hover:bg-fuchsia-500 rounded-lg'>
                                <span className="leading-20 tracking-close font-bold text-14x text-xSiolet-50">Post Reply</span>
                            </button>
                        </div>


                    </div>

                {/* reply end */}
            

                </li>


            </div>

            <ul className="flex flex-row py-8 pl-6">
                <span className="mr-8 shrink-0">
                    <Image className="rounded-full object-cover" width={40} height={40} alt="Elijah" src={`/assets/user-images/image-anne.jpg`} />
                </span>
                <div className="flex flex-col grow">

                    <div className=" flex flex-row justify-between items-center space-x-8">
                        <span className="flex-1 mb-4 items-center">
                            <h4 className="font-bold leading-20 tracking-close text-14x text-xSlate-600">Anne Valentine </h4>
                            <p className="text-14x font-normal text-xSlate-500">@annev1990</p>
                        </span>
                        <h6 className="font-semibold text-13x leading-19 text-xIndigo-600 cursor-pointer hover:underline hover:decoration-xIndigo-600">Reply</h6>

                    </div>

                    <p className="leading-22 text-15x text-xSlate-500 font-normal">
                        <span className="font-bold text-15x text-xFuchisia-600">@hummingbird1&nbsp;</span>
                        While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme” followed by your browser. 
                        There might be a need to turn off the extension for sites with naturally black backgrounds though.
                    </p>
                </div>                            
            </ul>                    



        </ol>

    </div>
    );
}