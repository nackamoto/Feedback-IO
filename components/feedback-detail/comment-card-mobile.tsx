import Image from "next/image";

export const CommentCardMobile = () =>{
    return (

    <div className="flex flex-col py-6">

        <div className="flex items-center pb-6">
            <Image className='rounded-full mr-6' src={`/assets/user-images/image-elijah.jpg`} alt="Elijah Moss" width={40} height={40} />
            <span className="flex-1">
                <h4 className="font-bold leading-20 tracking-close text-13x text-xSlate-600">Elijah Moss</h4>
                <p className="text-13x font-normal text-xSlate-500">@hexagon.pentagon</p>
            </span>
            <h6 className="font-semibold text-13x leading-19 cursor-pointer text-xIndigo-600 hover:underline hover:decoration-xIndigo-600">Reply</h6>                                

        </div>

        <p className="leading-22 text-13x text-xSlate-500 font-normal pb-6">
            While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme” followed by your browser. 
            There might be a need to turn off the extension for sites with naturally black backgrounds though.
        </p>

                    {/* reply start */}

                    <div className="flex justify-between space-x-4">
                            <div className="flex-1 h-20 rounded-md mb-2">
                                <textarea id="message" rows={4} className="resize-none w-full h-full placeholder-slate-400  text-13x bg-xSiolet-50 rounded-xl px-6 py-4 outline-none focus:ring-xIndigo-600 focus:border focus:border-xIndigo-600 text-xSlate-600" placeholder="Type Your reply here"></textarea>
                            </div>

                            <div className="flex items-start">
                                <button className='flex px-4 py-2 bg-xFuchisia-600 hover:bg-fuchsia-500 rounded-lg'>
                                    <span className="leading-20 tracking-close font-bold text-13x text-xSiolet-50">Post Reply</span>
                                </button>
                            </div>


                    </div>

                    {/* reply end */}                    
        



        <div className="flex flex-col py-6 pl-6 pt-6">
            <div className="flex items-center pb-6">
                <Image className='rounded-full mr-6' src={`/assets/user-images/image-elijah.jpg`} alt="Elijah Moss" width={40} height={40} />
                <span className="flex-1">
                    <h4 className="font-bold leading-20 tracking-close text-13x text-xSlate-600">Elijah Moss</h4>
                    <p className="text-13x font-normal text-xSlate-500">@hexagon.pentagon</p>
                </span>
                <h6 className="font-semibold text-13x leading-19 cursor-pointer text-xIndigo-600 hover:underline hover:decoration-xIndigo-600">Reply</h6>                                

            </div>

            <p className="leading-22 text-13x text-xSlate-500 font-normal">
                <span className="font-bold text-13x text-xFuchisia-600">@hummingbird1&nbsp;</span>
                While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme” followed by your browser. 
                There might be a need to turn off the extension for sites with naturally black backgrounds though.
            </p>
        </div>



    </div>

    );
}