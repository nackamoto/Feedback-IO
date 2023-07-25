import { SuggestionsTablet } from "@/components/suggestions/suggestions-tablet";
import { SuggestionsMobile } from "@/components/suggestions/suggestions-mobile";
import { useProps } from "@/context/app-theme";
import { sugProps } from "@/components/suggestions/suggestions-tablet";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, useRef, Fragment } from "react";
import { Feedback404 } from "@/components/suggestions/no-feedback";
import { useOnClickOutside } from "usehooks-ts";
import { Menu } from "@headlessui/react";
import SidebarTest from "@/components/miscellaneous/mobilesidebar";





export default function SuggestionPage(){

  const router = useRouter();


  const dropdownRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLElement>(null);

  useOnClickOutside(dropdownRef, (e) => {
    setRotateCarret(false);
  });


  const { datastore, setSortby, Sortby,  statics: {nLive, nProgress, nPlanned}, } = useProps();

  const [rotateCarret, setRotateCarret] = useState(false);
  const [isSidebarOpened, setisSidebarOpened] = useState(false);
  const [SidebarOpen, setSidebarOpen] = useState(false);
  
    
  const [filterBy, setFilterBy] = useState<string>('all');


  const [category, setCategory] = useState
              <{
                all:boolean,
                ui:boolean, 
                ux:boolean, 
                feature:boolean, 
                enhancement:boolean, 
                bug: boolean
              }>
                ({
                  
                  all:true,
                  ui:false,
                  ux:false,
                  feature:false,
                  enhancement:false,
                  bug:false
                });
  
  const [Suggestions, setSuggestions] = useState(() => datastore.filter(item => item.status === 'suggestion'))                                        

  useEffect(() => {

    setSuggestions(filterBy === 'all' ? datastore.filter(item => item.status === 'suggestion') : datastore.filter(item => item.status === 'suggestion' && item.category === filterBy))
  }, [filterBy, datastore]);



  useEffect(() => {
        
        setCategory({
  
            all: 'all' === filterBy ? true: false,
            ui: 'ui' === filterBy ? true: false,
            ux: 'ux' === filterBy ? true: false,
            feature: 'feature' === filterBy ? true: false,
            enhancement: 'enhancement' === filterBy ? true: false,
            bug: 'bug' === filterBy ? true: false,
          
        });      
  
      
    }, [filterBy]);

    useEffect(() => {
      const sidebarHandler = (event) => {
        if(
          isSidebarOpened && 
          ref.current && 
          !ref.current.contains(event.target) 

        ){
            setisSidebarOpened(false);            
        }
      }

      document.addEventListener("click", sidebarHandler);

      return (() => {
        document.removeEventListener("click", sidebarHandler);
      })
    }, [isSidebarOpened]);




  const DesktopSuggestion = () => {


    const items = Suggestions.map((item:sugProps, i:number) => (
      
        <SuggestionsTablet key={i} 
            id={item.id}
            upvotes={item.upvotes} 
            title={item.title} 
            description={item.description} 
            category={item.category} 
            comment={item.comments ? item.comments.length : 0}
            status={item.status}
            isToggled={item.isToggled}


        />
    ));



      return items;


  };

  const MobileSuggestions = () => {

    const items:JSX.Element = Suggestions.map((item:sugProps, i:number) => (

      <SuggestionsMobile key={i} 
          id={item.id}
          upvotes={item.upvotes} 
          title={item.title} 
          description={item.description} 
          category={item.category} 
          comment={item.comments ? item.comments.length : 0}
          status={item.status}
          isToggled={item.isToggled}

      />
  ));

    return items;


};


  return (

    <>
    
    <main className="overflow-y-auto h-screen w-screen bg-zinc-100 flex flex-col tablet:flex-col desktop:space-x-10 desktop:flex-row desktop:px-40 desktop:py-32 tablet:pt-14  tablet:px-10">

        <section className="flex tablet:mb-10 tablet:flex-row tablet:space-x-6 desktop:flex-col desktop:space-y-6 desktop:space-x-0"> {/* case 2 */}

          <div className="z-50 top-0 left-0 right-0 w-full desktop:flex-none rounded-none flex-1 flex items-center justify-between tablet:flex-col px-6 py-4 tablet:pt-24  tablet:pl-6 tablet:pr-11 tablet:pb-6 desktop:pt-16 desktop:pr-20  bg-image-mobile desktop:bg-image-desktop tablet:bg-image-tablet bg-norepeat tablet:rounded-lg"> 
            <div className="flex-nowrap text-white">
              <h2 className="font-bold text-15x tablet:text-20x leading-29 tracking-close tablet:tracking-closer">Frontend Mentor</h2>
              <span onClick={() => router.back()} className="font-normal text-13x tablet:text-15x leading-22">Feedback Board</span>
            </div>
            <button onClick={function(event){console.log("clicked") ; setSidebarOpen(old => !old)}} type='button' className="tablet:hidden">
              {
                SidebarOpen ? 
                <svg width="18" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z" fill="#FFF" fillRule="evenodd"/></svg>
                  :
                  <svg width="20" height="17" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fillRule="evenodd"><path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z"/></g></svg>
                }
            </button>


          </div>

          <div className="hidden">

            <SidebarTest
              isOpen={SidebarOpen}
              setIsOpen={setSidebarOpen}
              setFilterBy={setFilterBy}
              category={category}
              nLive={nLive}
              nPlanned={nPlanned}
              nProgress={nProgress}
          />
          </div>


            <div className="mobile:hidden desktop:flex-none tablet:flex-1 tablet:flex pt-6 pl-6 pr-4 pb-9 desktop:py-6 desktop:pt-6 desktop:pr-12 bg-white rounded-lg">
                <div className="flex flex-col space-y-3.5">
                  <div className="flex space-x-2  text-13x font-semibold">

                      <span onClick={() => setFilterBy("all")} className={`${category.all ? "bg-xIndigo-600 text-white": "bg-xSiolet-50 text-xIndigo-600"} hover:cursor-pointer rounded-xl`}>
                        <h6 className="px-4 py-2">All</h6>
                      </span>
                      <span onClick={() => setFilterBy("ui")} className={`${category.ui ? "bg-xIndigo-600 text-white": "bg-xSiolet-50 text-xIndigo-600"} hover:cursor-pointer rounded-xl`}>
                        <h6 className="px-4 py-2">UI</h6>
                      </span>
                      <span onClick={() => setFilterBy("ux")} className={`${category.ux ? "bg-xIndigo-600 text-white": "bg-xSiolet-50 text-xIndigo-600"} hover:cursor-pointer rounded-xl`}>
                        <h6 className="px-4 py-2">UX</h6>
                      </span>

                    </div>
                    <div className="flex space-x-2 text-xIndigo-600 text-13x font-semibold"> 
                      <span onClick={() => setFilterBy("enhancement")} className={`${category.enhancement ? "bg-xIndigo-600 text-white": "bg-xSiolet-50 text-xIndigo-600"} hover:cursor-pointer rounded-xl`}>
                        <h6 className="px-4 py-2">Enhancement</h6>
                      </span>
                      <span onClick={() => setFilterBy("bug")} className={`${category.bug ? "bg-xIndigo-600 text-white": "bg-xSiolet-50 text-xIndigo-600"} hover:cursor-pointer rounded-xl`}>
                        <h6 className="px-4 py-2">Bug</h6>
                      </span>
                  </div>
                  <div className="flex space-x-2 text-xIndigo-600 text-13x font-semibold"> 
                      <span onClick={() => setFilterBy("feature")} className={`${category.feature ? "bg-xIndigo-600 text-white": "bg-xSiolet-50 text-xIndigo-600"} hover:cursor-pointer rounded-xl`}>
                        <h6 className="px-4 py-2">Feature</h6>
                      </span>

                  </div>


                </div>
            </div>


            <div className="mobile:hidden desktop:flex-none tablet:flex-1 tablet:flex flex-col px-6 pb-6 pt-6 desktop:pt-5 bg-white rounded-lg">
              <div className="flex pb-6 justify-between items-center">
                <h3 className="text-18x text-xSlate-600 font-bold leading-26 tracking-closer">Roadmap</h3>
                <Link href={`/roadmap`} passHref>
                  <span className="font-semibold text-13x leading-19 text-xIndigo-600 hover:cursor-pointer  hover:text-indigo-400 hover:opacity-75 underline">View</span>
                </Link>
              </div>

              <div className="flex flex-col space-y-2 rounded-lg">
                <div className="flex items-center text-16x leading-23 text-xSlate-500">
                  <div className="h-2 w-2 rounded-full bg-xOrange-300 mr-4"></div>
                  <span className="font-normal   flex-1 ">Planned</span>
                  <span className=" font-bold">{nPlanned}</span>
                </div>
                <div className="flex items-center text-16x leading-23 text-xSlate-500">
                  <div className="h-2 w-2 rounded-full bg-xFuchisia-600 mr-4"></div>
                  <span className="font-normal   flex-1 ">In-Progress</span>
                  <span className=" font-bold">{nProgress}</span>
                </div>
                <div className="flex items-center text-16x leading-23 text-xSlate-500">
                  <div className="h-2 w-2 rounded-full bg-xBlue-400 mr-4"></div>
                  <span className="font-normal   flex-1 ">Live</span>
                  <span className=" font-bold">{nLive}</span>
                </div>

              </div>
            </div>




        </section>



      <div className="flex tablet:flex-1 desktop:flex-row overflow-hidden tablet:overflow-visible"> 

        <section className="flex-1 flex flex-col space-y-6 w-full">

          <header className="flex bg-xSlate-700  tablet:space-x-9 py-2 px-6 tablet:pl-6 tablet:pr-4 rounded-none tablet:rounded-lg  items-center"> {/*here*/}
            <div className="mobile:hidden tablet:first:flex space-x-4 items-center text-white py-6">
              <span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 2.274c2.237 0 4.339.854 5.923 2.408a8.123 8.123 0 012.465 5.839 8.084 8.084 0 01-1.7 4.979 8.457 8.457 0 01-3.652 2.71l-.31.112.003.826h.369c.262 0 .475.21.475.469a.47.47 0 01-.39.46l-.085.008h-.365l.004 1.02h.36c.263 0 .476.21.476.469a.47.47 0 01-.39.461l-.085.008h-.358l.006 1.487a.466.466 0 01-.381.46l-.094.01H9.23a.478.478 0 01-.466-.378l-.01-.092.006-1.487h-.357a.472.472 0 01-.475-.47.47.47 0 01.39-.46l.085-.008h.361l.004-1.02h-.365a.472.472 0 01-.475-.468.47.47 0 01.39-.462l.085-.007h.368l.004-.826a8.452 8.452 0 01-3.996-2.867 8.08 8.08 0 01-1.666-5.056c.032-2.127.923-4.152 2.511-5.7 1.508-1.471 3.448-2.322 5.493-2.416l.324-.009h.06zm1.791 19.769H9.709l-.004 1.02h3.59l-.004-1.02zm-.007-1.958H9.716l-.003 1.02h3.574l-.003-1.02zM11.5 3.212h-.054c-3.946.027-7.327 3.325-7.384 7.2-.048 3.266 2.14 6.192 5.322 7.118.174.05.3.193.332.364l.008.088-.004 1.166h3.56l-.004-1.166a.47.47 0 01.34-.452c3.134-.912 5.323-3.794 5.323-7.01a7.197 7.197 0 00-2.185-5.173A7.453 7.453 0 0011.5 3.212zm.829 1.782a.4.4 0 01.401.397v.322c.48.12.932.307 1.346.552l.228-.226a.405.405 0 01.569 0L16.046 7.2a.393.393 0 010 .56l-.23.228c.247.41.437.858.557 1.333h.323a.4.4 0 01.402.397v1.645a.4.4 0 01-.402.396h-.323c-.12.476-.31.924-.557 1.333l.23.228a.393.393 0 010 .56l-1.173 1.163a.405.405 0 01-.57 0l-.227-.227a5.02 5.02 0 01-1.346.553v.322a.4.4 0 01-.401.396H10.67a.4.4 0 01-.402-.396v-.322a5.022 5.022 0 01-1.345-.553l-.228.227a.405.405 0 01-.569 0L6.954 13.88a.393.393 0 010-.56l.23-.228a4.924 4.924 0 01-.557-1.333h-.324a.4.4 0 01-.401-.396V9.719a.4.4 0 01.401-.397h.324c.12-.475.31-.923.557-1.333l-.23-.228a.393.393 0 010-.56L8.127 6.04a.405.405 0 01.569 0l.228.226a5.021 5.021 0 011.345-.552V5.39a.4.4 0 01.402-.397zM11.5 7.721c-1.572 0-2.846 1.263-2.846 2.82 0 1.558 1.274 2.82 2.846 2.82s2.846-1.262 2.846-2.82c0-1.557-1.274-2.82-2.846-2.82zm11.025 4.152c.262 0 .475.21.475.469a.47.47 0 01-.39.461l-.085.008h-.498a.472.472 0 01-.475-.469.47.47 0 01.39-.461l.085-.008h.498zm-21.552 0c.262 0 .475.21.475.469a.47.47 0 01-.39.461l-.085.008H.475A.472.472 0 010 12.342a.47.47 0 01.39-.461l.085-.008h.498zM3.112 3.45l.074.06.46.451c.185.183.186.48 0 .663a.476.476 0 01-.596.062l-.075-.06-.459-.451a.465.465 0 01-.001-.663.48.48 0 01.597-.062zm17.373.062c.162.16.182.408.06.59l-.061.073-.46.45a.476.476 0 01-.67 0 .464.464 0 01-.06-.59l.06-.074.46-.45a.48.48 0 01.671 0zM11.5 0c.233 0 .427.166.467.384l.008.085v.49a.472.472 0 01-.475.468.473.473 0 01-.467-.384l-.008-.084v-.49c0-.26.213-.469.475-.469z" fill="#FFF" /></svg>
              </span>
              <h3 className="font-bold text-18x leading-26 tracking-closer">{Suggestions.length}&nbsp;Suggestions</h3>
            </div>


            <Menu as="div"  className='flex-1 relative'>
              <div ref={dropdownRef} className="" onClick={() => setRotateCarret(prev => !prev)}>
                <Menu.Button className='flex items-center space-x-2 text-white hover:text-slate-50 hover:opacity-50'>
                  <p  className="font-normal text-13x  tablet:text-14x cursor-pointer">Sort by :</p>
                  <span className="font-bold text-13x tablet:text-14x mr-2 leading-20 tracking-close">{Sortby}</span>
                  <span>
                    <svg  className={`h-2 w-2 stroke-white ${ rotateCarret && 'rotate-180'}`} viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="white" strokeWidth="2"/></svg>
                </span>                                  
                </Menu.Button>

                <Menu.Items className="absolute w-64 z-50 mt-6 tablet:mt-8 origin-top-right divide-y-2 divide-gray-100 bg-white shadow-2xl focus:outline-none text-16x font-normal rounded-md">
                    <Menu.Item as="div" className='px-6 py-3 hover:text-xFuchisia-600 cursor-pointer w-full'>
                        {({ active }) => (
                          <button onClick={() => setSortby('Most Upvotes')}
                            className={`${
                              active ? 'text-xFuchisia-600 cursor-pointer' : 'text-xSlate-500'
                            } group flex w-full items-center justify-between`}
                          >
                              <p>Most Upvotes</p>
                              <span>
                                {Sortby === 'Most Upvotes' && <svg xmlns="http://www.w3.org/2000/svg"  width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg>}                    
                              </span>

                          </button>
                        )}
                    </Menu.Item>
                    <Menu.Item as="div" className='px-6 py-3'>
                        {({ active }) => (
                          <button onClick={() => setSortby('Least Upvotes')}
                            className={`${
                              active ? 'text-xFuchisia-600 cursor-pointer' : 'text-xSlate-500'
                            } group flex w-full items-center justify-between`}
                          >
                              <p>Least Upvotes</p>
                              <span>
                                {Sortby === 'Least Upvotes' && <svg xmlns="http://www.w3.org/2000/svg"  width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg>}                    
                              </span>

                          </button>
                        )}
                    </Menu.Item>
                    <Menu.Item as="div" className='px-6 py-3'>
                        {({ active }) => (
                          <button onClick={() => setSortby('Most Comments')} 
                            className={`${
                              active ? 'text-xFuchisia-600 cursor-pointer' : 'text-xSlate-500'
                            } group flex w-full items-center justify-between`}
                          >
                              <p>Most Comments</p>
                              <span>
                                {Sortby === 'Most Comments' && <svg xmlns="http://www.w3.org/2000/svg"  width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg>}                    
                              </span>
                                        
                          </button>
                        )}
                    </Menu.Item>
                    <Menu.Item as="div" className='px-6 py-3'>
                        {({ active }) => (
                          <button onClick={() => setSortby('Least Comments')}
                            className={`${
                              active ? 'text-xFuchisia-600 cursor-pointer' : 'text-xSlate-500'
                            } group flex w-full items-center justify-between`}
                          >
                              <p>Least Comments</p>
                              <span>
                                {Sortby === 'Least Comments' && <svg xmlns="http://www.w3.org/2000/svg"  width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg>}                    
                              </span>

                          </button>
                        )}
                    </Menu.Item>
                </Menu.Items>
              </div>
            </Menu>


            <button onClick={() => router.push('/add')} className="flex ml-auto px-4 py-2  tablet:px-6 tablet:py-3 items-center bg-xFuchisia-600 hover:bg-fuchsia-500 hover:cursor-pointer  rounded-lg">
              <h2 className="font-bold text-13x tablet:text-14x text-xSiolet-50 leading-20 tracking-closest ">+ Add Feedback</h2>
            </button>

          </header>

          
          <div className={`hidden tablet:flex flex-col space-y-4  tablet:h-4/5 desktop:h-full ${Suggestions.length < 1 ? "": "overflow-y-auto"}`}>
            {Suggestions.length < 1 ? <Feedback404/>  : DesktopSuggestion() }
          </div>

          <div className="flex flex-col px-6 pt-6 space-y-4 overflow-y-auto h-full tablet:hidden">
            {Suggestions.length < 1 ? <Feedback404/>  : MobileSuggestions() }
          </div>

        </section>

      </div>




    </main>


  </>

  );
}