import React from 'react';
import './dashboard.css';

const Dashboard = (props) => {
    return (
        <div className='sameSide dashboard'>
            <div className="menu material-symbols-outlined" onClick={props.visible.handleSideBar}>{props.visible.side === "flex" ? "cancel" : "menu"}</div>
            <div className="dashboardcontent">
                <div className="recentOrderRevenue">
                    <div className="recentorder">
                        <div className="recentOrderheading"></div>
                    </div>
                    <div className="monthlyRevenue">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
