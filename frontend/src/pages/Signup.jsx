import React from "react";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../hooks/useSignup";
// import useSignup from "../../hooks/useSignup.js";

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: "",
    userEmail: "",
    password: "",
    confirmPassword: "",
    
  });

  const {signup, loading} = useSignup();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    await signup(inputs);
  }


  






  return (
  <div className ="formContainer" >
    <form onSubmit={handleSubmit}  >

      <h1 className="formH1">Sign UP</h1>

     <label htmlFor="fullname" >Full Name</label>
        <input value={inputs.fullName} onChange={(e)=>{setInputs({
          ...inputs, fullName: e.target.value
        })}} type="text" id="fullname" className="formInput" />

        <label htmlFor="email"> Email</label>
        <input value={inputs.userEmail} onChange={(e) => {
          setInputs({
            ...inputs, userEmail: e.target.value
          })
        }} type="text" id="email" className="formInput" />


        <label htmlFor="password" >Password</label>
        <input value={inputs.password} onChange={(e) => {
          setInputs({
            ...inputs, password: e.target.value
          })
        }} type="text" id="password" className="formInput" /> 


        <label htmlFor="confirmPassword" >Confirm Password</label>
        <input value={inputs.confirmPassword} onChange={(e) => {
          setInputs({
            ...inputs, confirmPassword: e.target.value
          })
        }} type="text" id="confirmPassword" className="formInput" />


        <button type="submit" className="submitButton">
           {loading ? (
                        <FaSpinner className="spinnerIcon" />
                      ) : (
                        "Login"
                      )}
        </button>

         <div className="signupLinkContainer">
                  <Link to="/login" className="signupLink"><p>Already Have an account? Login</p></Link>
                </div>
      

    </form>
  </div>
  )
};

export default SignUp;
