import { Request, Response } from "express";
import TerceroS, {ITerceroS} from "../../models/horarios/TerceroS";

class TerceroSControllers {
    async index(req: Request, res: Response) {
        const terceroS = await TerceroS.find({});
        res.send(terceroS);
    }

    async createClass(req: Request, res: Response) {
        const newclass = new TerceroS(req.body);
        await newclass.save();
        res.send("Clase creada");
        
    }
    async editClass(req: Request, res: Response) {
        const { id } = req.params;
        await TerceroS.findByIdAndUpdate(id, req.body);
        res.send("Clase actualizada");
    }
    async deleteClass(req: Request, res: Response) {
        const { id } = req.params;
        await TerceroS.findByIdAndDelete(id);
        res.send("Clase Eliminada");
    }
}
export const terceroSControllers = new TerceroSControllers();