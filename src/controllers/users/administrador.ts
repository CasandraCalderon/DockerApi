import { Request, Response } from "express";
import Administrador, { IAdministrador } from "../../models/users/administrador";
import { JsonWebToken } from '../../middleware/JsonWebToken';
class AdministradorControllers {
    async index(req: Request, res: Response) {
        const administrador = await Administrador.find({});
        //console.log(req.userId);
        //const user = await Administrador.findById(req.userId);
        //res.status(200).json({ message: 'all user', administrador});
        res.send(administrador);
    }

    async createAdministrador(req: Request, res: Response) {
        const {password, RU} = req.body;
        if(await Administrador.findOne({RU: RU})){
            return res.status(200).json({message: "RU YA EXISTENTE"});
        }
        const newAdministrador: IAdministrador = new Administrador(req.body);
        newAdministrador.password = await newAdministrador.encryptPassword!(password);
        await newAdministrador.save();
        res.status(200).json({ message: 'Administrador creado', newAdministrador});
    }
    async editAdministrador(req: Request, res: Response) {
        const { id } = req.params;
        await Administrador.findByIdAndUpdate(id, req.body);
        res.send("Administrador actualizado");
    }
    async deleteAdministrador(req: Request, res: Response) {
        const { id } = req.params;
        await Administrador.findByIdAndDelete(id);
        res.send("Administrador Eliminado : 'v");
    }
    async login (req: Request, res: Response) {
        const {username, password} = req.body;
        const user = await Administrador.findOne({ username: username });
        if(user) {
            if(await user.matchPassword!(password)) {
                const token = JsonWebToken(user._id);
                return res.status(200).json({ message: "LOGUEADO", user, token});
            }
            return res.status(200).json({ message: "Contraseña incorrecta"});
        }
        return res.status(200).json({message: "Usuario no encontrado"});
            
    }
}
export const administradorControllers = new AdministradorControllers();
