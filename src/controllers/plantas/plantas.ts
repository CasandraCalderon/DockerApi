import { Request, Response } from "express";
import plantas from "../../models/plantas/plantas";

class PlantaControllers {
    async index(req: Request, res: Response) {
        const Plantas = await plantas.find({});
        res.send(Plantas);
    }
    async createPlanta(req: Request, res: Response) {
        const newPlanta = new plantas(req.body);
        await newPlanta.save();
        res.send("Planta creada correctamente");
    }
    async deletePlanta(req: Request, res: Response) {
        const { id } = req.params;
        await plantas.findByIdAndDelete(id);
        res.send("Planta Eliminada : 'v");
    }
}
export const plantaControllers = new PlantaControllers();