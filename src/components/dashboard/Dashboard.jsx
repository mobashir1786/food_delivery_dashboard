import React from 'react';
import './dashboard.css';

const Dashboard = (props) => {
    const handleSideBar = () => {
        if (props.visible.side === "flex") {
            props.visible.setSide("none");
        } else {
            props.visible.setSide("flex");
        }

    }
    return (
        <div className='dashboard'>
            <div className="menu material-symbols-outlined" onClick={handleSideBar}>{props.visible.side === "flex" ? "cancel" : "menu"}</div>

        </div>
    )
}

export default Dashboard
