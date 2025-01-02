import React from 'react';
import logo from "../../public/logo.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { LuCircleUserRound } from "react-icons/lu";
import { IoLogInOutline } from "react-icons/io5";
import { UseAuthContext } from '../../context/AuthContext';
import UserPage from '../pages/UserPage';


const Navbar = ({setIsCollapsed}) => {

  const { authUser } = UseAuthContext();
  return (

    <nav className="mainNav">

      <Link to="/" className=' mainLogoLink'>
        <img className="mainLogo" src={logo} alt="mainLogo" />
      </Link>



      <div className='iconContainer' >
        <div className='cartIconContainer'>
          <IoCartOutline className='cartIcon' />
        </div>

        <div>
          {
            authUser ? (
              <div onClick={() => setIsCollapsed(true)}>
                
                  <LuCircleUserRound className="userIcon" />
                
              </div>
            ) : (
              <Link to="/login">
                <IoLogInOutline className="userIcon" />
              </Link>
            )
          }
        </div>

        
  

      </div>


    </nav>
  )
}

export default Navbar
