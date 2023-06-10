
export const CardMobile = () => {
    return (
        <header className="px-6 py-6 bg-white rounded-lg flex flex-col tablet:hidden">
          <h3 className='leading-26 mb-2 tracking-closer text-xSlate-600 text-13x font-bold'>Add tags for solutions</h3>
          <p className="mt-1 mb-2.5 text-13x font-normal text-xSlate-500">Easier to search for solutions based on a specific stack.</p>
          <div className="flex items-start mb-3.5">
              <span className="bg-xSiolet-50 rounded-xl text-xIndigo-600 text-13x font-semibold">
                  <h6 className="px-4 py-2">Enhancement</h6>
              </span>
          </div>

          <div className="flex justify-between items-center">

              <div className="flex-none flex bg-xSiolet-50 hover:bg-indigo-200 px-4 py-1.5 hover:cursor-pointer rounded-xl">
                  <div className="flex items-center">
                      <span>
                          <svg className="h-2 w-2 stroke-xIndigo-600" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4"  stroke-width="2"/></svg>
                      </span>
                      <h1 className="font-bold text-13x text-xSlate-600 tracking-close ml-4">99</h1>
                  </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                      <span>
                          <svg className="h-4 w-5 fill-slate-300" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" /></svg>
                      </span>
                      <span className="text-13x font-bold text-xSlate-600">2</span>
              </div>


          </div>
        </header>

    );
}

