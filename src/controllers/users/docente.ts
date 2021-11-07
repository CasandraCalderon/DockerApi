import { Request, Response } from "express";
import Docente, { IDocente } from "../../models/users/docente";

class DocenteControllers {
    async index(req: Request, res: Response) {
        const docente = await Docente.find({});
        res.send(docente);
    }

    async createDocente(req: Request, res: Response) {
        const newDocente = new Docente(req.body);
        await newDocente.save();
        res.send("Docente creado correctamente");
    }
    async editDocente(req: Request, res: Response) {
        const { id } = req.params;
        await Docente.findByIdAndUpdate(id, req.body);
        res.send("Docente actualizado");
    }
    async deleteDocente(req: Request, res: Response) {
        const { id } = req.params;
        await Docente.findByIdAndDelete(id);
        res.send("Administrador Eliminado : 'v");
    }
}
export const docenteControllers = new DocenteControllers();
