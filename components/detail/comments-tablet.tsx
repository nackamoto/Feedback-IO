import { useProps } from "@/context/app-theme";
import Image from "next/image";
import {useState, useEffect, createRef } from "react";


interface IProps {
    id: string,
    
}

export default function CommentsTablet({id}:IProps){

    const {datastore, setDatastore, currentUser} = useProps();

    const productRefsTablet = datastore.map(() => createRef())
    const [isVisibleT, setIsVisibleT] = useState(datastore.map(() => false));

    const toggleVisibilityTablet = (index) => {
        setIsVisibleT((prev) => {
            const newVisibility = [...prev];
            newVisibility[index] = !prev[index];
            return newVisibility;
          });
    }



    const addReplytoCommentTablet = (event) => {
        event.preventDefault();

        const commentId = event.target.id;
        const productId = id;
        const message = event.target[0].value;


        const updatedProductRequests = datastore.map((productRequest) => {
            if (productRequest.id.toString() === productId) {
              const updatedComments = productRequest.comments.map((comment) => {
                if (comment.id.toString() === commentId) {

                  const newReply = {
                    content: message,
                    replyingTo: comment.user.username, 
                    user: {
                      image: currentUser.image,
                      name: currentUser.name,
                      username: currentUser.username,
                    }

                  };
                  const updatedReplies = comment.replies ? [...comment.replies, newReply] : [newReply];
                  // Check if the comment already has replies, if yes, add the new reply, otherwise create the replies array.
        
                  return {
                    ...comment,
                    replies: updatedReplies,
                  };
                }
                return comment;
              });
              return {
                ...productRequest,
                comments: updatedComments,
              };
            }
            return productRequest;
          });
        
          setDatastore(updatedProductRequests);
          
          
          
        }
        
    
    
    return (
        <>
            { 
                datastore.filter(value => value.id.toString() === id).map((obj, i) => {
                    const {comments} = obj;
                    
                    return (
                        <div key={i}>
                            {
                                comments.map((obj, i) => (
                    
                                    <div key={i} className="relative ml-6 py-8">           
                                        <ol className="border-l border-l-slate-100">
                                
                                            <div className="flex relative">
                                                <span className="absolute -ml-5  bg-white ring-8 rounded-full ring-white">
                                                    <Image className="bg-white rounded-full mb-4" width={40} height={40} alt="Elijah" src={`/${obj.user.image}`} />
                                                </span>                            
                                                <li className="flex-1 flex flex-col">
                                                    <div className="flex ml-20">
                                                        <span className="flex-1">
                                                            <h4 className="font-bold leading-20 tracking-close text-14x text-xSlate-600">{obj.user.name}</h4>
                                                            <p className="text-14x font-normal text-xSlate-500">@{obj.user.username}</p>
                                                        </span>
                                                        <button onClick={() => toggleVisibilityTablet(i)} type="button" className="font-semibold text-13x leading-19 cursor-pointer text-xIndigo-600 hover:underline hover:decoration-xIndigo-600">Reply</button>                                
                                                    </div>                            
                                
                                                    <p className="ml-10 mb-6 mt-4 leading-22 text-15x text-xSlate-500 font-normal">{obj.content}</p>
                                
                                                {/* reply textbox */}
                                
                                                    <form ref={productRefsTablet[i]} onSubmit={function(event) {addReplytoCommentTablet(event), toggleVisibilityTablet(i)}} id={`${obj.id}`} className={`${isVisibleT[i] ? "": "hidden"} relative flex justify-between space-x-4`}>
                                                        <div className="flex-1 h-20 rounded-md mb-2 pl-14">
                                                            <textarea  maxLength={205} minLength={10} rows={4} className="resize-none w-full h-full placeholder-slate-400  text-15x bg-xSiolet-50 rounded-xl px-6 py-4 outline-none  focus:border focus:border-xIndigo-600 text-xSlate-600" placeholder="Type Your comment here"></textarea>
                                                        </div>
                                
                                                        <div className="flex items-start">
                                                            <button type='submit' className='flex px-6 py-3 bg-xFuchisia-600 hover:bg-fuchsia-500 rounded-lg'>
                                                                <span className="leading-20 tracking-close font-bold text-14x text-xSiolet-50">Post Reply</span>
                                                            </button>
                                                        </div>                                                
                                                    </form>
                                
                                                {/* reply textbox */}
                                            
                                
                                                </li>
                                
                                
                                            </div>

                                            {
                                                
                                                obj.replies?.map((reply, i:number) => (
                                                    <div key={i} className="flex flex-col">

                                                        <ul key={i} className="flex flex-row py-8 pl-6">
                                                            <span className="mr-8 shrink-0">
                                                                <Image className="rounded-full object-cover" width={40} height={40} alt={reply.user.name} src={`/${reply.user.image}`} />
                                                            </span>
                                                            <div className="flex flex-col grow">
                                            
                                                                <div className=" flex flex-row justify-between items-center space-x-8">
                                                                    <span className="flex-1 mb-4 items-center">
                                                                        <h4 className="font-bold leading-20 tracking-close text-14x text-xSlate-600">{reply.user.user}</h4>
                                                                        <p className="text-14x font-normal text-xSlate-500">@{reply.user.username}</p>
                                                                    </span>
                                                                    <h6 className="font-semibold text-13x leading-19 text-xIndigo-600 cursor-pointer hover:underline hover:decoration-xIndigo-600">Reply</h6>
                                            
                                                                </div>
                                            
                                                                <p className="leading-22 text-15x text-xSlate-500 font-normal">
                                                                    <span className="font-bold text-15x text-xFuchisia-600">@{reply.replyingTo}&nbsp;</span>
                                                                    {reply.content}
                                                                </p>
                                                            </div>      
                                                        </ul> 

                                                        <form className="hidden flex justify-between space-x-4">
                                                            <div className="flex-1 h-20 rounded-md mb-2 pl-14">
                                                                <textarea ref={null} minLength={10} maxLength={205} rows={4} className="resize-none w-full h-full placeholder-slate-400  text-15x bg-xSiolet-50 rounded-xl px-6 py-4 outline-none focus:border focus:border-xIndigo-600 text-xSlate-600" placeholder="Type Your comment here"></textarea>
                                                            </div>
                                                    
                                                            <div className="flex items-start">
                                                                <button onClick={() => console.log("hello world")} type="button" className='flex px-6 py-3 bg-xFuchisia-600 hover:bg-fuchsia-500 rounded-lg'>
                                                                    <span className="leading-20 tracking-close font-bold text-14x text-xSiolet-50">Post Reply</span>
                                                                </button>
                                                            </div>
                                                    
                                                    
                                                        </form>                      

                                                    </div>


                                                ))
                                            }
                                
                                
                                
                                
                                        </ol>
                                
                                    </div>
                                ))
                            }
             
                        </div>
                    );


                })
            }

        </>
    );
}