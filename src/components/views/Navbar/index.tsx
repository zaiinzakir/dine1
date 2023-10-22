"use client"
import { useState } from "react"
import {GrFormClose} from 'react-icons/gr'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { BsBasket3 } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import React from 'react'
import Image from "next/image"
import { NavbarArray, NavbarItemType } from '../../utils/NavbarArrayAndTypes'
import Link from 'next/link'
import DropDown from './subComponents/DropDown'
import MobileNavbar from './subComponents/MobileNavbar'

const Navbar = () => {
    const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false)
    const [cartItemNumber, setcartItemNumber] = useState<number>(0)
    return (
        <div>
            <div className="py-6 flex justify-between item-center space-x-12">
                <div className="w-36 flex-shrink-0">
                    <Image width={500} height={500} src={"/Logo.webp"} alt="Logo" />
                </div>
                <div className='hidden lg:flex justify-between item-center w-full' >
                    <ul className='flex space-x-3 lg:space-x-6 font-medium text-lg'>
                        {NavbarArray.map((item: NavbarItemType, index: number) => (
                            <li className='realtive flex items-center rounded-md px-3 py-1 hover: duration-300 cursor-pointer group'>
                                <Link href={item.href}> {item.label} </Link>
                                {(item.isDropDown ? <RiArrowDropDownLine className=" -rotate-180 group-hover:rotate-0 duration-300" /> : "")}
                                {item.isDropDown &&
                                    <div className={`invisible group-hover:visible absolute top-16 pr-3 px-2 py-1 rounded-md text-md font-light bg-gray-100 min-w-[6rem]`}>
                                        <DropDown item={item} />
                                    </div>
                                }
                            </li>
                        ))}
                    </ul>

                    <div className='border flex items-center text-gray-600 px-3 rounded-md'>
                        <BiSearch />
                        <input
                            type='text'
                            className='pr-5 pl-1 py-1 w-80 flex-grow '
                            placeholder='What are you looking for?'
                        />
                    </div>
                    <div className='flex-shrink-0 relative w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center'>
                        <div
                            className='absolute w-4 h-4 top-0 right-0 bg-red-400 rounded-full text-xs text-white font-light flex items-center justify-center'>
                            {cartItemNumber}
                        </div>
                        <BsBasket3 size={29} />
                    </div>

                    </div>
                    <div onClick={()=> setNavbarOpen(!isNavbarOpen)}>
                        {isNavbarOpen?
                                <div className=' flex lg:hidden'>
                                    <GrFormClose size={25}/>
                                </div>
                            :
                                <div className=' flex lg:hidden h-5 w-5'>
                                    <RxHamburgerMenu size={25}/>
                                </div>
                        }
                    </div>
                </div>
                {
                    isNavbarOpen && <MobileNavbar />
                    
                }    
        </div>
    )
}

export default Navbar