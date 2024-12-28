import React, { useState } from 'react'
import './Navbar.css'
import { Search,Notifications, ArrowDropDown } from '@mui/icons-material'

const Navbar = () => {
    const [isScrolled,setisScrolled] = useState(false); 
    window.onscroll = ()=>{
        setisScrolled(window.pageYOffset === 0?false:true);
        return ()=> (window.onscroll = null);
    };
  return (
    <div className={isScrolled ? 'Navbar scrolled' : 'Navbar'}>
        <div className='container'>
            <div className='left'>
                <img className='logoimage' src='./netflixlogo.png' alt=""></img>
                <span>HomePage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>MyList</span>
            </div>
            <div className='right'>
                <Search className='icon'></Search>
                <span>KID</span>
                <Notifications className='icon'></Notifications>
                <img className='profileimage' src='https://plus.unsplash.com/premium_photo-1689751148722-721230be7c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' alt=''></img>
                <div className='profile'>
                    <ArrowDropDown className='icon'></ArrowDropDown>
                    <div className='options'>
                        <span>Settting</span>
                        <span>Logout</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar