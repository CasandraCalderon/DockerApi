import { Request, Response } from "express";
import Aula, { IAula } from "../../models/aulas/aula";

class AulaControllers {
    async index(req: Request, res: Response) {
        const aulas = await Aula.find({});
        res.send(aulas);
    }

    async createAula(req: Request, res: Response) {
        const newAula = new Aula(req.body);
        await newAula.save();
        res.send("Aula creada correctamente");
    }
    async editAula(req: Request, res: Response) {
        const { id } = req.params;
        await Aula.findByIdAndUpdate(id, req.body);
        res.send("Aula actualizada");
    }
    async deleteAula(req: Request, res: Response) {
        const { id } = req.params;
        await Aula.findByIdAndDelete(id);
        res.send("Aula Eliminada : 'v");
    }
}
export const aulaControllers = new AulaControllers();