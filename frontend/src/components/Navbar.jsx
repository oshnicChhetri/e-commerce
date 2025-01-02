import React from 'react';


import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { LuCircleUserRound } from "react-icons/lu";
import { IoLogInOutline } from "react-icons/io5";
import { UseAuthContext } from '../../context/AuthContext';

import SearchBar from './SearchBar';


const Navbar = ({ setIsCollapsed }) => {

  const { authUser } = UseAuthContext();
  return (

    <nav className="mainNav">

      <Link to="/" className=' mainLogoLink'>
        <img className="mainLogo" src="/logo.png" alt="mainLogo" />
      </Link>

      <SearchBar />


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
