import React from 'react'
import { AiOutlineProduct } from 'react-icons/ai'
import { BsDatabase } from 'react-icons/bs'
import { FaFileWaveform } from 'react-icons/fa6'
import { HiOutlineCalculator } from 'react-icons/hi'
import { IoCalendarNumberOutline, IoLogoSass } from 'react-icons/io5'
import { MdAddShoppingCart } from 'react-icons/md'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { SiAlwaysdata } from 'react-icons/si'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className=' w-60 bg-gradient-to-r from-[#000000] to-[#1a2b2e]'>
        <div className=' py-3 px-4'>
          <NavLink><IoLogoSass className=' text-white' size={70}/></NavLink>
        </div>
        <div className=' px-4'>
          <ul>
            <NavLink to="/" className={({isActive})=>`flex items-center gap-2 py-3 px-2 text-white text-[13px] rounded-md ${isActive ? "bg-[#ff3300]" : ""}`}><AiOutlineProduct size={20}/>Home</NavLink>
            <NavLink to="addproducts" className={({isActive})=>`flex items-center gap-2 py-3 px-2 text-white text-[13px] rounded-md ${isActive ? "bg-[#ff3300]" : ""}`}><MdAddShoppingCart size={20}/> Products</NavLink>
            <NavLink to="calculator" className={({isActive})=>`flex items-center gap-2 py-3 px-2 text-white text-[13px] rounded-md ${isActive ? "bg-[#ff3300]" : ""}`}><HiOutlineCalculator size={20}/> Calculator</NavLink>
            <NavLink to="recordform" className={({isActive})=>`flex items-center gap-2 py-3 px-2 text-white text-[13px] rounded-md ${isActive ? "bg-[#ff3300]" : ""}`}><FaFileWaveform size={20}/> Data Form</NavLink>
            <NavLink to="records" className={({isActive})=>`flex items-center gap-2 py-3 px-2 text-white text-[13px] rounded-md ${isActive ? "bg-[#ff3300]" : ""}`}><BsDatabase size={20}/> Records</NavLink>
            <NavLink to="installments" className={({isActive})=>`flex items-center gap-2 py-3 px-2 text-white text-[13px] rounded-md ${isActive ? "bg-[#ff3300]" : ""}`}><IoCalendarNumberOutline size={20}/> Installments</NavLink>
            <NavLink to="payments" className={({isActive})=>`flex items-center gap-2 py-3 px-2 text-white text-[13px] rounded-md ${isActive ? "bg-[#ff3300]" : ""}`}><SiAlwaysdata size={20}/> Payments</NavLink>
            <NavLink to="" className={({isActive})=>`flex items-center gap-2 py-3 px-2 text-white text-[13px] rounded-md`}><RiLogoutCircleLine size={20}/> Logout</NavLink>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar