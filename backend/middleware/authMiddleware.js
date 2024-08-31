
// import jwt from 'jsonwebtoken';

// const verifyUser = async (req, res, next) => {
//     try {
//         const token = req.cookies.token;
//         if (!token) {
//             return res.json({ status: false, message: 'No token' });
//         }
//         const decoded = await jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch (err) {
//         return res.json(err);
//     }
// };

// export { verifyUser };