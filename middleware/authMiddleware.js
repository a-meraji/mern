const jwt = require('jsonwebtoken');
const User = require('../models/User');

const checkAuth = (req, res) => {
    const token = req.cookies.jwt;
    //check jwt exist and is verifed
    if(token){
        jwt.verify(token, 'qolam ali secret', (err, decodedToken) => {
            if(err){
                console.log(err.message);
                res.status(400).json({isValid: false})
            }else{
                res.status(200).json({isValid: true})
            }
        })
    }else{
        res.status(200).json({isValid: false})
    }
}

//check current user
// const checkUser = (req, res, next) => {
//     const token = req.cookies.jwt;

//     if(token){
//         jwt.verify(token, 'qolam ali secret', async (err, decodedToken) => {
//             if(err){
//                 console.log(err.message);
//                 res.locals.user = null;
//                 next()
//             }else{
//                 let user = await User.findById(decodedToken.id);
//                 res.locals.user = user;
//                 next();
//             }
//         })
//     }else{
//         res.locals.user = null;
//         next();
//     }
// }

module.exports = {checkAuth};