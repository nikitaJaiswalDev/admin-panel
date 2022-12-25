import './navbar.scss'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';

const Navbar = () => {
  return (
   <div className="navbar">
    <div className="wrapper">
      <div className="search">
        <input type="text" name="" id="" placeholder='Search...'/>
        <SearchRoundedIcon classname="icon"/>
      </div>
      <div className="items">
        <div className="item">
          <LanguageRoundedIcon classname="icon"/> English
        </div>
        <div className="item">
          <ModeNightIcon classname="icon"/>
        </div>
        <div className="item">
          <FullscreenExitIcon classname="icon"/>
        </div>
        <div className="item">
          <NotificationsNoneIcon classname="icon"/>
          <div className="counter">1</div>
        </div>
        <div className="item">
          <ChatBubbleOutlineIcon classname="icon"/>
          <div className="counter">2</div>
        </div>
        <div className="item">
          <ListIcon classname="icon"/>
        </div>
        <div className="item">
          <img className='avatar' alt='avatar' src="https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png"/>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Navbar