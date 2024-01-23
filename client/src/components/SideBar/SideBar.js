import React from 'react'
import "./SideBar.css"

import {Avatar, IconButton} from "@mui/material"
import { useStateValue } from '../contextApi/StateProvider'
import {Chat, DonutLarge, MoreVert, SearchOutlined} from "@mui/icons-material"
import SideBarChat from '../SideBarChat/SideBarChat'

function SideBar() {
    const [{ user }] = useStateValue();
  return (
    <div className='sidebar'>
        <div className='sidebar-header'>
            <Avatar src={user.photoURL}/>
            <div className='sidebar-icons'>
                <IconButton>
                    <DonutLarge></DonutLarge>
                </IconButton>
                <IconButton>
                    <Chat></Chat>
                </IconButton>
                <IconButton>
                    <MoreVert></MoreVert>
                </IconButton>
            </div>
         </div>

            <div className="sidebar-search">
                <div className="search-container">
                    <SearchOutlined/>
                    <input type="text" placeholder='search for new chat' />
                </div>
            </div>
            <div className="sidebar-chats">
                <SideBarChat addNewChat></SideBarChat>
                <SideBarChat></SideBarChat>
                <SideBarChat></SideBarChat>
                <SideBarChat></SideBarChat>
            </div>
    </div>
  )
}

export default SideBar