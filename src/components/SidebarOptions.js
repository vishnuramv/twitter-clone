import React from 'react';
import './SidebarOptions.css';

function SidebarOptions({ active, text, Icon }) {
    return (
        <div className={`sidebarOptions ${active && "sidebarOptions--active"}`} >
            <Icon />
            <p>{text}</p>
        </div >
    )
}

export default SidebarOptions;
