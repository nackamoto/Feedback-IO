import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'

export default function SidebarTest({isOpen, setIsOpen, setFilterBy, category, nLive, nPlanned, nProgress }) {

  function closeModal() {
    setIsOpen(false)
  }


  return (
    <main className='tablet:hidden'>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="tablet:hidden z-0 fixed top-20 right-0 bottom-0" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="tablet:hidden fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="tablet:hidden overflow-y-auto">
            <div className="flex h-full items-center justify-center text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="tablet:hidden h-screen w-64 transform overflow-hidden  bg-xSiolet-50 text-left align-middle shadow-xl transition-all">
                    <aside className="tablet:hidden fixed right-0 top-0 h-full transition-transform translate-x-full sm:translate-x-full" aria-labelledby="sidebar">

                        <div className="h-full bg-xSiolet-50 px-6 py-6 space-y-6">
                            <div className="pt-6 pl-6 pr-4 pb-9 bg-white rounded-lg">
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

                            <div className="flex flex-col px-6 pb-6 pt-6  bg-white rounded-lg">
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


                        </div>
                    </aside>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </main>
  )
}
