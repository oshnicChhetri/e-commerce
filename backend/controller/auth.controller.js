import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import generateTokensSetCookie from "../utils/generateTokenSetCookie.js";


export const signup = async (req, res) => {
  try {
    const { fullName, userEmail, password, confirmPassword,userRole } =
      req.body;

    if (!fullName || !userEmail || !password || !confirmPassword) {
      return res.status(400).json({ error: "All fields need to be filled" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const findUserEmail = await User.findOne({ userEmail });

    if (findUserEmail) {
      return res.status(400).json({ error: "User email already exists" });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      userEmail,
      password: hashedPassword,
      userRole: userRole || "customer"      
    });

    const savedUser = await newUser.save();

    if (savedUser) {
      await generateTokensSetCookie(newUser._id, res);

      res.status(201).json({
        _id: savedUser._id,
        fullName: savedUser.fullName,
        userEmail: savedUser.userEmail,
        userRole: savedUser.userRole,
      });
    }
  } catch (error) {
    console.log("error in signup controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createAccount = async(req,res)=>{
try {
  const { fullName, userEmail, password, confirmPassword, userRole } = req.body;

  if (!fullName || !userEmail || !password || !confirmPassword || !userRole) {
    return res.status(400).json({ error: "All fields need to be filled" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  const findUserEmail = await User.findOne({ userEmail });

  if (findUserEmail) {
    return res.status(400).json({ error: "User email already exists" });
  }

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    fullName,
    userEmail,
    password: hashedPassword,
    userRole: userRole || "user",
  });

  const savedUser = await newUser.save();

  if (savedUser) {
    

    res.status(201).json({
      _id: savedUser._id,
      fullName: savedUser.fullName,
      userEmail: savedUser.userEmail,
      userRole: savedUser.userRole,
    });
  }
} catch (error) {
  console.log("error in signup controller", error.message);
  res.status(500).json({ error: "Internal server error" });
}
}

export const login = async (req, res) => {
  try {
    const { userEmail, password } = req.body;

    const user = await User.findOne({ userEmail });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      res.status(400).json({ error: "Invalid username or password" });
    }

    await generateTokensSetCookie(user._id, res);

    res.status(200).json({
      _id: user.id,
      fullName: user.fullName,
      userEmail: user.userEmail,
      userRole: user.userRole,
    });
  } catch (error) {
    console.log("error in login controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logout sucessful" });
  } catch (error) {
    console.log("error in logout controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};



// export const refreshToken = async (req, res) => {
//   try {
//     const refreshToken = req.cookies.refreshToken;

//     if (!refreshToken) {
//       return res.status(400).json({ message: "No refresh token provided" });
//     }
//     const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

//     const storedToken = await redis.get(`refresh_token:${decoded.userId}`);

//     if (storedToken !== refreshToken) {
//       return res.status(400).json({ message: "Invalid refresh token" });
//     }

//     const acessToken = jwt.sign(
//       { userId: decoded.userId },
//       process.env.ACESS_TOKEN_SECRET,
//       { expiresIn: "15m" }
//     );

//     res.cookie("acessToken", acessToken, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "strict",
//       maxAge: 15 * 60 * 1000,
//     });

//     res.status(201).json({ message: "Token refreshed sucessfully" });
//   } catch (error) {
//     console.log("error in logout controller", error.message);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };
