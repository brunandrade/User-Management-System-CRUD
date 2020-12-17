import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken';

interface TokenPayload{
    id: string;
    iat: number;
    exp: number;
}

export default function authMiddleware(req : Request, res: Response, next: NextFunction){

    //const { authorization } = req.headers;
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    
    if(!authHeader){
        return res.sendStatus(401);
    }

    //const token = authHeader.replace('Bearer', '').trim();
    const [,token] = authHeader.split(' ')

    try {
        const data = jwt.verify(token, 'secret');
        console.log(data);
        const {id} = data as TokenPayload;
        req.userId = id;
        return next();

    } catch {
        return res.sendStatus(401);
    }
}