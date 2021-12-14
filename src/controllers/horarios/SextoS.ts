import { Request, Response } from "express";
import sextoS, { ISextoS } from "../../models/horarios/SextoS";

class SextoSControllers {
    async index(req: Request, res: Response) {
        const SextoS = await sextoS.find({});
        res.send(SextoS);
    }

    async createClass(req: Request, res: Response) {
        const { Dia, Turno, Materia, Docente, Aula } = req.body;
        if(undefined === Dia ||
            Dia === "Seleccionar Dia..." ||
            undefined === Materia ||
            Materia === "Seleccionar Materia..." ||
            undefined === Docente ||
            Docente === "Seleccionar Docente..." ||
            undefined === Aula ||
            Aula === "Seleccionar Aula..." ||
            undefined === Turno ||
            Turno === "Seleccionar Turno..."){
                return res.status(200).json({ error: "Llene los datos vacios" });
            }
        if(await sextoS.findOne({Turno: Turno, Dia: Dia})){
            return res.status(200).json({message: "Este horario ya esta ocupado"});
        }
        else {
            const newclass = new sextoS(req.body);
            await newclass.save();
            res.send("Clase creada");
        }        
        
    }
    async editClass(req: Request, res: Response) {
        const { id } = req.params;
        await sextoS.findByIdAndUpdate(id, req.body);
        res.send("Clase actualizada");
    }
    async deleteClass(req: Request, res: Response) {
        const { id } = req.params;
        await sextoS.findByIdAndDelete(id);
        res.send("Clase Eliminada");
    }
}
export const sextoSControllers = new SextoSControllers();