import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
const Dashboard = () => {
    return (
        <div className='grid w-full h-screen grid-cols-[15%_50%] gap-4'>
            <Navbar />
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Dashboard
