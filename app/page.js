"use client"

import { useState } from "react"

export default function Home() {
  const[openTap,setOpenTap]=useState();
  return (
    <main className="flex items-center justify-center h-full mt-64">
       <div className='border border-gray-300 p-4 bg-white bg-opacity-30 max-w-2xl w-full rounded-2xl'>
            <ul className='flex flex-row items-center text-lg mt-4 font-bold text-gray-900 list-none'>
               <li className={`px-4 py-2 cursor-pointer2 ${openTap === 1 ? 'border-b-2 border-blue-600' : null }`} onClick={()=>setOpenTap(1)} >Login</li>
               <li className={`px-4 py-2 cursor-pointer2 ${openTap === 2 ? 'border-b-2 border-blue-600' : null }`} onClick={()=>setOpenTap(2)} >Register</li>
           </ul>
           <div className=" flex flex-col items-center gap-4">
        
              <h3 className="text-xl font-bold">Login In With</h3>

              <div className="flex   items-center gap-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-400 text-white transition cursor-pointer hover:bg-blue-200 hover:text-blue-400">
                      <svg class="w-6 h-6 fill-current" viewBox="0 0 15 15" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.9773 1.46694C14.964 1.26637 14.8319 1.09326 14.642 1.02752C14.452 0.961775 14.2412 1.01618 14.1067 1.16562C13.7611 1.54977 13.3243 1.81009 12.881 1.92878C12.2644 1.35315 11.436 1.00002 10.5256 1.00002C8.57181 1.00002 6.98923 2.58615 6.98923 4.54112V4.98092C3.99799 4.74976 2.39838 2.47748 1.96675 1.3247C1.89698 1.13836 1.72337 1.01112 1.52468 1.00071C1.32598 0.990288 1.14002 1.09867 1.05114 1.27669C0.00441813 3.37338 -0.156858 5.40696 0.603899 7.13863C1.27032 8.65556 2.61055 9.86392 4.51008 10.6645C3.64679 11.2763 2.19379 12 0.500039 12C0.279771 12 0.0854497 12.1442 0.0215445 12.355C-0.0423608 12.5658 0.0392055 12.7935 0.222392 12.9158C1.8465 14.0003 3.54865 14.0001 5.13184 14L5.1803 14C10.041 14 13.98 10.0538 13.98 5.18751V4.70922C14.3434 4.33984 14.6264 3.96173 14.7998 3.4729C14.9932 2.92746 15.0322 2.295 14.9773 1.46694Z"
                                fill="current" />
                        </svg>
                  </div>
                  <div className="flex items-center justify-center  w-16 h-16 rounded-full  bg-blue-500 text-white transition hover:text-blue-400 hover:bg-blue-100 ">
                       <svg class="w-8 h-8 fill-current" viewBox="0 0 15 15" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.4741 11.909 14.7263 8 14.9836V9H10V8H8V6.5C8 5.67157 8.67157 5 9.5 5H10V4H9.5C8.11929 4 7 5.11929 7 6.5V8H5V9H7V14.9836C3.09098 14.7263 0 11.4741 0 7.5Z"
                                fill="current" />
                        </svg>
                  </div>
                  <div className="flex items-center justify-center w-16 h-16 rounded-full transition text-white bg-red-500 hover:bg-red-200 hover:text-red-500  ">
                        <svg class="w-8 h-8 fill-current" viewBox="0 0 15 15" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0 7.5C0 3.35786 3.35786 0 7.5 0C9.59849 0 11.4964 0.862501 12.8571 2.25107L12.1429 2.95097C10.9625 1.74643 9.31889 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14C10.9216 14 13.7257 11.3562 13.9811 8H8V7H15V7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5Z"
                                fill="current" />
                        </svg>
                  </div>
           </div>
          </div>
          <form className="flex flex-col gap-2">
            <div className="flex flex-col w-full gap-2">
            <lable for="userName" className="custom-lable">userName</lable>
            <div className="w-full relative">
                <input type="text" id="userName" className="custom-input" placeholder="Enter your userName" />
                <svg xmlns="http://www.w3.org/2000/svg" className="mt-2 ml-2 absolute w-6 h-6 text-indigo-700 top-2 left-3"fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                   d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
           </div>
           <div className="flex flex-col w-full gap-2">
               <lable for="Password" className="custom-lable">PassWord</lable>
               <div className="w-full relative">
                 <input type="password" className="custom-input" placeholder="Enter your pass" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2  absolute w-6 h-6 mt-2 text-indigo-700 top-2 left-3"fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
          </div>
          <button class="bg-indigo-700 btn"> Log In </button>
          </form>
          
      </div>
    </main>
      
   
   
  )
}
