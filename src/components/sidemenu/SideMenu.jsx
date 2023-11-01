import React from 'react';
import './sidemenu.css'
import { Link } from 'react-router-dom';

const SideMenu = (props) => {
    return (
        <div className='sidemenu' style={{ display: props.visible.side }}>
            <Link to="/" className="menulist">
                <div className="material-symbols-outlined menulistLogo">dashboard</div>
                <div className="menulistName">Dashboard</div>
            </Link>
            <div className="menulist">
                <div className="material-symbols-outlined menulistLogo">menu_book</div>
                <div className="menulistName">Food List</div>
            </div>
            <div className="menulist">
                <div className="material-symbols-outlined menulistLogo">order_approve</div>
                <div className="menulistName">Order List</div>
            </div>
            <div className="menulist">
                <div className="material-symbols-outlined menulistLogo">shadow_add</div>
                <div className="menulistName">Add New Food </div>
            </div>
            <div className="menulist">
                <div className="material-symbols-outlined menulistLogo">payments</div>
                <div className="menulistName">Invoice List</div>
            </div>
            <div className="menulist">
                <div className="material-symbols-outlined menulistLogo">dashboard</div>
                <div className="menulistName">Dashboard</div>
            </div>
            <div className="menulist">
                <div className="material-symbols-outlined menulistLogo">dashboard</div>
                <div className="menulistName">Dashboard</div>
            </div>
        </div>
    )
}

export default SideMenu
