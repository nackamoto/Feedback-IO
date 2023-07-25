import { CommentsMobile } from "@/components/detail/comments-mobile";
import CommentsTablet from "@/components/detail/comments-tablet";
import { useProps } from "@/context/app-theme";
import { useRouter } from "next/router";
import { Detail } from "@/components/detail/comments-hero";
import { useForm, SubmitHandler } from "react-hook-form";



interface Inputs {
    description: string
}


export default  function FeedbackDetail(){
    
    const router = useRouter()
    const id = router.query.id as string;

    const {datastore, setDatastore, currentUser:{name, image, username}} = useProps();

    const {register, watch, handleSubmit, formState: {errors}} = useForm<Inputs>({
        defaultValues: {
            description: ''
        }
    })

    const [metadata] = datastore.filter(ev => ev.id.toString() === id)
    let comments;

    if(metadata){
        comments = metadata.comments;
    } else{
        comments = []
    }
    // const {comments} = metadata


    const nChar = watch('description').length;
    const nComments = comments.length
    


    
    const onSubmit:SubmitHandler<Inputs> = (data) => {

        const updateStore = datastore.map(ev => ev.id.toString() === id ? 
        {...ev, comments: [...ev.comments,  
            {
                id: !ev.comments ? 1: ev.comments.at(-1)?.id + 1,
                content: data.description,
                user: {
                    image: image,
                    name: name,
                    username: username
                }
                
            }
        
        ]} 
        : ev)

        setDatastore(updateStore)

    }


    return (
        <main className="bg-zinc-100 flex space-y-6 px-6 pt-6 pb-20 tablet:px-10 tablet:pt-14 tablet:pb-28 desktop:px-96 desktop:pb-36 desktop:pt-20 h-screen w-screen overflow-y-auto overflow-x-visible">
            <div className="flex-1 flex-col space-y-6 ">
                
                <section className="flex flex-col space-y-6">
                    <nav className="flex flex-row items-center">
                        <button onClick={() => router.back()} className="flex-1 flex items-center">
                            <span className="">
                                <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>                        </span>
                            <span className='ml-4 leading-20 tracking-close text-13x tablet:text-14x text-xSlate-500 font-bold hover:underline'>Go Back</span>
                        </button>

                        <button onClick={() => router.push(`/edit/${id}`)} className='bg-xIndigo-600 hover:bg-indigo-400 rounded-lg px-4 py-2 tablet:px-6 tablet:py-3'>
                            <span className="leading-20 tracking-close text-13x tablet:text-14x font-bold text-xSiolet-50">Edit Feedback</span>
                        </button>


                    </nav>

                    <Detail id={id}/>


                </section>


{/* comment section starts here */}

                <section className={`flex-none flex flex-col rounded-xl bg-white py-8 px-6 ${nComments < 1 ? "h-3/6" : "h-full"}`}>

                    <p className="relative mt-6 leading-26 tracking-closer text-18x font-bold text-xSlate-600 pb-4">{nComments}&nbsp;{nComments < 2 ? "Comment": "Comments"}</p>

                    <div className="hidden tablet:flex flex-col overflow-y-auto divide-y divide-slate-100 h-full">
                        { nComments > 0 ?  <CommentsTablet id={id}/>: <div className="text-16x font-semibold text-xSlate-500">Tell us what you think </div>}
                    </div>

                    <div className="flex flex-col overflow-y-auto divide-y divide-slate-100 tablet:hidden">
                    { nComments > 0 ?  <CommentsMobile id={id}/>: <div className="text-16x font-semibold text-xSlate-500">Tell us what you think </div>}
                    </div>


                </section>

{/* comment section ends here */}


                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-white rounded-xl px-6 pb-8">
                    <p className="leading-26 my-8 tracking-closer text-18x font-bold text-xSlate-600">Add Comment</p>
                    <div className="h-20 rounded-md">
                        <textarea {...register('description', {required: 'can\'t be empty', minLength: 10, maxLength: 205})} rows={4} maxLength={205} 
                            className={`${errors.description?.message ? "border  border-xRed-600": "border border-xIndigo-600"} resize-none w-full h-full placeholder-slate-400  text-13x tablet:text-15x bg-xSiolet-50 rounded-xl px-6 py-4 outline-none  text-xSlate-600`} placeholder="Type Your comment here"></textarea>
                        <p className="text-xRed-600 pt-1 text-14x font-normal">{errors.description?.message}</p>

                    </div>
                    <div className="flex justify-between items-center pt-4">
                        <span className="leading-22 text-13x tablet:text-15x text-xSlate-500 font-normal">{205 - nChar} Characters left</span>
                        <button type='submit' className='flex bg-xFuchisia-600 hover:bg-fuchsia-500 rounded-lg mt-4 justify-self-center'>
                            <span className="px-4 py-2 tablet:px-6 tablet:py-3 leading-20 tracking-close font-bold text-13x tablet:text-14x text-xSiolet-50">Post Comment</span>
                        </button>
                    </div>
                </form>



            </div>

        </main>
    );
}