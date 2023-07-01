'use client'
import { useRouter } from "next/navigation";
import { useProps } from "@/context/app-theme";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";




interface Input{
    title: string,
    description:string
}

export default function NewFeedback(){




    const router = useRouter()
    const {datastore, setDatastore} = useProps();

    const [SelectedCategory, setSelectedCategory] = useState<string>('Feature');
    const [Category, setCategory] = useState<string>('feature');

    const {register, handleSubmit, formState:{errors}} = useForm<Input>({defaultValues: {
        title: '',
        description:'',
    }});

    const onSubmit:SubmitHandler<Input> = (data) => {
        setDatastore(oldState => [...oldState, 
            {
                id: oldState.at(-1).id + 1,
                upvotes: 0,
                status: "suggestion",
                isToggled: false,
                comments: [],
                ...data, 
                category: Category
            }])

        console.log(`add new product request with title: \'${data.title}\'`)
        
    }

    const useCategory = (selected, category) => {
        setSelectedCategory(selected)
        setCategory(category)
    }

    return (
        <main className="h-screen w-screen px-6 pt-8 pb-20  tablet:px-28 tablet:pt-14 tablet:pb-56 desktop:px-96 desktop:pt-23 desktop:pb-48 overflow-scroll">
            <section className="relative ">
                <button onClick={() => router.back()} className="flex-1 flex items-center mb-10 hover:underline hover:decoration-xSlate-500">
                    <span className="">
                        <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>   
                    </span>
                    <span className='ml-4 leading-20 tracking-close text-14x text-xSlate-500 font-bold '>Go Back</span>
                </button>

                <p>
                    <span>
                        <svg className="ml-10" width="56" height="56" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient cx="103.9%" cy="-10.387%" fx="103.9%" fy="-10.387%" r="166.816%" id="a"><stop stopColor="#E84D70" offset="0%"/><stop stopColor="#A337F6" offset="53.089%"/><stop stopColor="#28A7ED" offset="100%"/></radialGradient></defs><g fill="none" fillRule="evenodd"><circle fill="url(#a)" cx="28" cy="28" r="28"/><path fill="#FFF" fillRule="nonzero" d="M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z"/></g></svg>
                    </span>
                </p>


                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-10 pb-10 pt-12 space-y-6 bg-white rounded-xl -mt-8">
                    <span className="font-bold leading-35 tracking-closer tablet:tracking-closest text-18x tablet:text-24x  text-xSlate-600">Create New Feedback</span>

                    <div>
                        <h1 className="leading-20 tracking-close font-bold text-13x tablet:text-14x text-xSlate-600">Feedback Title</h1>
                        <label className="text-13x tablet:text-14x font-normal text-xSlate-500">Add a short, descriptive headline</label>

                        <div className="h-12 rounded-md mb-2 mt-4">
                            <input {...register("title", {required: 'can\'t be empty', minLength: 10})} className={`resize-none w-full h-full  text-15x bg-xSlate-50 rounded-xl px-6 py-4 outline-none ${errors.title?.message ? "border border-xRed-600 ring-xRed-600": "focus:ring-xIndigo-600 focus:border focus:border-xIndigo-600"}  text-xSlate-600`} />
                            <p className="text-xRed-600 pt-1 text-14x font-normal">{errors.title?.message}</p>
                        </div>

                    </div>

                    <div className="w-full">
                        <h1 className="leading-20 tracking-close font-bold text-13x tablet:text-14x text-xSlate-600">Category</h1>
                        <label className="text-13x tablet:text-14x font-normal text-xSlate-500">Choose a category for your feedback</label>
                        
}
                        <button type='button' id='categoryToggle' value={Category}  data-dropdown-toggle='dropdown' className="w-full mt-4 px-6 py-3 flex bg-xSiolet-50 items-center justify-between rounded-md">
                            <span className="font-normal text-15x text-xSlate-600 ">{SelectedCategory}</span>
                            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                        </button>
                        <ul id='dropdown' aria-labelledby="categoryToggle" className="z-10 hidden text-16x bg-white shadow-xl text-xSlate-500 rounded-lg divide-y-2">
                            <li onClick={() => useCategory('Feature','feature')} className="flex px-6 py-3 items-center hover:text-xFuchisia-600 cursor-pointer justify-between">
                                <span>Feature</span>
                                <span className="pl-60">
                                    {Category === 'feature' && <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg> }                                  
                                </span>
                            </li>

                            <li onClick={() => useCategory('UI','ui')} className="flex px-6 py-3 items-center hover:text-xFuchisia-600 cursor-pointer justify-between">
                                <span>UI</span>
                                <span className="pl-60">
                                    {Category === 'ui' && <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg> }                                  
                                </span>
                            </li>
                            <li onClick={() => useCategory('UX','ux')} className="flex px-6 py-3 items-center hover:text-xFuchisia-600 cursor-pointer justify-between">
                                <span>UX</span>
                                <span className="pl-60">
                                    {Category === 'ux' && <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg> }                                  
                                </span>
                            </li>
                            <li onClick={() => useCategory('Enhancement','enhancement')} className="flex px-6 py-3 items-center hover:text-xFuchisia-600 cursor-pointer justify-between">
                                <span>Enhancement</span>
                                <span className="pl-60">
                                    {Category === 'enhancement' && <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg> }                                  
                                </span>
                            </li>
                            <li onClick={() => useCategory('Bug','bug')} className="flex px-6 py-3 items-center hover:text-xFuchisia-600 cursor-pointer justify-between">
                                <span>Bug</span>
                                <span className="pl-60">
                                    {Category === 'bug' && <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg> }                                  
                                </span>
                            </li>
                        </ul>
                        
                    </div>
                    <div>
                        <h1 className="leading-20 tracking-close font-bold text-13x tablet:text-14x text-xSlate-600">Feedback description</h1>
                        <label className="text-13x tablet:text-14x font-normal text-xSlate-500">Include any specific comments on what should be improved, added, etc.</label>

                        <div className="h-30 tablet:h-24 rounded-md mb-2 mt-4">
                            <textarea {...register("description", {required: 'can\'t be empty', minLength: 15})}  rows={4} 
                            className={`${errors.description?.message ? "border ring-xRed-600 border-xRed-600": "focus:ring-xIndigo-600 focus:border focus:border-xIndigo-600"} resize-none w-full h-full placeholder-slate-400 text-15x bg-xSiolet-50 rounded-xl px-6 py-4 outline-none  text-xSlate-600`}></textarea>
                            <p className="text-rose-500 pt-1 text-14x font-normal">{errors.description?.message}</p>

                        </div>

                    </div>

                    <div className="flex flex-col space-y-4 tablet:flex-row tablet:justify-end tablet:space-x-4 mt-8">
                        <button onClick={() => router.back()} type="button" className='flex bg-xSlate-600 hover:bg-xSlate-500 rounded-xl mt-4 justify-center'>
                            <span className="px-6 py-3 leading-20 tracking-close font-bold text-13x tablet:text-14x text-xSiolet-50">Cancel</span>
                        </button>
                        <button type="submit" className='flex bg-xFuchisia-600 hover:bg-fuchsia-500 rounded-xl mt-4 justify-center'>
                            <span className="px-6 py-3 leading-20 tracking-close font-bold text-13x tablet:text-14x text-xSiolet-50 text-center">Add Feedback</span>
                        </button>
                    </div>

                </form>
            </section>
        </main>
        );
}