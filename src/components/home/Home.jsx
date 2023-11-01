import React, { useState } from 'react';
import './home.css'
import SideMenu from '../sidemenu/SideMenu';
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard';

const Home = () => {
    const [side, setSide] = useState("flex")
    return (
        <div className='home'>
            <Routes>
                <Route path='/' element={
                    <div className="homecontent">
                        <SideMenu visible={{ side, setSide }} />
                        <Dashboard visible={{ side, setSide }} />
                    </div>
                } />
            </Routes>

        </div>
    )
}

export default Home
