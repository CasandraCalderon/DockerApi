import { Request, Response } from "express";
import Materia, { IMateria } from "../models/materia";
class MateriaControllers {
    async index(req: Request, res: Response) {
        const materias = await Materia.find({});
        res.send(materias);
    }

    async createMateria(req: Request, res: Response) {
        const newMateria = new Materia(req.body);
        await newMateria.save();
        res.send("Materia creada correctamente");
    }
    async editMateria(req: Request, res: Response) {
        const { id } = req.params;
        await Materia.findByIdAndUpdate(id, req.body);
        res.send("Materia actualizada");
    }
    async deleteMateria(req: Request, res: Response) {
        const { id } = req.params;
        await Materia.findByIdAndDelete(id);
        res.send("Materia Eliminada : 'v");
    }
}
export const materiaControllers = new MateriaControllers();