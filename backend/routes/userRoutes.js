import {Router} from 'express';
import { loginUser, signupUser } from '../controllers/userController.js';

const userRoutes = Router()

userRoutes.post('/login', loginUser)

userRoutes.post('/signup', signupUser)


export default userRoutes;