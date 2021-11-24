import { Request, Response } from "express";
import segundoS, { ISegundoS } from "../../models/horarios/SegundoS";

class SegundoSControllers {
    async index(req: Request, res: Response) {
        const SegundoS = await segundoS.find({});
        res.send(SegundoS);
    }

    async createClass(req: Request, res: Response) {
        const newclass = new segundoS(req.body);
        await newclass.save();
        res.send("Clase creada");
        
    }
    async editClass(req: Request, res: Response) {
        const { id } = req.params;
        await segundoS.findByIdAndUpdate(id, req.body);
        res.send("Clase actualizada");
    }
    async deleteClass(req: Request, res: Response) {
        const { id } = req.params;
        await segundoS.findByIdAndDelete(id);
        res.send("Clase Eliminada");
    }
}
export const segundoSControllers = new SegundoSControllers();