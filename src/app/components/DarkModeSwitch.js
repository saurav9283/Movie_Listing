"use client"
import React from 'react'
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from 'next-themes';

export default function DarkModeSwitch() {
    const { theme, setTheme,systeumTheme } = useTheme();
    const currentTheme = theme === "systum" ? systeumTheme : theme;
  return (
    <div>
      {
        currentTheme === "dark" ?
        (<MdLightMode onClick={() =>setTheme("light")} className='text-xl cursor-pointer hover:text-amber-500'/>):
        (<MdDarkMode onClick={() => setTheme("dark")} className='text-xl cursor-pointer hover:text-amber-500'/>)
      }
    </div>
  )
}
