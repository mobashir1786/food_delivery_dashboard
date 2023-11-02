import React from 'react'

const InvoiceList = (props) => {
    return (
        <div className='sameSide invoicelist'>
            <div className="menu material-symbols-outlined" onClick={props.visible.handleSideBar}>{props.visible.side === "flex" ? "cancel" : "menu"}</div>
            <div>invoice list</div>
        </div>
    )
}

export default InvoiceList;