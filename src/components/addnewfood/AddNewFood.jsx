import React from 'react'

const AddNewFood = (props) => {
    return (
        <div className='sameSide addnewfood'>
            <div className="menu material-symbols-outlined" onClick={props.visible.handleSideBar}>{props.visible.side === "flex" ? "cancel" : "menu"}</div>
            <div>add new food</div>
        </div>
    )
}

export default AddNewFood
