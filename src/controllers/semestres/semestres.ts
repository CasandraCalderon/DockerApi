import { Request, Response } from "express";
import semestres from "../../models/semestres/semestres";

class SemestreControllers {
    async index(req: Request, res: Response) {
        const Semestres = await semestres.find({});
        res.send(Semestres);
    }
    async createSemestre(req: Request, res: Response) {
        const newSemestre = new semestres(req.body);
        await newSemestre.save();
        res.send("Semestre creado correctamente");
    }
    async deleteSemestre(req: Request, res: Response) {
        const { id } = req.params;
        await semestres.findByIdAndDelete(id);
        res.send("Semestre Eliminado");
    }
}
export const semestreControllers = new SemestreControllers();