'use client'
import { useProps } from "@/context/app-theme";
import { useParams, useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";



interface Input{
    title: string,
    description:string
}


export default function EditFeedback(){

    const {datastore, setDatastore} = useProps();
    const {id} = useParams();
    const router = useRouter();

    const empty =  [{title: '', category: '', status: '', description: ''}]   
    const [metadata] = datastore.filter(ev => ev.id.toString() === id)

    const {title, description}:Input = !metadata ? empty : metadata

    const {register, watch, handleSubmit, formState: {errors}} = useForm({defaultValues: {
        title: title,
        description: description
    }});

    const [SelectedCategory, setSelectedCategory] = useState<string>('Feature');
    const [Category, setCategory] = useState<string>('feature');

    const [SelectedStatus, setSelectedStatus] = useState<string>('Live');
    const [Status, setStatus] = useState<string>('live');

    const onSubmit:SubmitHandler<Input> = (data) => {
        const updateStore = datastore.map(ev => ev.id.toString() === id ? 
        {...ev, ...data, category: Category, status: Status}: 
        ev)
        setDatastore(updateStore)
        console.log(`edit feedback with title: \'${title}\'`)   

    }

    const Delete =  () => {
        
            const updateStore = datastore.filter(ev => ev.id.toString() !== id)
            router.push("/suggestions")
            setDatastore(updateStore)
            console.log(`deleted feedback with id ${id}`)   
    }

    const assignCategory = (selected:string, category:string) => {
        setSelectedCategory(selected)
        setCategory(category)
    }
    
    const assignStatus = (selected:string, status:string) => {
        setSelectedStatus(selected)
        setStatus(status)
    }

    return (
        <main className="h-screen w-screen px-6 pt-8 pb-20 tablet:pt-14 tablet:px-28 tablet:pb-32 desktop:px-96 desktop:pt-24 desktop:pb-48 overflow-auto">
            <section className="relative">
                <button onClick={() => router.back()} className="flex-1 flex items-center mb-10 hover:underline hover:decoration-xSlate-500">
                    <span className="">
                        <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                    </span>
                    <span className='ml-4 leading-20 tracking-close text-13x tablet:text-14x text-xSlate-500 font-bold '>Go Back</span>
                </button>

                <p>
                    <span>
                        <svg className='ml-10' width="56" height="56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M56 28c0 15.464-12.536 28-28 28S0 43.464 0 28 12.536 0 28 0s28 12.536 28 28Z" fill="url(#a)"/><path d="m29.082 19.48 3.75-3.48 6.513 6.272-3.548 3.68-6.714-6.471ZM16 39.595c.92-3.942 3.487-14.02 3.487-14.02l8.203-4.822 6.83 6.397-5.218 7.82L16.313 40l6.157-5.79c1.043.39 2.516.038 3.312-.836a2.818 2.818 0 0 0-.177-3.983c-1.149-1.05-3.02-1.05-4.071.098-.783.855-1.053 2.365-.605 3.36L16 39.596Z" fill="#fff"/><defs><radialGradient id="a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(129.411 30.466 10.84) scale(93.4169)"><stop stopColor="#E84D70"/><stop offset="0.530886" stopColor="#A337F6"/><stop offset="1" stopColor="#28A7ED"/></radialGradient></defs></svg>                    </span>
                </p>


                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-10 pb-10 pt-12 space-y-6 bg-white rounded-xl -mt-8">
                    <span className="pb-45 font-bold leading-35 tracking closer tablet:tracking-closest text-18x tablet:text-24x text-xSlate-600">{`Editing \‘${title}\’`}</span>

                    <div>
                        <h1 className="leading-20 tracking-close font-bold text-13x tablet:text-14x text-xSlate-600">Feedback Title</h1>
                        <label className="text-13x tablet:text-14x font-normal text-xSlate-500">Add a short, descriptive headline</label>

                        <div className="h-12 rounded-md mb-2 mt-4">
                            <input {...register('title', {required: 'can\'t be empty'})} className={`resize-none w-full h-full  text-13x tablet:text-15x bg-xSlate-50 rounded-xl px-6 py-4 outline-none ${errors.title?.message ? "border border-xRed-600 ring-xRed-600" : "focus:ring-xIndigo-600 focus:border focus:border-xIndigo-600"}  text-xSlate-600`} />
                            <p className="text-14x pt-1 fond-normal text-xRed-600">{errors.title?.message}</p>

                        </div>

                    </div>

                    <div className="w-full">
                        <h1 className="leading-20 tracking-close font-bold text-13x tablet:text-14x text-xSlate-600">Category</h1>
                        <label className="text-13x tablet:text-14x font-normal text-xSlate-500">Choose a category for your feedback</label>

                        <button type='button' id='editCatToggle' data-dropdown-toggle="categoryDrop" className="w-full mt-4 px-6 py-3 flex bg-xSiolet-50 items-center justify-between rounded-md">
                            <span className="font-normal text-15x text-xSlate-600 ">{SelectedCategory}</span>
                            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                        </button>

                        <ul id='categoryDrop' aria-labelledby="editCatToggle" className="z-10 hidden text-16x bg-white shadow-xl text-xSlate-500 rounded-lg divide-y">
                                <li onClick={() => assignCategory('Feature','feature')} className="flex px-6 py-3 items-center hover:text-xFuchisia-600 cursor-pointer justify-between">
                                    <span className="">Feature</span>
                                    <span className="pl-60">
                                        {Category === 'feature' && <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg> }                                  
                                    </span>
                                </li>

                                <li onClick={() => assignCategory('UI','ui')} className="flex px-6 py-3 items-center hover:text-xFuchisia-600 cursor-pointer justify-between">
                                    <span className="">UI</span>
                                    <span className="pl-60">
                                        {Category === 'ui' && <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg> }                                  
                                    </span>
                                </li>
                                <li onClick={() => assignCategory('UX','ux')} className="flex px-6 py-3 items-center hover:text-xFuchisia-600 cursor-pointer justify-between">
                                    <span className="">UX</span>
                                    <span className="pl-60">
                                        {Category === 'ux' && <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg> }                                  
                                    </span>
                                </li>
                                <li onClick={() => assignCategory('Enhancement','enhancement')} className="flex px-6 py-3 items-center hover:text-xFuchisia-600 cursor-pointer justify-between">
                                    <span className="">Enhancement</span>
                                    <span className="pl-60">
                                        {Category === 'enhancement' && <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg> }                                  
                                    </span>
                                </li>
                                <li onClick={() => assignCategory('Bug','bug')} className="flex px-6 py-3 items-center hover:text-xFuchisia-600 cursor-pointer justify-between">
                                    <span className="">Bug</span>
                                    <span className="pl-60">
                                        {Category === 'bug' && <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg> }                                  
                                    </span>
                                </li>

                            </ul>


                    </div>

                    <div className="w-full">
                        <h1 className="leading-20 tracking-close font-bold text-13x tablet:text-14x text-xSlate-600">Update Status</h1>
                        <label className="text-13x tablet:text-14x font-normal text-xSlate-500">Change feedback status</label>


                        <button type='button' id='editStatToggle' data-dropdown-toggle="statusDrop" className="w-full mt-4 px-6 py-3 flex bg-xSiolet-50 items-center justify-between rounded-md">
                            <span className="font-normal text-15x text-xSlate-600 ">{SelectedStatus}</span>
                            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                        </button>

                        <ul id='statusDrop' aria-labelledby="editStatToggle" className="z-10 hidden text-16x bg-white shadow-xl text-xSlate-500 rounded-lg divide-y">
                            <li onClick={() => assignStatus('Suggestion','suggestion')} className="flex px-6 py-3 items-center hover:text-xFuchisia-600 cursor-pointer justify-between">
                                <span className="">Suggestion</span>
                                <span className="pl-60">
                                    {Status === 'suggestion' && <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg> }                                  
                                </span>
                            </li>
                            <li onClick={() => assignStatus('Planned','planned')} className="flex px-6 py-3 items-center hover:text-xFuchisia-600 cursor-pointer justify-between">
                                <span className="">Planned</span>
                                <span className="pl-60">
                                    {Status === 'planned' && <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg> }                                  
                                </span>
                            </li>
                            <li onClick={() => assignStatus('In-Progress','in-progress')} className="flex px-6 py-3 items-center hover:text-xFuchisia-600 cursor-pointer justify-between">
                                <span className="">In-Progress</span>
                                <span className="pl-60">
                                    {Status === 'in-progress' && <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg> }                                  
                                </span>
                            </li>
                            <li onClick={()  => assignStatus('Live','live')} className="flex px-6 py-3 items-center hover:text-xFuchisia-600 cursor-pointer justify-between">
                                <span className="">Live</span>
                                <span className="pl-60">
                                    {Status === 'live' && <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg> }                                  
                                </span>
                            </li>

                        </ul>

                    </div>

                    <div>
                        <h1 className="leading-20 tracking-close font-bold text-13x tablet:text-14x text-xSlate-600">Feedback Detail</h1>
                        <label className="text-13x tablet:text-14x font-normal text-xSlate-500">Include any specific comments on what should be improved, added, etc.</label>

                        <div className="h-30 tablet:h-24 rounded-md mb-2 mt-4">
                            <textarea {...register('description', {required: "can\'t be empty", minLength:20})} rows={4} className={`resize-none w-full h-full placeholder-slate-600 text-13x tablet:text-15x bg-xSiolet-50 rounded-xl px-6 py-4 outline-none ${errors.description?.message ? "border border-xRed-600 ring-xRed-600": "focus:ring-xIndigo-600 focus:border focus:border-xIndigo-600"}  text-xSlate-600`}></textarea>
                            <p className="text-sm fond-normal text-rose-500">{errors.description?.message}</p>
                        </div>

                    </div>

                    <div className="mt-8 flex flex-col tablet:flex tablet:flex-row-reverse tablet:justify-between">
                        <div className="flex flex-col tablet:space-y-4 tablet:flex-row-reverse tablet:justify-end tablet:space-x-4">

                            <button type="submit" className='flex bg-xFuchisia-600 hover:bg-fuchsia-500 rounded-lg mt-4 tablet:ml-4 justify-center tablet:justify-normal'>
                                <span className="px-6 py-3 leading-20 tracking-close font-bold text-13x tablet:text-14x text-xSiolet-50">Save Changes</span>
                            </button>
                            <button onClick={() => router.back()} type="button" className='flex bg-xSlate-600 hover:bg-xSlate-500 rounded-lg mt-4 justify-center tablet:justify-normal'>
                                <span className="px-6 py-3 leading-20 tracking-close font-bold text-13x tablet:text-14x text-xSiolet-50 ">Cancel</span>
                            </button>
                        </div>

                        <button onClick={() => Delete()} type="button" className='flex bg-red-600 hover:bg-rose-400 rounded-lg mt-4 justify-center tablet:justify-normal'>
                            <span className="px-6 py-3 leading-20 tracking-close font-bold text-13x tablet:text-14x text-xSiolet-50">Delete</span>
                        </button>
                    </div>

                </form>
            </section>
        </main>        
    );
}