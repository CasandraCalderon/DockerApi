import { Request, Response } from "express";
import tipoAulas from "../../models/tipoAulas/tipoAulas";


class tipoAulaControllers {
    async index(req: Request, res: Response) {
        const TipoAulas = await tipoAulas.find({});
        res.send(TipoAulas);
    }
    async createTAula(req: Request, res: Response) {
        const newAula = new tipoAulas(req.body);
        await newAula.save();
        res.send("Aula creada correctamente");
    }
    async deleteTAula(req: Request, res: Response) {
        const { id } = req.params;
        await tipoAulas.findByIdAndDelete(id);
        res.send("Aula Eliminada : 'v");
    }
}
export const TipoAulaControllers = new tipoAulaControllers();