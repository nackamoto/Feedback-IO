import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function PopUp({IsOpen, setIsOpen, title, description, controlText1, controlText2, router}) {

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>


      <Transition appear show={IsOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-13x tablet:text-16x font-bold text-cyan-900"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-13x tablet:text-16x text-slate-600">
                        {description}
                    </p>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <button
                      type="button"
                      className="text-16x  inline-flex justify-center rounded-md border border-transparent bg-blue-200 px-3 py-1  text-blue-900 hover:bg-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => router.push('/suggestions')}
                    >
                      {controlText1}
                    </button>

                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bg-slate-100 px-3 py-1 text-16x  text-slate-400 hover:text-slate-700 hover:underline hover:decoration-slate-700"
                      onClick={closeModal}
                    >
                      {controlText2}
                    </button>

                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
