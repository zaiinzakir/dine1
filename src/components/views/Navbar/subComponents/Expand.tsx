import { NavbarItemType } from "@/src/components/utils/NavbarArrayAndTypes";
import Link from "next/link";
import React, { FC, useState } from "react";
import { LiaPlusSquareSolid, LiaMinusSquareSolid } from "react-icons/lia";
import { BiLinkExternal } from "react-icons/bi";
import { RiArrowDropDownLine } from 'react-icons/ri'

const Expand: FC<{ item: NavbarItemType }> = ({ item }) => {
  const [subitemopen, setsubitemopen] = useState<boolean>(false);
  const [duration, setDuration] = useState<boolean>(false);
  function handleDuration() {
    setsubitemopen(!subitemopen);
    setTimeout(() => {
      setDuration(!duration);
    }, 100);
  }

  return (
    <section className="text-center">
      <ul>
        <li>
          <h3 className="flex items-center justify-center gap-x-2 text-lg tracking-wide leading-relaxed scroll-m-20 mb-3 mt-3 focus:outline-none duration-300">
            {item.label}{""}
            {item.dropDownData ? (
              !subitemopen ? (
                <button className="duration-300" onClick={handleDuration}>
                  <RiArrowDropDownLine size={22} className="duration-300" />
                </button>
              ) : (
                <button className="duration-300 " onClick={handleDuration}>
                  <RiArrowDropDownLine size={22} className="-rotate-180 duration-300" />
                </button>
              )
            ) : (
              <BiLinkExternal />
            )}
          </h3>
          {subitemopen &&
            item.dropDownData?.map((subitem: NavbarItemType, i: number) => (
              <Link key={i}
                className="flex items-center justify-center gap-x-1 bg-gray-200 text-gray-800 shadow-xl rounded-sm py-1.5 duration-300 border-b-2 border-black"
                href={subitem.href}
              >
                {subitem.label}{" "}
                <BiLinkExternal className="text-gray-600 duration-300" />
              </Link>
            ))}
        </li>
      </ul>  
    </section>
  );
};

export default Expand;