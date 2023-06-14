export default function EditFeedback(){
    return (
        <main className="h-screen w-screen px-6 pt-8 pb-20 tablet:pt-14 tablet:px-28 tablet:pb-32 desktop:px-96 desktop:pt-24 desktop:pb-48 overflow-auto">
            <section className="relative">
                <button className="flex-1 flex items-center mb-10 hover:underline hover:decoration-xSlate-500">
                    <span className="">
                        <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                    </span>
                    <span className='ml-4 leading-20 tracking-close text-13x tablet:text-14x text-xSlate-500 font-bold '>Go Back</span>
                </button>

                <p>
                    <span>
                        <svg className='ml-10' width="56" height="56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M56 28c0 15.464-12.536 28-28 28S0 43.464 0 28 12.536 0 28 0s28 12.536 28 28Z" fill="url(#a)"/><path d="m29.082 19.48 3.75-3.48 6.513 6.272-3.548 3.68-6.714-6.471ZM16 39.595c.92-3.942 3.487-14.02 3.487-14.02l8.203-4.822 6.83 6.397-5.218 7.82L16.313 40l6.157-5.79c1.043.39 2.516.038 3.312-.836a2.818 2.818 0 0 0-.177-3.983c-1.149-1.05-3.02-1.05-4.071.098-.783.855-1.053 2.365-.605 3.36L16 39.596Z" fill="#fff"/><defs><radialGradient id="a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(129.411 30.466 10.84) scale(93.4169)"><stop stop-color="#E84D70"/><stop offset="0.530886" stop-color="#A337F6"/><stop offset="1" stop-color="#28A7ED"/></radialGradient></defs></svg>                    </span>
                </p>


                <div className="flex flex-col px-10 pb-10 pt-12 space-y-6 bg-white rounded-xl -mt-8">
                    <span className="pb-45 font-bold leading-35 tracking closer tablet:tracking-closest text-18x tablet:text-24x text-xSlate-600">Editing ‘Add a dark theme option’</span>

                    <div>
                        <h1 className="leading-20 tracking-close font-bold text-13x tablet:text-14x text-xSlate-600">Feedback Title</h1>
                        <label className="text-13x tablet:text-14x font-normal text-xSlate-500">Add a short, descriptive headline</label>

                        <div className="h-12 rounded-md mb-2 mt-4">
                            <input id="message" className="resize-none w-full h-full  text-13x tablet:text-15x bg-xSlate-50 rounded-xl px-6 py-4 outline-none focus:ring-xIndigo-600 focus:border focus:border-xIndigo-600 text-xSlate-600" />
                        </div>

                    </div>

                    <div>
                        <h1 className="leading-20 tracking-close font-bold text-13x tablet:text-14x text-xSlate-600">Category</h1>
                        <label className="text-13x tablet:text-14x font-normal text-xSlate-500">Choose a category for your feedback</label>
                        <div className="h-12 mt-4">
                            <select id="countries" className="mt-4 rounded-md bg-xSlate-50 px-6 py-3 text-13x tablet:text-15x text-xSlate-600 divide-x outline-none block w-full cursor-pointer focus:ring-xIndigo-600 focus:border focus:border-xIndigo-600">
                                <option value="Feature">Feature</option>
                                <option value="UI">UI</option>
                                <option value="UX">UX</option>
                                <option value="Enhancement">Enhancement</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <h1 className="leading-20 tracking-close font-bold text-13x tablet:text-14x text-xSlate-600">Update Status</h1>
                        <label className="text-13x tablet:text-14x font-normal text-xSlate-500">Change feedback status</label>
                        <div className="h-12 mt-4">
                            <select id="countries" className="mt-4 rounded-md bg-xSlate-50 px-6 py-3 text-13x tablet:text-15x text-xSlate-600 divide-x outline-none block w-full cursor-pointer focus:ring-xIndigo-600 focus:border focus:border-xIndigo-600">
                                <option value="Suggestion">Suggestion</option>
                                <option value="Planned">Planned</option>
                                <option value="In-Progress">In-Progress</option>
                                <option value="Live">Live</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <h1 className="leading-20 tracking-close font-bold text-13x tablet:text-14x text-xSlate-600">Feedback Detail</h1>
                        <label className="text-13x tablet:text-14x font-normal text-xSlate-500">Include any specific comments on what should be improved, added, etc.</label>

                        <div className="h-30 tablet:h-24 rounded-md mb-2 mt-4">
                            <textarea id="message" rows={4} className="resize-none w-full h-full placeholder-slate-600 text-13x tablet:text-15x bg-xSiolet-50 rounded-xl px-6 py-4 outline-none focus:ring-xIndigo-600 focus:border focus:border-xIndigo-600 text-xSlate-600"></textarea>
                        </div>

                    </div>

                    <div className="mt-8 flex flex-col tablet:flex tablet:flex-row-reverse tablet:justify-between">
                        <div className="flex flex-col tablet:space-y-4 tablet:flex-row-reverse tablet:justify-end tablet:space-x-4">

                            <button className='flex bg-xFuchisia-600 hover:bg-fuchsia-500 rounded-lg mt-4 tablet:ml-4 justify-center tablet:justify-normal'>
                                <span className="px-6 py-3 leading-20 tracking-close font-bold text-13x tablet:text-14x text-xSiolet-50">Save Changes</span>
                            </button>
                            <button className='flex bg-xSlate-600 hover:bg-xSlate-500 rounded-lg mt-4 justify-center tablet:justify-normal'>
                                <span className="px-6 py-3 leading-20 tracking-close font-bold text-13x tablet:text-14x text-xSiolet-50 ">Cancel</span>
                            </button>
                        </div>

                        <button className='flex bg-red-600 hover:bg-rose-400 rounded-lg mt-4 justify-center tablet:justify-normal'>
                            <span className="px-6 py-3 leading-20 tracking-close font-bold text-13x tablet:text-14x text-xSiolet-50">Delete</span>
                        </button>
                    </div>

                </div>
            </section>
        </main>        
    );
}