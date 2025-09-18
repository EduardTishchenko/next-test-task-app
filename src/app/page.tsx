'use client'
import Image from "next/image";
import Daschboard from "./page";

import Page from "./page";
import Link from "next/link";
import { usePathname} from 'next/navigation';
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import AvatarAmg from "./avatar"
import {DashboardPage} from "./dashboard/page";
import { useRouter } from "next/router";
import Setting from "./setting/page";


export type User = {
  createdA:Date,
  title:string,
  description:string,
  status:string,
  id:number
}



export default function Home() {
   
 const pathname = usePathname()
 const [data, setData] = useState<User[]>([])
 const [pageSection, setPageSection] = useState("home")
 const [switchPage, setSwitchPage] = useState(false)

 

   useEffect(()=>{
    fetch('https://683857ff2c55e01d184cee44.mockapi.io/api/v1/tasks')
    .then((res)=>res.json())
    .then((data)=> {
       
        if(pageSection ==="home") {
          
        }
          setData(data)
    })
   },[])

    const getCurrentDate = () => {
    const cureentDate: Date = new Date();
    const options:Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate:string=cureentDate.toLocaleDateString("en-Us",options)
    const dayOfWeek = formattedDate.split(',')[0];
    const restOfDate = formattedDate.substring(dayOfWeek.length);
  
    return (
      <span>
         <span className="text-green-500 font-medium">{dayOfWeek}</span>
      {restOfDate}

      </span>
    )
  };
  //   const renderDashedCards = (count:number) => {
  //   return Array.from({ length: count }).map((_, index) => (
  //     <div key={`dashed-${index}`} className=" p-4 rounded-lg border-3 border-dashed border-zinc-400">
  //                 <svg className="w-10 h-30 mx-auto " fill="none" stroke="currentColor" viewBox="0 0 24 24">
            
  //         </svg>
        
  //     </div>
  //   ))
  // }
  
  // let statusToDo = data.filter(s=>s.status==='to-do' )
  // let statusProgres = data.filter(s=>s.status==='in-progress' )
  // let statusReview = data.filter(s=>s.status==='review' )
  // let statusComplited = data.filter(s=>s.status==='completed' )
 

  return (
    
     <div className=" flex  bg-gray-100 ">
      
      <div className="w-64 h-screen bg-white shadow-md p-6 flex flex-col">
        <div className="grid grid-cols-2 mb-8  mr-20">
          <div> <Avatar>
            <AvatarFallback className="bg-amber-400  text-white">C</AvatarFallback>
            </Avatar></div>
          <h1 className="text-2x1 font-bold text-gray-800 mt-1 ">TESTAPP</h1>
          
        </div>
        
        <nav className="">
          <ul>
            <li className="mb-4">
              {/* className={`link ${pathname === '#' ? 'active' : ''}`} */}
               <Link  href="#"  onMouseEnter={() =>  setPageSection("home")}>
                       <span className="mr-2">📊</span>
       {/* {pageSection==='home' ? }  */}
       <span className={`w-full  rounded-lg transition-colors ${
                     pageSection==='home'
                      ? 'text-green-500' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}> Dashboard</span>

      </Link>
         
            </li>
            <li className="mb-4">
             
                     <Link onMouseEnter={() =>  setPageSection("setting")} href="/setting">
                      <span className="mr-2">⚙️</span> 
           <span className={`w-full  rounded-lg transition-colors ${
                     pageSection==='setting'
                      ? 'text-green-500' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}> Settings</span>
      </Link>
            </li>
          </ul>
        </nav>
    </div>
    <div className=" min-w-0" >
       <div className="p-8">
        { pageSection==='home'?<h1 className="text-3xl font-bold text-gray-800 mb-2">My Tasks</h1>:
        <div className=" flex  justify-between  ">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Settings</h1>
          <div className="">
            <h1 className="text-3xl font-bold text-gray-600 mb-2 mr-80">My Profile
           
          </h1>
           <span className="text-green-600">75% complited you profile </span>
           
           <div className="fixed bottom-4 right-4 mr-50">
            <div className="mb-160 pl-15 flex flex-col">
              <Avatar  className="rounded-lg ">
              <AvatarImage />
              <AvatarFallback className="bg-neutral-300 "></AvatarFallback> 
       
      </Avatar>
      <h3>Ures R.</h3>
            

           </div>
            
                 <Button className="bg-red-500 px-30 py-6 text-sm  " size='lg'>Logout</Button>
                 

            </div>
          </div>
          

        </div>
         }
           
          <p className="text-gray-600 " >{getCurrentDate()}</p>

        </div>
   
    { 
    
    pageSection==='setting'?  <Setting/>: <DashboardPage
    data={data} 
    />
    
    }
    

    </div>
  
    </div>
  );
}
