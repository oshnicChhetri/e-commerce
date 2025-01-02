import { useState } from "react";
import { toast } from "react-hot-toast";
import { UseAuthContext } from "../../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = UseAuthContext();

  const signup = async ({ fullName, userEmail, password, confirmPassword }) => {
    const sucess = handleInputsErrors({
      fullName,
      userEmail,
      password,
      confirmPassword,
    });

    if (!sucess) return;
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          userEmail,
          password,
          confirmPassword,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("eco-green-tech-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading };
};

export default useSignup;

function handleInputsErrors({
  fullName,
  userEmail,
  password,
  confirmPassword,
}) {
  if (!fullName || !userEmail || !password || !confirmPassword) {
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
