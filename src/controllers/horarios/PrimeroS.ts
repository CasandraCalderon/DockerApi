import { Request, Response } from "express";
import primeroS, { IPrimeroS } from "../../models/horarios/PrimeroS";

class PrimeroSControllers {
    async index(req: Request, res: Response) {
        const PrimeroS = await primeroS.find({});
        res.send(PrimeroS);
    }

    async createClass(req: Request, res: Response) {
        const { Dia, Turno } = req.body;
        if(await primeroS.findOne({Turno: Turno, Dia: Dia})){
            return res.status(200).json({message: "Este horario ya esta ocupado"});
        }
        else {
            const newclass = new primeroS(req.body);
            await newclass.save();
            res.send("Clase creada");
        }        
        
    }
    async editClass(req: Request, res: Response) {
        const { id } = req.params;
        await primeroS.findByIdAndUpdate(id, req.body);
        res.send("Clase actualizada");
    }
    async deleteClass(req: Request, res: Response) {
        const { id } = req.params;
        await primeroS.findByIdAndDelete(id);
        res.send("Clase Eliminada");
    }
}
export const primeroSControllers = new PrimeroSControllers();