import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import Navbar from "./components/navbar.jsx";
import AdminNavbar from "./components/AdminNavbar.jsx"
import AboutUs from "./components/AboutUs.jsx"
import Home from "./pages/Home.jsx";
import CategoryProduct from "./pages/CategoryProduct.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import UserPage from "./pages/UserPage.jsx";
import AdminHome from "./pages/adminPages/AdminHome.jsx"
import AdminAddAccount from "./pages/adminPages/AdminAddAccount.jsx";
import AdminAddProduct from "./pages/adminPages/AdminAddProduct.jsx";
import AdminProducts from "./pages/adminPages/AdminProducts.jsx";
import AdminOrders from "./pages/adminPages/AdminOrders.jsx";
import { Toaster } from "react-hot-toast";
import { UseAuthContext } from '../context/AuthContext.jsx';
import { useState } from "react";



function App() {
  const { authUser } = UseAuthContext();
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  const [isCollapsed, setIsCollapsed] = useState(false);


  return (
    <>
      <Toaster />

      {isAdminRoute ? (
        <AdminNavbar />
      ) : (
        <>

          <UserPage isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />


          <Navbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        </>
      )}



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<CategoryProduct />} />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />

        {/* <Route path="/userPage" element={!authUser ? <Navigate to="/login" /> : <UserPage isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />} /> */}

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            authUser && authUser.userRole === "admin" ? (
              <AdminHome />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/admin/products"
          element={
            authUser && authUser.userRole === "admin" ? (
              <AdminProducts />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/admin/orders"
          element={
            authUser && authUser.userRole === "admin" ? (
              <AdminOrders />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/admin/addProduct"
          element={
            authUser && authUser.userRole === "admin" ? (
              <AdminAddProduct />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/admin/addAccount"
          element={
            authUser && authUser.userRole === "admin" ? (
              <AdminAddAccount />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
      <AboutUs />
    </>
  );
}





export default App
