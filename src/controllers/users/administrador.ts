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
        const {password, RU, CI, Email, Telefono, username} = req.body;
        if(await Administrador.findOne({RU: RU})){
            return res.status(200).json({error: "RU ya existente"});
        }
        if(!/^[[0-9]{4}$/.test(RU)){
            return res.status(200).json({error: "RU no valido"});
        }
        if(await Administrador.findOne({CI: CI})){
            return res.status(200).json({error: "CI ya existente"});
        }
        if(!/^[[0-9]{7,8}$/.test(CI)){
            return res.status(200).json({error: "CI no valido"});
        }
        if(!/^[[0-9]{8}$/.test(Telefono)){
            return res.status(200).json({error: "Numero de telefono no valido"});
        }
        if(await Administrador.findOne({Telefono: Telefono})){
            return res.status(200).json({error: "Ya existe un usuario con este numero de telefono"});
        }
        if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(Email)){
            return res.status(200).json({error: "Email no valido"});
        }
        if(await Administrador.findOne({Email: Email})){
            return res.status(200).json({error: "Correo Electronico ya existente"});
        }
        if(await Administrador.findOne({username: username})){
            return res.status(200).json({error: "Nombre de usuario no disponible"});
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
