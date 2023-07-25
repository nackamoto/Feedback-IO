import { useProps } from "@/context/app-theme";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRef, useState } from "react";
import { Listbox } from "@headlessui/react";
import { useOnClickOutside } from "usehooks-ts";
import PopUp from "@/components/miscellaneous/dialog";
import DeletePopup from "@/components/miscellaneous/deletedialogue";



interface Input{
    title: string,
    description:string
}


export default function EditFeedback(){

    const {datastore, setDatastore} = useProps();
    const router = useRouter();
    const id = router.query.id as string;

    const statusRef = useRef<HTMLDivElement>(null);
    const categoryRef = useRef<HTMLDivElement>(null);

    const empty =  [{title: '', category: '', status: '', description: ''}]   
    const [metadata] = datastore.filter(ev => ev.id.toString() === id)
    const {title, description}:Input = !metadata ? empty : metadata

    const [SelectedCategory, setSelectedCategory] = useState<string>('Feature');
    const [Category, setCategory] = useState<string>('feature');
    const [SelectedStatus, setSelectedStatus] = useState<string>('Live');
    const [Status, setStatus] = useState<string>('live');

    const [rotateOnCat, setRotateOnCat] = useState(false);
    const [rotateOnStat, setRotateOnStat] = useState(false);

    const [DialogOpen, setDialogOpen] = useState(false);
    const [DeleteDialogue, setDeleteDialogue] = useState(false);


    const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: {
        title: title,
        description: description
    }});



  
    useOnClickOutside(statusRef, (e) => {
      setRotateOnStat(false);
    });    

    useOnClickOutside(categoryRef, (e) => {
        setRotateOnCat(false);
      });   

      
    const onSubmit:SubmitHandler<Input> = (data) => {
        const updateStore = datastore.map(ev => ev.id.toString() === id ? 
        {...ev, ...data, category: Category, status: Status}: 
        ev)
        setDatastore(updateStore)
        setDialogOpen(true)
    }

    const Delete =  () => {
        
            const updateStore = datastore.filter(ev => ev.id.toString() !== id)
            router.push("/suggestions")
            setDatastore(updateStore)
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

        <>
            <PopUp 
                title="Changes Recorded"
                description={`You have modified feedback with id:${id}`}
                IsOpen={DialogOpen}
                setIsOpen={setDialogOpen}
                controlText1="okay"
                controlText2="keep editing"
                router={router}
            />

            <DeletePopup 
                title="Confirm Delete"
                description={`Delete item with id:${id}?`}
                IsOpen={DeleteDialogue}
                setIsOpen={setDeleteDialogue}
                controlText1="yes, delete"
                controlText2="no, cancel"
                DeleteAction={Delete}
            />            

            <main className="h-screen w-screen bg-zinc-100 px-6 pt-8 pb-20 tablet:pt-14 tablet:px-28 tablet:pb-32 desktop:px-96 desktop:pt-24 desktop:pb-48 overflow-auto">
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

                            <div className="w-full mt-4" onClick={() => setRotateOnCat(prev => !prev)} ref={categoryRef}>
                                    <Listbox value={Category} onChange={setCategory} >
                                        <Listbox.Button className={`w-full flex justify-between items-center px-6 py-3 bg-xSiolet-50 rounded-md`}>
                                            <span className="font-normal text-15x text-xSlate-600 ">{SelectedCategory}</span>
                                            <svg className={rotateOnCat && 'rotate-180'} width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4 4-4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                                        </Listbox.Button>


                                        <Listbox.Options className="w-full z-50 text-16x bg-white shadow-xl text-xSlate-500 rounded-md divide-y mt-2">
                                                <Listbox.Option onClick={() => assignCategory('Feature','feature')}
                                                    className={({ active }) =>
                                                        `relative cursor-pointer select-none py-3 px-6 ${
                                                        active ? 'text-fuchsia-600' : 'text-xSlate-500'
                                                        }`
                                                    }
                                                    value='feature'
                                                    >
                                                    <li className="flex flex-row items-center justify-between">
                                                        <p>Feature</p>
                                                        {
                                                            Category === 'feature' && 
                                                            <span className="flex items-center text-amber-600">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg>
                                                            </span>
                                                        }

                                                    </li>
                                                </Listbox.Option>

                                                <Listbox.Option onClick={() => assignCategory('UI','ui')}
                                                    className={({ active }) =>
                                                        `relative cursor-pointer select-none py-3 px-6 ${
                                                        active ? 'text-fuchsia-600' : 'text-xSlate-500'
                                                        }`
                                                    }
                                                    value='ui'
                                                    >
                                                    <li className="flex flex-row items-center justify-between">
                                                        <p>UI</p>
                                                        {
                                                            Category === 'ui' && 
                                                            <span className="flex items-center text-amber-600">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg>
                                                            </span>
                                                        }

                                                    </li>
                                                </Listbox.Option>

                                                <Listbox.Option onClick={() => assignCategory('UX','ux')}
                                                    className={({ active }) =>
                                                        `relative cursor-pointer select-none py-3 px-6 ${
                                                        active ? 'text-fuchsia-600' : 'text-xSlate-500'
                                                        }`
                                                    }
                                                    value='ux'
                                                    >
                                                    <li className="flex flex-row items-center justify-between">
                                                        <p>UX</p>
                                                        {
                                                            Category === 'ux' && 
                                                            <span className="flex items-center text-amber-600">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg>
                                                            </span>
                                                        }

                                                    </li>
                                                </Listbox.Option>

                                                <Listbox.Option onClick={() => assignCategory('Enhancement','enhancement')}
                                                    className={({ active }) =>
                                                        `relative cursor-pointer select-none py-3 px-6 ${
                                                        active ? 'text-fuchsia-600' : 'text-xSlate-500'
                                                        }`
                                                    }
                                                    value='enhancement'
                                                    >
                                                    <li className="flex flex-row items-center justify-between">
                                                        <p>Enhancement</p>
                                                        {
                                                            Category === 'enhancement' && 
                                                            <span className="flex items-center text-amber-600">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg>
                                                            </span>
                                                        }

                                                    </li>
                                                </Listbox.Option>

                                                <Listbox.Option onClick={() => assignCategory('Bug','bug')}
                                                    className={({ active }) =>
                                                        `relative cursor-pointer select-none py-3 px-6 ${
                                                        active ? 'text-fuchsia-600' : 'text-xSlate-500'
                                                        }`
                                                    }
                                                    value='bug'
                                                    >
                                                    <li className="flex flex-row items-center justify-between">
                                                        <p>Bug</p>
                                                        {
                                                            Category === 'bug' && 
                                                            <span className="flex items-center text-amber-600">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg>
                                                            </span>
                                                        }

                                                    </li>
                                                </Listbox.Option>

                                        </Listbox.Options >
                                    </Listbox>
                                </div>



                        </div>

                        <div className="w-full">
                            <h1 className="leading-20 tracking-close font-bold text-13x tablet:text-14x text-xSlate-600">Update Status</h1>
                            <label className="text-13x tablet:text-14x font-normal text-xSlate-500">Change feedback status</label>

                            <div className="w-full mt-4"  onClick={() => setRotateOnStat(prev => !prev)} ref={statusRef}>
                                    <Listbox value={Status} onChange={setStatus} >
                                        <Listbox.Button className={`w-full flex justify-between items-center px-6 py-3 bg-xSiolet-50 rounded-md`}>
                                            <span className="font-normal text-15x text-xSlate-600 ">{SelectedStatus}</span>
                                            <svg className={rotateOnStat && 'rotate-180'} width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4 4-4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                                        </Listbox.Button>


                                        <Listbox.Options className="w-full z-50 text-16x bg-white shadow-xl text-xSlate-500 rounded-md divide-y mt-2">
                                                <Listbox.Option onClick={() => assignStatus('Suggestion','suggestion')}
                                                    className={({ active }) =>
                                                        `relative cursor-pointer select-none py-3 px-6 ${
                                                        active ? 'text-fuchsia-600' : 'text-xSlate-500'
                                                        }`
                                                    }
                                                    value='suggestion'
                                                    >
                                                    <li className="flex flex-row items-center justify-between">
                                                        <p>Suggestion</p>
                                                        {
                                                            Status === 'suggestion' && 
                                                            <span className="flex items-center text-amber-600">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg>
                                                            </span>
                                                        }

                                                    </li>
                                                </Listbox.Option>

                                                <Listbox.Option onClick={() => assignStatus('Planned','planned')}
                                                    className={({ active }) =>
                                                        `relative cursor-pointer select-none py-3 px-6 ${
                                                        active ? 'text-fuchsia-600' : 'text-xSlate-500'
                                                        }`
                                                    }
                                                    value='planned'
                                                    >
                                                    <li className="flex flex-row items-center justify-between">
                                                        <p>Planned</p>
                                                        {
                                                            Status === 'planned' && 
                                                            <span className="flex items-center text-amber-600">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg>
                                                            </span>
                                                        }

                                                    </li>
                                                </Listbox.Option>

                                                <Listbox.Option onClick={() => assignStatus('In-Progress','in-progress')}
                                                    className={({ active }) =>
                                                        `relative cursor-pointer select-none py-3 px-6 ${
                                                        active ? 'text-fuchsia-600' : 'text-xSlate-500'
                                                        }`
                                                    }
                                                    value='in-progress'
                                                    >
                                                    <li className="flex flex-row items-center justify-between">
                                                        <p>In-Progress</p>
                                                        {
                                                            Status === 'in-progress' && 
                                                            <span className="flex items-center text-amber-600">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg>
                                                            </span>
                                                        }

                                                    </li>
                                                </Listbox.Option>

                                                <Listbox.Option onClick={() => assignStatus('Live','live')}
                                                    className={({ active }) =>
                                                        `relative cursor-pointer select-none py-3 px-6 ${
                                                        active ? 'text-fuchsia-600' : 'text-xSlate-500'
                                                        }`
                                                    }
                                                    value='live'
                                                    >
                                                    <li className="flex flex-row items-center justify-between">
                                                        <p>Live</p>
                                                        {
                                                            Status === 'live' && 
                                                            <span className="flex items-center text-amber-600">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg>
                                                            </span>
                                                        }

                                                    </li>
                                                </Listbox.Option>



                                        </Listbox.Options >
                                    </Listbox>
                                </div>


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

                            <button onClick={() => setDeleteDialogue(true)} type="button" className='flex bg-red-600 hover:bg-rose-400 rounded-lg mt-4 justify-center tablet:justify-normal'>
                                <span className="px-6 py-3 leading-20 tracking-close font-bold text-13x tablet:text-14x text-xSiolet-50">Delete</span>
                            </button>
                        </div>

                    </form>
                </section>
            </main>        
        </>
    );
}