import React from 'react';
import './sidemenu.css'
import { Link } from 'react-router-dom';

const SideMenu = (props) => {
    const handleLogout = () => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:01 GMT";
        document.location.href = "http://localhost:3000/"
    }
    return (
        <div className='sidemenu' style={{ display: props.visible.side }}>
            <Link to="/" className="menulist">
                <div className="material-symbols-outlined menulistLogo">dashboard</div>
                <div className="menulistName">Dashboard</div>
            </Link>
            <Link to="/foodlist" className="menulist">
                <div className="material-symbols-outlined menulistLogo">menu_book</div>
                <div className="menulistName">Food List</div>
            </Link>
            <Link to="/orderlist" className="menulist">
                <div className="material-symbols-outlined menulistLogo">order_approve</div>
                <div className="menulistName">Order List</div>
            </Link>
            <Link to="/addnewfood" className="menulist">
                <div className="material-symbols-outlined menulistLogo">shadow_add</div>
                <div className="menulistName">Add New Food </div>
            </Link>
            <Link to="/invoicelist" className="menulist">
                <div className="material-symbols-outlined menulistLogo">payments</div>
                <div className="menulistName">Invoice List</div>
            </Link>
            <Link to="/" className="menulist">
                <div className="material-symbols-outlined menulistLogo">dashboard</div>
                <div className="menulistName">Dashboard</div>
            </Link>
            <Link to="/" className="menulist">
                <div className="material-symbols-outlined menulistLogo">dashboard</div>
                <div className="menulistName">Dashboard</div>
            </Link>
            <div className="logout menulist" onClick={handleLogout}>
                <div className="material-symbols-outlined menulistLogo">logout</div>
                <div className="menulistName">Logout</div>
            </div>
        </div>
    )
}

export default SideMenu
