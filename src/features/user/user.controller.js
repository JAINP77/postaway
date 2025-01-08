import UserModel from "./user.model.js";

import jwt from 'jsonwebtoken';

export default class UserController {
    signUp(req,res){      
        const addedUser = UserModel.signUp(req.body);
        console.log(addedUser);        
        res.status(200).send('User Registered Successfully !');
    }

    signIn(req,res){
        const {email,password} = req.body;
        const validUser = UserModel.signIn(email,password);

        if (validUser) {
            const token = jwt.sign(
                {
                    userId:validUser.id,
                    email:email
                },
                process.env.JWT_KEY,
                {
                    expiresIn:'1h'
                });
                return res.status(200).send(token);
        }
        else{
            returnres.status(401).send('Please Enter Valid Credentials');
        }
        
    }
    
}