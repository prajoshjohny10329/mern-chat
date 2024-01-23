import React, { useState } from 'react'
import "./Chat.css"
import {Avatar, IconButton} from '@mui/material';
import {AttachFile, InsertEmoticon, MoreVert, SearchOutlined} from "@mui/icons-material"
import axios from 'axios';
import {useStateValue} from '../contextApi/StateProvider';


function Chat() {

  const [input, setInput] = useState('')
  const [{user}] = useStateValue()

  const sendMessage =  async (e)=>{
    e.preventDefault();
    if(!input){
      console.log('no input');
      return;
    }
    console.log(user);


    await axios.post('http://localhost:5000/message/new',{
      message: input,
      name: user.displayName,
      timeStamp: new Date(),
      uid: user.uid,
      roomId: "65aef6fdc4c3c2ba30cd1f01"
    });
    setInput("")
    
  }

  
  return (
    <div className='chat'>
      <div className='chat-header'>
        <Avatar src='https://api.dicebear.com/7.x/adventurer/svg'/>
        <div className="chat-header">
          <h3>React developers</h3>
          <p>last seen at {new Date().toString().slice(0,25)}</p>
        </div>
        <div className="chat-icons">
          <IconButton>
            <SearchOutlined></SearchOutlined>
          </IconButton>
          <IconButton>
            <AttachFile></AttachFile>
          </IconButton>
          <IconButton>
            <MoreVert></MoreVert>
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
        <p className="chat-message">
          <span className='chat-name'>anton jiji</span>
          Hello from anton
          <span className='chat-timestamp'>{new Date().toString().slice(0,25)}</span>
        </p>
        <p className="chat-message chat-receiver">
          <span className='chat-name'>anton jiji</span>
          Hello from prajosh
          <span className='chat-timestamp'>{new Date().toDateString().slice(0,25)}</span>
        </p>
      </div>
      <div className="chat-footer">
        <InsertEmoticon/>
        <form action="">
          <input type="text" placeholder='type any thing'  onChange={(e)=> setInput(e.target.value)} value={input}/>
          <button onClick={sendMessage}>Send message</button>
        </form>
      </div>
    </div>
  )
}

export default Chat