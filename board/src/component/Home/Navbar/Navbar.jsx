import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AppsIcon from '@mui/icons-material/Apps';
import "./Navbar.css";


// import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  return (
    <div className='navbar' >
      <AppsIcon id="appIcon"/>
      <h1>Trello</h1>
      <nav >
        <ul className='elements'>
          <li>Workspaces <KeyboardArrowDownIcon /></li>
          <li>Recent <KeyboardArrowDownIcon /></li>
          <li>Starred <KeyboardArrowDownIcon /></li>
          <li>Template <KeyboardArrowDownIcon /></li>
          <li>Create</li>
        </ul>
      </nav>

      <div className='icons'>
        < span style={{ display: "flex" }} >
          <input type='text' />
          <SearchIcon />
        </span>
        <div>

        <div>
        <NotificationsActiveIcon />
        <HelpCenterIcon />
        <DarkModeIcon />
        <PermIdentityIcon />
        </div>
      </div>
    </div>

    </div >
  )
}

export default Navbar