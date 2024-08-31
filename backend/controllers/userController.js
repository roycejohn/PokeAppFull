import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {User} from '../models/UserModel.js';


const signupUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ 
            username,
            email,
            password: hashedPassword 
        });
        await newUser.save();

        const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ status:true, result: newUser, token });
    } catch (error) {
        res.status(500).json({ status: false, message: "Something went wrong" });
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

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '1h'   
        });
        res.cookie("token", token, { httpOnly: true, maxAge: 360000 });
        return res.json({ status: true, message: "login successfully", username: existingUser.username });
    
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

const logoutUser = (req, res) => {
    res.clearCookie('token');
    return res.json({ status: true, message: 'Logged out successfully' });
};

const authVerifyUser = async (req, res) => {
    return res.json({ status: true, message: 'Authorized' });
};




const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

export { loginUser, signupUser, authVerifyUser, logoutUser, getAllUsers };