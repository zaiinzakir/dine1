import { NavbarItemType } from "@/src/components/utils/NavbarArrayAndTypes"
import {FC} from 'react'
import Link from 'next/link'
const DropDown: FC<{item:NavbarItemType}> = ({item}) => {
    return (
        <div>
            {item.dropDownData?.map((item:NavbarItemType,index: number) => (
                <li className="hover:ml-2 group-hover:duration-300 -translate-y-5 group-hover:-translate-y-0">
                    <Link href={item.href}>{item.label}</Link>
                </li>

            
            ))}
        </div>
    )
}

export default DropDown