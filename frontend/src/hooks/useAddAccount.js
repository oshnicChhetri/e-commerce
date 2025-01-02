import { useState } from "react";
import toast from "react-hot-toast";

const useAddAccount = () =>{

    const [loading, setLoading] = useState(false);

    const addAccount = async ({fullName, userEmail, userRole, password, confirmPassword}) =>{

         const success = handleInputsErrors({
           fullName,
           userEmail,
           userRole,
           password,
           confirmPassword,
         });

         if(!success) return;

         setLoading(true)

         try {
            const res = await fetch("/api/auth/createAccount",{
                method: "POST",
                headers : {"Content-Type": "application/json"},
                body: JSON.stringify({
                    fullName,
                    userEmail,
                    userRole,
                    password,
                    confirmPassword
                })
            })

            const data = await res.json();

            if(data.error){
                throw new Error(data.error)
            }else{
                toast.success("Account created succesfully");
            }
            
         } catch (error) {
            toast.error(error.message);
         }finally{
            setLoading(false);
         }
    }

    return {loading, addAccount}
}

export default useAddAccount;


function handleInputsErrors({
  fullName,
  userEmail,
  userRole,
  password,
  confirmPassword,
}) {
  if (!fullName || !userEmail || !userRole || !password || !confirmPassword) {
    toast.error("Please fill in all the fields");
    console.log("error");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");

    return false;
  }
  if (password.length < 6) {
    toast.error("Password must have at least  6 characters");
    return false;
  }

  return true;
}