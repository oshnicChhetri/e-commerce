import React from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../public/logo.png";
// import { UseAuthContext } from '../../context/AuthContext';
import { SiPhpmyadmin } from "react-icons/si";

const AdminNavbar = () => {
  // const { authUser } = UseAuthContext();

  const menuItems = [
    { name: "Products", link: "admin/products" },
    { name: "Orders", link: "admin/orders" },
    { name: "Add Product", link: "admin/addProduct" },
    { name: "Add Account", link: "admin/addAccount" },
  ];
  return (
    <nav className="mainAdminNav">
      <Link to="/" className=" mainLogoLink">
        <img className="mainLogo" src={logo} alt="mainLogo" />
      </Link>

      {menuItems.map((item, index) => (
        <Link to={item.link} key={index}>
          <div key={item.name} className="adminNavItems">
            {item.name}
          </div>
        </Link>
      ))}

      <Link to="/">
        <RiLogoutBoxLine className="adminLogoutIcon" />
      </Link>
    </nav>
  );
};

export default AdminNavbar;
