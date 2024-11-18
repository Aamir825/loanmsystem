import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'

const Layout = () => {
    return (
        <>
            <div className=' flex h-screen'>
                <Sidebar />
                <div className=' flex flex-col flex-1'>
                    <Navbar />
                    <main className=' flex-1 overflow-y-auto bg-gradient-to-r from-[#000000] to-[#04363e] text-white py-3 px-4'>
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout