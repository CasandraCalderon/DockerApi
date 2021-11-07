import { Request, Response } from "express";
import Administrador, { IAdministrador } from "../../models/users/administrador";

class AdministradorControllers {
    async index(req: Request, res: Response) {
        const administrador = await Administrador.find({});
        res.send(administrador);
    }

    async createAdministrador(req: Request, res: Response) {
        const newAdministrador = new Administrador(req.body);
        await newAdministrador.save();
        res.send("Administrador creado correctamente");
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
}
export const administradorControllers = new AdministradorControllers();
