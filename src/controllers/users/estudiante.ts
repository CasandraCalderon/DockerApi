import { Request, Response } from "express";
import Estudiante, { IEstudiante } from "../../models/users/estudiante";

class EstudianteControllers {
    async index(req: Request, res: Response) {
        const estudiante = await Estudiante.find({});
        res.send(estudiante);
    }

    async createEstudiante(req: Request, res: Response) {
        const newEstudiante = new Estudiante(req.body);
        await newEstudiante.save();
        res.send("Estudiante creado correctamente");
    }
    async editEstudiante(req: Request, res: Response) {
        const { id } = req.params;
        await Estudiante.findByIdAndUpdate(id, req.body);
        res.send("Estudiante actualizado");
    }
    async deleteEstudiante(req: Request, res: Response) {
        const { id } = req.params;
        await Estudiante.findByIdAndDelete(id);
        res.send("Estudiante Eliminado : 'v");
    }
}
export const estudianteControllers = new EstudianteControllers();
