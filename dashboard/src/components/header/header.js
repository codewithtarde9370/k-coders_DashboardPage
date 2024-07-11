import React,{useState} from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Logo from './../../assests/images/figma.png';
import { Button } from '@mui/material';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from '../searchBar/searchbox';

import { TbBrightnessUp } from "react-icons/tb";
import { MdNightlight } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import { CiSquareQuestion } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";





function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isNotificationDrop, setNotificationDrop] = useState(false);

    const openProfile = Boolean(anchorEl);
    const handleClickAccProfile = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleCloseAccProfile = () => {
      setAnchorEl(null);
      };

      const openNotifications = Boolean(isNotificationDrop);
      const handleOpenNotificationsDrop = () => {
        setNotificationDrop(true);
      };
      const handleCloseNotificationsDrop  = () => {
        setNotificationDrop(false);
        };
  return (
<>
<header className='row d-flex align-items-center'>
    <div className='container-fluid w-100'>
        <div className='row d-flex align-items-center'>
            {/* Logo Wrapper */}
            <div className='col-sm-2 part1'>
                <Link to={"/"} className='d-flex align-items-center logo'>
                <img src={Logo} alt='logo'></img>
                <span className='ml-2'>K-Coders</span>
                </Link></div>

            <div className='col-sm-3 d-flex align-items-center part2 pl-4'>
                <Button className='rounded-circle'><MdMenuOpen/></Button>
                <SearchBox/>
            </div>   

            <div className='col-sm-7 d-flex align-items-center justify-content-end part3'>
            <Button className='rounded-circle'><TbBrightnessUp/></Button>
            <Button className='rounded-circle'><FaShoppingCart/></Button>
            <Button className='rounded-circle'><MdEmail/></Button>
            <Button className='rounded-circle' onClick={handleOpenNotificationsDrop}><IoIosNotifications/></Button>
            <Menu
        isNotificationDrop={isNotificationDrop}
        className='notifications dropdownlist'
        id="notifications"
        open={openNotifications}
        onClose={handleCloseNotificationsDrop}
        onClick={handleCloseNotificationsDrop}
        
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
       
        <MenuItem onClick={handleCloseNotificationsDrop}>
          <ListItemIcon>
            <CiDeliveryTruck/>
          </ListItemIcon>
          Orders(10)
        </MenuItem>
        <MenuItem onClick={handleCloseNotificationsDrop}>
          <ListItemIcon>
            <BiSolidOffer/>
          </ListItemIcon>
          Top Deals
        </MenuItem>
        <MenuItem onClick={handleCloseNotificationsDrop}>
          <ListItemIcon>
            <CiSquareQuestion/>
          </ListItemIcon>
          Requests
        </MenuItem>
      </Menu>

            <div className='myAcc-Wrapper'>
            <Button className='myacc d-flex align-items-center'onClick={handleClickAccProfile}>
                <div className="userImg">
                    <span className='rounded-circle'>
                        <img src='https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg' alt='user-profile'/></span> </div>
            </Button>
            <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={openProfile}
        onClose={handleCloseAccProfile}
        onClick={handleCloseAccProfile}
        
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleCloseAccProfile}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleCloseAccProfile}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleCloseAccProfile}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleCloseAccProfile}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleCloseAccProfile}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

            </div>
            </div>
            
        </div>
    </div>
</header>
</>  )
}

export default Header