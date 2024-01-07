import React from "react";
import { Icon } from "@iconify/react";
import Calend from '../Slider/Calend'


export default function Slider() {
  return (
    <div>
      <div className="z-5 flex overflow-x-auto space-x-4 p-2 scrollbar-hide pl-6  bg-white">
        <div className="flex-shrink-0 ml-20 rounded-lg mr-12 bg-white" style={{ width: "500px" }}>
          <div class="rounded-lg overflow-hidden shadow-lg">



            <div className="flex py-2 px-6 bg-gray-200 ">
              <div className="w-10/12 flex">
                <p>
                  <Icon icon="material-symbols-light:mail" className="text-lg" />
                </p>
                <p className="font-bold text-sm ml-4">Coffee?</p>
                <p className=" text-sm ">- Mail from Marisa Lu</p>
              </div>
              <div className="w-2/12"></div>
              <p>
                <Icon icon="ic:twotone-mic" />
              </p>
            </div>
            
            <div class="pl-6 py-4 w-12/12 ">
                <div className="flex justify-between">
              <div class="mb-2">
              <h4 className="mb-2 text-2xl">Marisa Lu</h4>
              <p className="text-2xl font-bold">Coffee?</p>

              </div>
              <div className=" pr-8 ml-40 opacity-75 ">
              <p>Just now</p>
              </div>
              </div>


              <p className="mt-6 mb-6">
                Hey Jason
              </p>
              <p class="text-gray-700 ">
              was wondering if you'd be interested in meeting my team at <br/>
              Philz Coffee at 11AM today. No pressure if you can't make it.<br/>
              although i think you guys would really get along!
              </p>
              <p className="mt-6 mb-2">Marisa</p>
            </div>
            <div className="mx-auto w-11/12">
                <hr></hr>
            </div>
            <div class="px-6 pt-4 opacity-95 ">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
               Reply
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
             Forward
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              delete
              </span>
            </div>
            <div className="px-6 pt-2 pb-2 flex opacity-75 mb-3">
                <p><Icon icon="gravity-ui:circles-4-square" className="mt-1"/></p>
            <p className="text-sm ml-3 ">More actions</p>

            </div>
          
          </div>
        </div>


 <div className="flex-shrink-0 rounded-lg " style={{ width: "500px" }}>
          <div class="rounded-lg overflow-hidden shadow-lg">



            <div className="flex py-2 px-6 bg-gray-200">
              <div className="w-10/12 flex">
                <p className="font-bold text-sm">
                See my availabilit: today
                </p>
              </div>
              <div className="w-2/12"></div>
              <p>
                <Icon icon="ic:twotone-mic" />
              </p>
            </div>
            
            <div class="px-6 py-4 w-12/12 ">
               
              <div class="mb-2">
              <h4 className="mb-2 text-2xl font-bold">Available until 1 PM</h4>
              <p className="mt-4">Would you like to create an event for <br/>
              Coffee with Marisa at 11 AM?
              </p>

              </div>

              <p class="text-gray-700 ">
             <Calend/>      
 





              </p>
            
            </div>
            <div className="mx-auto w-11/12">
                <hr></hr>
            </div>
            <div class="pl-6 pt-4 opacity-95">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Create Event
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
             Edit Event
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-6 mb-2">
             Full Calender
              </span>
             
              <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold black ml-12 mb-2">
             Dismiss
              </span>
            </div>
            <div className="px-6 pt-2 pb-2 flex opacity-75 mb-3">
                <p><Icon icon="gravity-ui:circles-4-square" className="mt-1"/></p>
            <p className="text-sm ml-3 ">More actions</p>

            </div>
          
          </div>
        </div>




        <div className="flex-shrink-0 ml-96 rounded-lg " style={{ width: "500px" }}>
          <div class="rounded-lg overflow-hidden shadow-lg ml-12">



            <div className="flex py-2 px-6 bg-gray-200 ">
              <div className="w-10/12 flex">
                <p>
                <Icon icon="mdi:location" className="text-lg"  />
                 
                </p>
                <p className="font-bold text-sm ml-4">Philz Coffee</p>
                <p className=" text-sm ">- Location</p>
              </div>
              <div className="w-2/12"></div>
              <p>
                <Icon icon="ic:twotone-mic" />
              </p>
            </div>
            
            <div class="w-12/12 ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d465854.58927626966!2d77.14059201704266!3d24.18964840149272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smap%20coffe!5e0!3m2!1sen!2sin!4v1704626659110!5m2!1sen!2sin" width="100%" height="150" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               <div className="px-6">

             
              <p className="mt-5 mb-2 text-2xl font-bold">
               Philz Coffee
              </p>
              <p class="text-gray-700 font-bold">
             Custom-blended java in a casual setting.
              </p>
              <p className="mt-2 mb-5 text-sm">20686 Stevens Creek Blvd<br/>
              Cupertino, CA 95014
              
              </p>
              </div>
            </div>
            <div className="mx-auto w-11/12">
                <hr></hr>
            </div>
            <div className="pl-6 pt-4 opacity-95 flex">
  <span className="inline-block bg-gray-200 rounded-2xl px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    <div className="flex">
      <Icon icon="mingcute:navigation-fill" /> Get Directions
    </div>
    <div>
      <p className="text-xs">Requires your location</p>
    </div>
  </span>
  <span className="inline-block bg-gray-200 rounded-2xl px-3 py-1 pt-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
    See Details
  </span>
  <span className="inline-block bg-gray-200 rounded-2xl px-2 py-1 pt-2 text-sm font-semibold text-gray-700 mb-2">
    Find more cafes nearby
  </span>
</div>
            <div className="px-6 pt-2 pb-2 flex opacity-75 mb-3">
                <p><Icon icon="gravity-ui:circles-4-square" className="mt-1"/></p>
            <p className="text-sm ml-3 ">More actions</p>

            </div>
          
          </div>
        </div>



      </div>
    </div>
  );
}
