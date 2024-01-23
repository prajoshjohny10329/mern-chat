import React, { useEffect, useState } from 'react'
import "./SideBar.css"

import {Avatar, IconButton} from "@mui/material"
import { useStateValue } from '../contextApi/StateProvider'
import {Chat, DonutLarge, MoreVert, SearchOutlined} from "@mui/icons-material"
import SideBarChat from '../SideBarChat/SideBarChat'
import axios from 'axios'

function SideBar() {
    const [{ user }] = useStateValue();
    const [rooms, setRooms] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/groups').then((response) => {
            setRooms(response.data) 
        })
    },[])
    
    console.log(rooms);
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
                {rooms.map ((room) => ( <SideBarChat key={room._id} id={room._id} name={room.name} ></SideBarChat> ) )}
                {/* <SideBarChat></SideBarChat>
                <SideBarChat></SideBarChat>
                <SideBarChat></SideBarChat> */}
            </div>
    </div>
  )
}

export default SideBar