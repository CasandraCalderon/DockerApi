import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('x-acess-token');
    if(!token){
        return res.status(300).json({message: 'token no encontrado'});
    }
    const payload = jwt.verify(token, process.env.TOKEN + "");

    if(payload){
        console.log(payload)
        return next();
    }
    return res.status(500).json({ message: 'token invalido'} );
}