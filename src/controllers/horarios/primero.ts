import { Request, Response } from "express";
import Primero, { IPrimero } from "../../models/horarios/primero";
class PrimeroControllers {
    async index(req: Request, res: Response) {
        const primero = await Primero.find({});
        res.send(Primero);
    }

    async createPrimero(req: Request, res: Response) {
        const newPrimero = new Primero(req.body);
        await newPrimero.save();
        res.send("Clase creada correctamente");
    }
    async editPrimero(req: Request, res: Response) {
        const { id } = req.params;
        await Primero.findByIdAndUpdate(id, req.body);
        res.send("Clase actualizada");
    }
    async deletePrimero(req: Request, res: Response) {
        const { id } = req.params;
        await Primero.findByIdAndDelete(id);
        res.send("Clase Eliminada");
    }
}
export const primeroControllers = new PrimeroControllers();