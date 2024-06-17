
// import jwt from "jsonwebtoken";
// import {Router} from 'express';
// import { loginUser, signupUser } from '../controllers/userController.js';

// const userRoutes = Router()
// const verifyUser = async (req, res, next) => {
//     try {
//       const token = req.cookies.token;
//       if (!token) {
//         return res.json({ status: false, message: "no token" });
//       }
//       const decoded = await jwt.verify(token, process.env.JWT_SECRET);
//       req.user =decoded;
//       next()
  
  
//     } catch (err) {
//       return res.json(err);
//     }
//   };

// userRoutes.post('/login', loginUser)

// userRoutes.post('/signup', signupUser)

// userRoutes.get("/verify", verifyUser, (req, res) => {
//     return res.json({status: true, message: "authorized"})
// });

// userRoutes.get('/logout',(req, res) => {
//     res.clearCookie('token')
//     return res.json({status:true})
// })


// export default userRoutes;

import { Router } from 'express';
import { loginUser, signupUser, authVerifyUser, logoutUser } from '../controllers/userController.js';
import { verifyUser } from '../middleware/authMiddleware.js';

const userRoutes = Router();

userRoutes.post('/login', loginUser);
userRoutes.post('/signup', signupUser);


userRoutes.get('/verify', verifyUser, authVerifyUser);

userRoutes.get('/logout', logoutUser);

export default userRoutes;