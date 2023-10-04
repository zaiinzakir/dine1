import {PiPlusLight} from 'react-icons/pi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { NavbarArray, NavbarItemType } from '@/src/components/utils/NavbarArrayAndTypes'
import Link from 'next/link'
import React, { useState } from 'react'


const MobileNavbar = () => {
    const[isExpanded, setExpanded] = useState(false)
  return (
    <div>
        <div className=' w-full px-6 py-4 bg-gray-100'>
        {
            NavbarArray.map(( item:NavbarItemType, index:number)=>{
                return(
                    
                        <li key={index} className={`${isExpanded? "h-40" : "h-12"} group py-2 px-3 flex flex-col items-center  rounded-md duration-300 list-none`}>
                            <div onClick={()=>setExpanded(true)} className='flex justify-between'>
                                <Link href={item.href}>{item.label}</Link>
                                {item.isDropDown? <PiPlusLight className='group mt-1 ml-1' size={12} /> : ""}
                            </div>
                            <div className='px-5  space-y-1 text-sm font-light  '>
                                {isExpanded && item.dropDownData?.map((subItem:NavbarItemType,index:number)=>(
                                    <Link className='hover:ml-2 duration-300 list-item' href={subItem.href}>{subItem.label}</Link>
                                ))}
                            </div>
                        </li>
                    
                    
                )
            })
        }
        </div> 
    </div>
  )
}

export default MobileNavbar