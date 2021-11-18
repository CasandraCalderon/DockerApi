import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface IPayload {
    id: string;
}

export const authToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('x-acess-token');
    if(!token){
        return res.status(300).json({message: 'token no encontrado'});
    }
    const payload = jwt.verify(token, process.env.TOKEN + "") as IPayload;

    if(payload){
        console.log(payload);
        req.userId = payload.id;
        return next();
    }
    return res.status(500).json({ message: 'token invalido'} );
}