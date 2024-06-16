// import User from "../models/userModel";

// export const loginUser = async (req, res) => {
//     res.json({mssg: 'login user'})
// }

// export const signupUser =async (req, res) => {
//     res.json({mssg: 'signup user'})
// }

// export default {signupUser, loginUser}



// const createToken = (id) => {
//     return jwt.sign({ id }, process.env.SECRET, { expiresIn: '1d' });
//   };
  
//   const signupUser = async function (req, res) {
//     const { username, password } = req.body;
  
//     try {
//       const user = await User.signup(username, password);
//       // console.log(user);
//       // res.json(user);
//       const token = createToken(user._id);
//       res.json({ token });
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   };
  
//   const loginUser = async function (req, res) {
//     const { username, password } = req.body;
  
//     try {
//       const user = await User.login(username, password);
//       // console.log(user);
//       // res.json(user);
//       const token = createToken(user._id);
//       // console.log(token);
//       res.json({ token });
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   };
  
//   export { loginUser, signupUser };

// userController.js

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const signupUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ result: newUser, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "User doesn't exist" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export { loginUser, signupUser };