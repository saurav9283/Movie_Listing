import React from 'react'
import Menuitem from './Menuitem'
import { IoMdHome } from "react-icons/io";
import { FaCircleInfo } from "react-icons/fa6";
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';


export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <div className='flex gap-4'>
        <Menuitem title="home" address="/" Icon={IoMdHome} />
        <Menuitem title="about" address="/about" Icon={FaCircleInfo} />
      </div>
      <div className='flex items-center gap-4'>
       <DarkModeSwitch/>
      <Link href={"/"} className='flex gap-1 items-center'>
        <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDB</span>
        <span className='text-2xl hidden sm:inline'>Clone</span>
      </Link>
      </div>
    </div>
  )
}
