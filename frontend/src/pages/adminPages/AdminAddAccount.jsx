
import { useState } from 'react';
import useAddAccount from '../../hooks/useAddAccount.js';



  

  
const AdminAddAccount = () => {

    const [inputs, setInputs] = useState({
        fullName: "",
        userEmail: "",
        userRole:"",
        password: "",
        confirmPassword: "",
    })

    const {loading, addAccount} = useAddAccount();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await addAccount(inputs);
    }
  return (
      <div className="formContainer" >
          <form  onSubmit={handleSubmit} >

              <h1 className="formH1">Add Account</h1>

              <label htmlFor="fullname" >Full Name</label>
              <input value={inputs.fullName} onChange={(e) => {
                  setInputs({
                      ...inputs, fullName: e.target.value
                  })
              }} type="text" id="fullname" className="formInput" />

              <label htmlFor="email"> Email</label>
              <input value={inputs.userEmail} onChange={(e) => {
                  setInputs({
                      ...inputs, userEmail: e.target.value
                  })
              }} type="text" id="email" className="formInput" />

              <label htmlFor="userRole">User Role</label>
              <select
                  value={inputs.userRole}
                  onChange={(e) => {
                      setInputs({
                          ...inputs,
                          userRole: e.target.value,
                      });
                  }}
                  id="userRole"
                  className="formInput"
              >
                 
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
              </select>

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
                  Add Account
              </button>


          </form>
      </div>
  )
}

export default AdminAddAccount