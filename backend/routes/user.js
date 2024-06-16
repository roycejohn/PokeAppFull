import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

const router = express.Router();

const verifyUser = async (req, res, next) => {
    try {
      const token = req.cookies.token;
      if (!token) {
        return res.json({ status: false, message: "no token" });
      }
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      req.user =decoded;
      next()
  
  
    } catch (err) {
      return res.json(err);
    }
  };

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.json({ message: "user already exist" });
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });
  await newUser.save();
  return res.json({ status: true, message: "record registered" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ message: "user is not registered" });
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.json({ message: "password is incorrect" });
  }
  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.cookie("token", token, { httpOnly: true, maxAge: 360000 });
  return res.json({ status: true, message: "login successfully" });
});

router.get("/verify", verifyUser, (req, res) => {
    return res.json({status: true, message: "authorized"})
});

router.get('/logout',(req, res) => {
    res.clearCookie('token')
    return res.json({status:true})
})



export { router as UserRouter };


// import express from "express";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import { User } from "../models/User.js";

// const router = express.Router();

// const verifyUser = async (req, res, next) => {
//     try {
//         const token = req.cookies.token;
//         if (!token) {
//             return res.status(401).json({ status: false, message: "No token" });
//         }
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch (err) {
//         return res.status(401).json({ status: false, message: "Unauthorized", error: err.message });
//     }
// };

// router.post("/signup", async (req, res) => {
//     const { username, email, password } = req.body;
//     try {
//         const user = await User.findOne({ email });
//         if (user) {
//             return res.status(400).json({ message: "User already exists" });
//         }

//         const hashPassword = await bcrypt.hash(password, 10);
//         const newUser = new User({
//             username,
//             email,
//             password: hashPassword,
//         });
//         await newUser.save();
//         return res.status(201).json({ status: true, message: "Record registered" });
//     } catch (err) {
//         return res.status(500).json({ status: false, message: "Server error", error: err.message });
//     }
// });

// router.post("/login", async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ message: "User is not registered" });
//         }
//         const validPassword = await bcrypt.compare(password, user.password);
//         if (!validPassword) {
//             return res.status(400).json({ message: "Password is incorrect" });
//         }
//         const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, {
//             expiresIn: "1h",
//         });
//         res.cookie("token", token, { httpOnly: true, maxAge: 360000 });
//         return res.status(200).json({ status: true, message: "Login successfully" });
//     } catch (err) {
//         return res.status(500).json({ status: false, message: "Server error", error: err.message });
//     }
// });

// router.get("/verify", verifyUser, (req, res) => {
//     return res.status(200).json({ status: true, message: "Authorized" });
// });

// router.get('/logout', (req, res) => {
//     res.clearCookie('token');
//     return res.status(200).json({ status: true, message: "Logged out successfully" });
// });

// export { router as UserRouter };
