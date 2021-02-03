import React from 'react';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import "./Chat.css";

function Chat() {
    return (
        <div className="chat">
       <div class="chat__header">
      <Avatar/>
      <div class="chat__headerInfo">
        <h3>Room name</h3>
        <p>Last seen at...</p>
      </div>
    <div class="chat__headerRight">
    <IconButton>
      <SearchIcon/>
      </IconButton>
      <IconButton>
      <AttachFileIcon/>
      </IconButton>
      <IconButton>
      <MoreVertIcon/>
      </IconButton>
      </div>
       </div>
    <div class="chat__body">
       <p className='chat__message'>
           <span className="chat__name">muhal24</span>
           This is a message
           <span className="chat__timestamp">
               {new Date().toUTCString()}
           </span>
           </p>
           <p className='chat__message chat__reciever'>
           <span className="chat__name">muhal24</span>
           This is a message
           <span className="chat__timestamp">
               {new Date().toUTCString()}
           </span>
           </p>
    </div>
    <div class="chat__footer">
     <InsertEmoticonIcon/>
     <form>
         <input  placeholder="Type a message" type="text" />
         <button type="submit">Send a message</button>
     </form>
     <MicIcon/>
     </div>
        </div>
    );
}

export default Chat;
