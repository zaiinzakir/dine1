import { RiArrowDropDownLine } from 'react-icons/ri'
import { NavbarArray } from '@/src/components/utils/NavbarArrayAndTypes'
import Link from 'next/link'
import React from 'react'

const MobileNavbar = () => {
  return (
    <div>
        <div className='w-full px-6 py-4 bg-gray-100'>
        {
            NavbarArray.map(( item:NavbarItemType, index:number)=>{
                return(
                    <li key={index} className=' group py-2 px-3 flex justify-center  hover:bg-purple-200 rounded-md duration-300 list-none'>
                        <Link href={item.href}>{item.label}</Link>
                        {item.isDropDown? <RiArrowDropDownLine className=" -rotate-180 group-hover:rotate-0 duration-300 " /> : ""}
                    </li>
                )
            })
        }
        </div> 
    </div>
  )
}

export default MobileNavbar