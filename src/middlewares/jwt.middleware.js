import jwt from "jsonwebtoken";

const jwtAuth = (req,res,next)=>{
    const token = req.headers['authorization'];

    if (!token) {
        res.status(401).send('Unauthorized Access!');
    }

    try {
        const payload = jwt.verify(token,process.env.JWT_KEY);
        console.log(payload);
        req.userId = payload.userId;
    } catch (error) {
        console.log(error);
        res.status(401).send('Unauthorized Access!');
    }
    next();
}

export default jwtAuth;