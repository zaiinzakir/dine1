import React from 'react'
import Image from "next/image"
import { NavbarArray, NavbarItemType } from '../../utils/NavbarArrayAndTypes'
import Link from 'next/link'

const Navbar = () => {
    return(
        <div className="py-6 flex">
            <div className="w-36">
                <Image width={500} height={500}  src={"/Logo.webp"} alt="Logo" />
            </div>
            <div>
                <ul>
                {NavbarArray.map((item: NavbarItemType, index:number)=>(
                    <li>
                       <Link href={item.href}> {item.label} </Link>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar