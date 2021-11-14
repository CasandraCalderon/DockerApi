import jwt from 'jsonwebtoken';
import moment from 'moment';

export const JsonWebToken = (id : string) =>{
    const params = {
        id, 
        iat: moment().unix(),
        exp: moment().add(1, 'day').unix()
    };
    return jwt.sign(params, process.env.TOKEN + "")
}