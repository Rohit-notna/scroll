import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import Slider from './Slider';

export default function Header() {


   

  return (
    <div className='z-1'>
      <div className='px-10 py-10'>
        <h1 className='text-6xl opacity-15 fixed'>Review Inbox</h1>
      </div>
      <div className='flex'>
<div className='w-1/3'>
<aside id="default-sidebar" class="fixed top-0 left-0  w-40 h-screen transition-transform -translate-x-full sm:translate-x-0 mt-32" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto  w-96">
      <ul class="space-y-2 font-medium ">
         <li className='opacity-60 hover:opacity-100 '>
            <a href="#" class="flex items-center p-2 text-black rounded-lg hover:text-black hover:bg-white dark:hover:bg-white group">
            <div className='flex'>
               <span class="ms-3"><Icon icon="ic:baseline-plus" className="text-xl mt-1" /></span>
               <span className='pl-2'>New Flow</span>
               </div>
            </a>
         </li>
         <li className='opacity-60 hover:opacity-100'  >
         <a href="#" class="flex items-center p-2 text-black rounded-lg hover:text-black hover:bg-white dark:hover:bg-white group">
         <div className='flex'>
               <span class="ms-3"><Icon icon="ooui:message" className="text-xl mt-1" /></span>
               <span className='pl-2'>Coffee?</span>
               <span className='opacity-60'>-Marisu Lu</span>
               </div>
           
</a>

</li>        
         <li className='opacity-60 hover:opacity-100'>
         <a href="#" class="flex items-center p-2 text-black rounded-lg hover:text-black hover:bg-white dark:hover:bg-white group">
         <div className='flex'>
               <span class="ms-3"><Icon icon="ooui:message" className="text-xl mt-1" /></span>
               <span className='pl-2'>Feedback</span>
               <span className='opacity-60'>-Lindsey Weiss</span>
               </div>
            </a>
         </li>
         <li className='opacity-60 hover:opacity-100'>
         <a href="#" class="flex items-center p-2 text-black rounded-lg hover:text-black hover:bg-white dark:hover:bg-white group">
         <div className='flex'>
               <span class="ms-3"><Icon icon="ooui:message" className="text-xl mt-1" /></span>
               <span className='pl-2'>Post-grad plans</span>
               <span className='opacity-60'>-Evelyn Ma</span>
               </div>
            </a>
         </li>
         <li className='opacity-60 hover:opacity-100'>
         <a href="#" class="flex items-center p-2 text-black rounded-lg hover:text-black hover:bg-white dark:hover:bg-white group">
         <div className='flex'>
               <span class="ms-3"><Icon icon="ooui:message" className="text-xl mt-1" /></span>
               <span className='pl-2'>Launch plan</span>
               <span className='opacity-60'>-Dennis Jin</span>
               </div>
            </a>
         </li>
         <li className='opacity-60 hover:opacity-100'>
         <a href="#" class="flex items-center p-2 text-black rounded-lg hover:text-black hover:bg-white dark:hover:bg-white group">
            <div className='flex'>
               <span class="ms-3"><Icon icon="fe:messanger" color="blue" className="text-xl mt-1"  /></span>
               <span className='pl-2'>Victoria Wang</span>
               </div>
            </a>
         </li>
         <li className='opacity-60 hover:opacity-100'>
         <a href="#" class="flex items-center p-2 text-black rounded-lg hover:text-black hover:bg-white dark:hover:bg-white group">
            <div className='flex'>
               <span class="ms-3"><Icon icon="fe:messanger" color="blue" className="text-xl mt-1"  /></span>
               <span className='pl-2'>Advait Kalakkad</span>
               </div>
            </a>
         </li>
         <li className='opacity-60 hover:opacity-100'>
         <a href="#" class="flex items-center p-2 text-black rounded-lg hover:text-black hover:bg-white dark:hover:bg-white group">
            <div className='flex'>
               <span class="ms-3"><Icon icon="ri:twitter-fill" className="text-xl mt-1"  /></span>
               <span className='pl-2'>Danny Trinh</span>
               </div>
            </a>
         </li>
      </ul>
   </div>
</aside>
</div>
<div className='w-2/3'>
    <Slider/>
</div>




      </div>
    </div>
  )
}
