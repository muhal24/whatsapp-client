import React from 'react';
import './Sidebar.css';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
      <div class="sidebar__header">
          <Avatar src="https://avatars.githubusercontent.com/u/76661007?s=460&u=1f4e2928bc46a8ab1e76c5709461dfa02e67336e&v=4"/>
      <div class="sidebar__headerRight">
      <IconButton>
      <DonutLargeIcon/>
      </IconButton>
      <IconButton>
      <ChatIcon/>
      </IconButton>
      <IconButton>
      <MoreVertIcon/>
      </IconButton>

        </div>
        </div>
<div class="sidebar__search">
  <div class="sidebar__searchContainer">
    <SearchIcon/>
    <input placeholder="Start new chat" type="text"/>
 </div>
</div>
<div class="sidebar__chats">
  <SidebarChat/>
  <SidebarChat/>
  <SidebarChat/>
  <SidebarChat/>
</div>
 </div>
    );
}

export default Sidebar;
