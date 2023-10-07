import { NavbarItemType } from '@/src/components/utils/NavbarArrayAndTypes'
import React, { FC, useState } from 'react'
import Link from 'next/link'
import {PiPlusLight} from 'react-icons/pi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { NavbarArray,} from '@/src/components/utils/NavbarArrayAndTypes'


const Expand: FC<{item: NavbarItemType }> = ({item}) => {
    const[isExpended, setExpended] = useState(false)
    const [isTimeOut, setTimeOut] = useState<boolean>(false)

    function handleExpand() {
        setExpended (!isExpended);
        setTimeOut(() => {
            setTimeOut(true)
        }, 500)
    }

  return (
    <li className={`${isExpended? "h-40" : "h-12"} group py-2 px-3 flex flex-col items-center  rounded-md duration-300 list-none`}>
        <div onClick={()=> {handleExpand}} className='flex justify-between '>
            <Link href={item.href}>{item.label}</Link>
            {item.isDropDown? <PiPlusLight className='group mt-1 ml-1 'size={12} /> : ""}
        </div>
            

        <div>
            {isExpended && item.dropDownData?.map((subItem: NavbarItemType, index:number) => (
                <Link className='hover:ml-2 rounded-md py-1 duration-300 list-item font-light text-sm' href={subItem.href}>
                    {subItem.label}
                </Link>
            ))}
        </div>
    </li>
    )
}

export default Expand