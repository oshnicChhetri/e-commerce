import { Link } from 'react-router-dom';
import { RiLogoutBoxLine } from "react-icons/ri";
import { SiPhpmyadmin } from "react-icons/si";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { UseAuthContext } from '../../context/AuthContext.jsx';
import  useLogout  from "../hooks/useLogout.js";

const UserPage = ({ isCollapsed, setIsCollapsed }) => {
  const menuItems = [
    { name: "User Details", link: "/user-details" },
    { name: "Change Password", link: "/change-password" },
    { name: "Orders", link: "/orders" },
  ];

  const {loading, logout} = useLogout();
  const {authUser} = UseAuthContext();

  const handleSubmit = async (e) => {
    // e.preventDefault();
    await logout();
  }

  return (

   
    <div className={`${isCollapsed ? "userSidebar" : "userSidebarCollapsed"}`}>
        
        <div className='first2IconContainer'>
        <div className='linkDiv'>
          <Link to="/">

            <IoIosArrowDroprightCircle

              onClick={() => setIsCollapsed(false)}
            />
          </Link>
        </div>

      {
       authUser && authUser.userRole === "admin" && (
        <Link to="/admin">
        
        
            <div className='adminContainer'>
              <span>Admin</span>
              <SiPhpmyadmin className="adminIcon" />
            </div>
            </Link>
        )
      }
        

        </div>
        

       
     
        
     


    
        <ul className="userSidebarUL">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.link}>
                  <li key={index} className="userSidebarItem">

                      {item.name}

                  </li>
            </Link>
           
          ))}
        </ul>

          <Link to="/">
        <RiLogoutBoxLine className="logoutIcon" onClick={handleSubmit} />
          </Link>
      
    </div>
  );
};

export default UserPage;
