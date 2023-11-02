import React from 'react'

const Orderlist = (props) => {
    return (
        <div className='sameSide orderlist'>
            <div className="menu material-symbols-outlined" onClick={props.visible.handleSideBar}>{props.visible.side === "flex" ? "cancel" : "menu"}</div>
            <div>order list</div>
        </div>
    )
}

export default Orderlist
