import React from 'react';
import './foodlist.css'

const FoodList = (props) => {
    const handleSideBar = () => {
        if (props.visible.side === "flex") {
            props.visible.setSide("none");
        } else {
            props.visible.setSide("flex");
        }

    }
    return (
        <div className='sameSide foodlist'>
            <div className="menu material-symbols-outlined" onClick={handleSideBar}>{props.visible.side === "flex" ? "cancel" : "menu"}</div>
            <div>foodlist</div>
        </div>
    )
}

export default FoodList
