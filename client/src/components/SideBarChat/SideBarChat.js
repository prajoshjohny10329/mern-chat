import React from 'react'
import './SideBarChat.css'
import { Avatar } from '@mui/material'
import axios from 'axios';

const SideBarChat = ({addNewChat}) => {

  const createGroup = async ()=>{
    console.log('create group');
    const groupName = prompt('please Enter name for the Group')
    if(groupName){
      try {
        const result  = await axios.post('http://localhost:5000/group/create',{
          groupName:groupName
        })
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }else{
      console.log('error');
    }
  }
   
  return !addNewChat ? (
    <div className='sidebar-chat'>
        <Avatar src='https://api.dicebear.com/7.x/adventurer/svg' />
        <div className="chat-info">
            <h2>Prajosh johny</h2>
        </div>
    </div>
  ):(
    <div className='sidebar-chat'>
        <h2 onClick={createGroup}>add new Chat</h2>
    </div>
  );
}

export default SideBarChat