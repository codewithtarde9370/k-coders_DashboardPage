import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { MdSpaceDashboard } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { GrProductHunt } from "react-icons/gr";
import { MdMessage } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { RiLogoutBoxRFill } from "react-icons/ri";


function Sidebar() {
const [activeTab,setActiveTab]=useState(0);
const [isToggleMenu,setIsToggleMenu]=useState(false);

const isOpenSubmenu=(index)=>{
       setActiveTab(index)
       setIsToggleMenu(!isToggleMenu)
    };
  return (
<>
<div className='sidebar'>
<ul>
    <li>
        <Link to="/">
    <Button className={`w-100 ${activeTab===1 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(1)}>
        <span className='icon'><MdSpaceDashboard/></span>
        DashBoard
        <span className='arrow'><IoIosArrowForward/></span>
        </Button></Link>
    </li>
    <li>
    
    <Button className={`w-100 ${activeTab===2 && isToggleMenu===true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(2)}>
        <span className='icon'><GrProductHunt/></span>
        Products
        <span className='arrow'><IoIosArrowForward/></span>
        </Button>
        <div className={`submenu-wrapper ${activeTab===2 && isToggleMenu===true ? 'openMenu' : 'closeMenu'}`}> 

        <ul className='sub-menu'>
            <li><Link to="#">Product List</Link></li>
            <li><Link to="#">Product view</Link></li>
            <li><Link to="#">Product Uploads</Link></li>
        </ul>  
        </div>
        
          </li>
    <li>
    <Link to="/">
    <Button className={`w-100 btn ${activeTab===3 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(3)}>
        <span className='icon'><FaCartArrowDown/></span>
        Orders
        <span className='arrow'><IoIosArrowForward/></span>
        </Button></Link>
    </li>
    <li>
    <Link to="/">
    <Button className={`w-100 ${activeTab===4 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(4)}>
        <span className='icon'><MdMessage/></span>
        Messages
        <span className='arrow'><IoIosArrowForward/></span>
        </Button></Link>
    </li>
    <li>
        <Link to="/">
    <Button className={`w-100 ${activeTab===5 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(5)}>
        <span className='icon'><IoMdNotifications/></span>
        Notifications
        <span className='arrow'><IoIosArrowForward/></span>
        </Button></Link>
    </li>
    <li>
        <Link to="/">
    <Button className="w-100">
        <span className='icon'><IoSettings/></span>
        Settings
        <span className='arrow'><IoIosArrowForward/></span>
        </Button></Link>
    </li>
    <li>
    <Link to="/">
    <Button className="w-100">
        <span className='icon'><FaFileInvoiceDollar/></span>
        Invoices
        <span className='arrow'><IoIosArrowForward/></span>
        </Button></Link>
    </li>
    <li>
        <Link to="/">
    <Button className="w-100">
        <span className='icon'><IoSettings/></span>
        Authentication
        <span className='arrow'><IoIosArrowForward/></span>
        </Button></Link>
    </li>
    <li>
    <Link to="/">
    <Button className="w-100">
        <span className='icon'><IoSettings/></span>
        Users
        <span className='arrow'><IoIosArrowForward/></span>
        </Button></Link>
    </li>
    <li>
    <Link to="/">
    <Button className="w-100">
        <span className='icon'><IoSettings/></span>
        Settings
        <span className='arrow'><IoIosArrowForward/></span>
        </Button></Link>
    </li>
    <li>
    <Link to="/">
    <Button className="w-100">
        <span className='icon'><MdSpaceDashboard/></span>
        DashBoard
        <span className='arrow'><IoIosArrowForward/></span>
        </Button></Link>
    </li>
    <li>
    <Link to="/">
    <Button className="w-100">
        <span className='icon'><GrProductHunt/></span>
        Products
        <span className='arrow'><IoIosArrowForward/></span>
        </Button></Link>
    </li>
    <li>
    <Link to="/">
    <Button className="w-100 btn">
        <span className='icon'><FaCartArrowDown/></span>
        Orders
        <span className='arrow'><IoIosArrowForward/></span>
        </Button></Link>
    </li>
    <li>
    <Link to="/">
    <Button className="w-100">
        <span className='icon'><MdMessage/></span>
        Messages
        <span className='arrow'><IoIosArrowForward/></span>
        </Button></Link>
    </li>
    <li>
    <Link to="/">
    <Button className="w-100">
        <span className='icon'><IoMdNotifications/></span>
        Notifications
        <span className='arrow'><IoIosArrowForward/></span>
        </Button>
        </Link>
    </li>
    <li>
    <Link to="/">
    <Button className="w-100">
        <span className='icon'><IoSettings/></span>
        Settings
        <span className='arrow'><IoIosArrowForward/></span>
        </Button>
        </Link>
    </li>
</ul>
<br/>

<div className='logoutWrapper'>

    <div className='logoutBox'> 
    <Button variant="contained"> <RiLogoutBoxRFill/>Logout</Button>
    </div>

</div>

</div>

</>  )
}

export default Sidebar